import { Canvas } from "@react-three/fiber";
import { Model } from "../assets/threeScenes/Scene";
import { Suspense } from "react";

import Loader from "./Loader";
const ThreeHeardphones = (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight color="#333" position={[1, 1, 5]} />
        <Model {...props} />
      </Canvas>
    </Suspense>
  );
};

export default ThreeHeardphones;
