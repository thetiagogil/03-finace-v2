import { SxProps } from "@mui/joy/styles/types";
import { FC, ReactNode } from "react";
import { MAIN_WIDTH } from "../../utils/constants";
import { Navbar } from "../navigation/navbar";
import { SidebarDesktop } from "../navigation/sidebar-desktop";
import { Flex } from "./flex";

interface Props {
  children?: ReactNode;
  sx?: SxProps;
}

export const HomePageContainer: FC<Props> = ({ children }) => {
  return (
    <Flex y xc yc sx={{ height: "80vh" }}>
      {children}
    </Flex>
  );
};

export const FormPageContainer: FC<Props> = ({ children }) => {
  return (
    <Flex y xc sx={{ mt: 4 }}>
      {children}
    </Flex>
  );
};

export const AuthPageContainer: FC<Props> = ({ children }) => {
  return (
    <Flex x xc sx={{ p: 2 }}>
      <SidebarDesktop />
      <Flex y sx={{ width: { xs: "100%", lg: MAIN_WIDTH } }}>
        <Navbar />
        <Flex y sx={{ bgcolor: "neutral.100", p: 1, height: "100%" }}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
