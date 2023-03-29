import React, { useEffect, useState } from "react";
import WinLayout from "./layout/Win-layout";
import Socket from "./socket/Socket";
function Win() {
  const [timer, setTimer] = useState({ min: 0, sec: 0 });
  // Here we will handle timer
  const handleTimer = (data) => {
    setTimer({ min: data.min, sec: data.sec });
  };
  const handleResult = (data) => {};
  Socket.on("timer", handleTimer);
  Socket.on("result", handleResult);
  return (
    <div className="win">
      <WinLayout timer={timer} />
    </div>
  );
}

export default Win;
