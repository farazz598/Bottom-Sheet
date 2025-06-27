import { useState } from "react";
import BottomSheet from "./components/BottomSheet";
import "./index.css";

export default function App() {
  const [open, setOpen] = useState(true); // start open for demo

  return (
    <>
      <button className="open-btn" onClick={() => setOpen(true)}>
        Show Bottom Sheet
      </button>

      {open && (
        <BottomSheet
          onClose={() => setOpen(false)}
          snapPoints={[0, 0.5, 0.92]}   /* 0 = fully open, 0.92 ≈ closed */
          initialSnap={1}               /* half‑open on mount */
        >
          <div className="content">
            <h2>Bottom Sheet Demo</h2>
            <p>Drag me ✋ or use the buttons.</p>
            <button onClick={() => alert("Action!")}>Do something</button>
          </div>
        </BottomSheet>
      )}
    </>
  );
}
