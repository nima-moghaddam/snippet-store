import { useRef } from "react";
import Lottie from "react-lottie";
import animation from "./json/code-animate.json";

interface Props {
  width?: number;
  height?: number;
}

const CodeAnimation = ({ width = 200, height = 200 }: Props) => {
  const animationData = JSON.stringify(animation);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(animationData),

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie options={defaultOptions} isPaused height={height} width={width} />
  );
};

export default CodeAnimation;
