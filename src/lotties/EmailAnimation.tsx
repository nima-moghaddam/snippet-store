import Lottie from "react-lottie";
import animation from "./json/email-animate.json";

interface Props {
  width?: number;
  height?: number;
}

const EmailAnimation = ({ width = 100, height = 100 }: Props) => {
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

export default EmailAnimation;
