import { useState } from "react";
import BottomSheet from "./components/BottomSheet";
import "./index.css";

export default function App() {
  const [open, setOpen] = useState(true);      // start open for demo

  return (
    <>
      <button className="open-btn" onClick={() => setOpen(true)}>
        Show Sheet
      </button>

      {open && <BottomSheet onClose={() => setOpen(false)} />}
    </>
  );
}
