import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorMode from "./ColorMode";
const NavBar = () => {
  return (
    <HStack justify={"space-between"} width={"100%"} p={4}>
      <HStack>
        <Image src={logo} alt="Logo" boxSize={"60px"} objectFit={"contain"} />
        <Text>Navigation Bar</Text>
      </HStack>
      <ColorMode />
    </HStack>
  );
};

export default NavBar;