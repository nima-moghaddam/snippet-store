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
    <Lottie
      options={defaultOptions}
      height={height}
      width={width}
      style={{ margin: "0 0 0 auto" }}
    />
  );
};

export default CodeAnimation;
