import { useEffect, useRef, useState } from "react";
import "./BottomSheet.css";

export default function BottomSheet({
  children,
  snapPoints = [0, 0.5, 0.9],
  initialSnap = 0,
  onClose
}) {
  const sheetRef = useRef(null);

  // ----- translateY state (px) -----
  const vh = () => window.innerHeight;
  const pxSnapPoints = snapPoints.map((p) => Math.round(p * vh()));
  const [y, setY] = useState(pxSnapPoints[initialSnap]);

  // ----- drag refs -----
  const startY = useRef(0);
  const startTranslate = useRef(0);
  const dragging = useRef(false);

  // ===== pointer handlers =====
  const onPointerDown = (e) => {
    dragging.current = true;
    startY.current = e.clientY;
    startTranslate.current = y;
    sheetRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const delta = e.clientY - startY.current;
    const newY = Math.min(Math.max(startTranslate.current + delta, 0), pxSnapPoints.at(-1));
    setY(newY);
  };

  const onPointerUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    // Snap to nearest point
    const closest = pxSnapPoints.reduce((prev, curr) =>
      Math.abs(curr - y) < Math.abs(prev - y) ? curr : prev
    );
    springTo(closest);
    if (closest === pxSnapPoints.at(-1) && onClose) onClose(); // closed
  };

  // ===== simple spring animation =====
  const stiffness = 0.08;
  const damping = 0.8;
  const velocityRef = useRef(0);
  const frame = useRef(null);

  const springTo = (target) => {
    cancelAnimationFrame(frame.current);
    const animate = () => {
      const displacement = target - y;
      velocityRef.current += displacement * stiffness;
      velocityRef.current *= damping;
      const next = y + velocityRef.current;
      setY(next);
      if (Math.abs(displacement) > 0.5 || Math.abs(velocityRef.current) > 0.5) {
        frame.current = requestAnimationFrame(animate);
      } else {
        setY(target);            // snap exactly
        velocityRef.current = 0; // reset
      }
    };
    frame.current = requestAnimationFrame(animate);
  };

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Clean up RAF
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <div
      ref={sheetRef}
      className="sheet"
      style={{ transform: `translateY(${y}px)` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div className="handle" />
      {children}
    </div>
  );
}
