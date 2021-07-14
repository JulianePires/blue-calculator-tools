import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { GiFlamer } from "react-icons/gi";
import { MdBrightness4 } from "react-icons/md";
import { activePaths } from "../../constants/types";

interface headerProps {
  switchActivePath: (pageName: activePaths) => void;
  isCurrentPage: (pageName: activePaths) => boolean;
}

export const Header = ({ switchActivePath, isCurrentPage }: headerProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      p="4"
      w="100%"
      h="15vh"
      bgColor="whiteAlpha.50"
      boxShadow="md"
      alignItems="center"
      justifyContent="space-around"
      wrap={["wrap", "wrap", "wrap", "nowrap"]}
    >
      <Image h={["50%", "50%", "50%", "100%"]} src="./logo-blue.gif" />
      <Text
        fontFamily="'Montserrat', sans-serif"
        fontWeight="600"
        colorScheme="orange"
        color={colorMode === "dark" ? "orange.100" : "orange.400"}
        fontSize={["xl", "xl", "xl", "3xl"]}
      >
        BlueCalculator
      </Text>
      <HStack spacing="4">
        <Breadcrumb
          colorScheme="blue"
          fontWeight="500"
          fontSize="xl"
          spacing="8px"
          separator={<Icon as={GiFlamer} color="orange.500" />}
        >
          <BreadcrumbItem isCurrentPage={isCurrentPage("Calculator")}>
            <BreadcrumbLink
              onClick={() => switchActivePath("Calculator")}
              color={
                isCurrentPage("Calculator")
                  ? "blue.100"
                  : colorMode === "dark"
                  ? "whiteAlpha.800"
                  : "blue.600"
              }
              _hover={{
                color: "blue.100",
              }}
            >
              Calculator
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage={isCurrentPage("IMC")}>
            <BreadcrumbLink
              onClick={() => switchActivePath("IMC")}
              color={
                isCurrentPage("IMC")
                  ? "blue.100"
                  : colorMode === "dark"
                  ? "whiteAlpha.800"
                  : "blue.600"
              }
              _hover={{
                color: "blue.100",
              }}
            >
              IMC
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage={isCurrentPage("TermConversor")}>
            <BreadcrumbLink
              onClick={() => switchActivePath("TermConversor")}
              color={
                isCurrentPage("TermConversor")
                  ? "blue.100"
                  : colorMode === "dark"
                  ? "whiteAlpha.800"
                  : "blue.600"
              }
              _hover={{
                color: "blue.100",
              }}
            >
              TermConversor
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage={isCurrentPage("About")}>
            <BreadcrumbLink
              onClick={() => switchActivePath("About")}
              color={
                isCurrentPage("About")
                  ? "blue.100"
                  : colorMode === "dark"
                  ? "whiteAlpha.800"
                  : "blue.600"
              }
              _hover={{
                color: "blue.100",
              }}
            >
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <IconButton
          aria-label="switch theme"
          colorScheme="orange"
          variant="ghost"
          icon={<MdBrightness4 />}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
};
