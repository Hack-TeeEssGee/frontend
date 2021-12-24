import { useState } from "react";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";

const Logbar = () => {
  const [isMobLogbarOpen, setIsMobLogbarOpen] = useState(false);

  return (
    <div className="logbar" isOpen={String(isMobLogbarOpen)}>
      <div
        className="pizza"
        onClick={() => setIsMobLogbarOpen(!isMobLogbarOpen)}
      >
        {isMobLogbarOpen ? <UilTimes /> : <UilBars />}
      </div>

      <div className="logbar-links">
        <button onClick={() => window.location.href=`${window.location.origin}/`}>Go Back</button>
      </div>
    </div>
  );
};

export default Logbar;
