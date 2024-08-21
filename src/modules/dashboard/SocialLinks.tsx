import Card from "../../components/card/Card";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SocialDetail from "./components/SocialDetail";
import EmailAnimation from "../../lotties/EmailAnimation";

const socialList = [
  {
    name: "Telegram",
    link: "https://t.me/NimaSm73",
    icon: <FaTelegramPlane />,
    iconColor: "text-[#34abe3]",
  },
  {
    name: "Github",
    link: "https://github.com/nima-moghaddam",
    icon: <FaGithub />,
    iconColor: "text-black",
  },
  {
    name: "Gmail",
    link: "nsmmashhad53@gmail.com",
    icon: <SiGmail />,
    iconColor: "text-red",
  },
  {
    name: "Linkdin",
    link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
    icon: <FaLinkedin />,
    iconColor: "text-[#0077b4]",
  },
];

const SocialLinks = () => {
  return (
    <Card classes="w-full lg:w-1/3">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bolder text-gray-dark">Contact Me</div>
          <p className="mb-3 text-base text-gray">
            For more info connect me throw bellow links.
          </p>
        </div>
        <div className="">
          <EmailAnimation height={80} width={80} />
        </div>
      </div>

      <div className="flex flex-col">
        {socialList.map((social, index) => (
          <SocialDetail
            key={social.name}
            icon={social.icon}
            link={social.link}
            name={social.name}
            iconColor={social.iconColor}
            hasBorder={index !== socialList.length - 1}
          />
        ))}
      </div>
    </Card>
  );
};

export default SocialLinks;
