import { useState } from "react";

const Logbar = () => {
  const [isMobLogbarOpen, setIsMobLogbarOpen] = useState(false);

  return (
    <div className="logbar" isOpen={String(isMobLogbarOpen)}>
      <div
        className="pizza"
        onClick={() => setIsMobLogbarOpen(!isMobLogbarOpen)}
      >
      </div>

      <div className="logbar-links">
        <button onClick={() => window.location.href=`${window.location.origin}/`}>Go Back</button>
      </div>
    </div>
  );
};

export default Logbar;
