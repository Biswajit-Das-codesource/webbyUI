import React from "react";
import Threads from "../blocks/Backgrounds/Threads/Threads";
function Thread() {
  return (
    <div className="bg-black hidden md:block">
      <div style={{ width: "100%", height: "400px", position: "relative" }}>
        <Threads amplitude={2} distance={0} enableMouseInteraction={true} />
      </div>
    </div>
  );
}

export default Thread;
