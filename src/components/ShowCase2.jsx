import React from "react";
import Iridescence from "../blocks/Backgrounds/Iridescence/Iridescence";
function ShowCase2() {
  return (
    <div className="w-full min-h-screen bg-black">
      <h1 className="text-white font-bold text-center text-3xl md:pt-10">
        Animated BackGround
      </h1>
      <div className="md:h-screen md:p-20 p-10 rounded-4xl h-1/2">
        <Iridescence
          color={[10, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
    </div>
  );
}

export default ShowCase2;
