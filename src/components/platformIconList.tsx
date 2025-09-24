import { HStack } from "@chakra-ui/react";
import type { Platform } from "./hook/usegame";
import type { IconType } from "react-icons";
import { FaLaptopCode, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendo3Ds } from "react-icons/si";
import { FaApple, FaLinux, FaMicrophone } from "react-icons/fa6";
import { MdPhoneAndroid, MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaLaptopCode,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo3Ds,
    mac:FaApple,
    linux:FaLinux,
    ios:MdPhoneIphone,
    web:BsGlobe,
    android:MdPhoneAndroid,
  };

  return (
    <HStack>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? <Icon key={platform.id} color="gray.500"/> : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;