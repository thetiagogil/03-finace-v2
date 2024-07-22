import { SxProps } from "@mui/joy/styles/types";
import { ReactNode } from "react";
import { MAIN_WIDTH } from "../../utils/constants";
import { Navbar } from "../navigation/navbar";
import { SidebarDesktop } from "../navigation/sidebar-desktop";
import { Flex } from "../shared/flex";

type Props = {
  children?: ReactNode;
  sx?: SxProps;
  hasTabs?: boolean;
};

export const HomePageContainer = ({ children }: Props) => {
  return (
    <Flex y xc yc sx={{ height: "80vh" }}>
      {children}
    </Flex>
  );
};

export const FormPageContainer = ({ children }: Props) => {
  return (
    <Flex y xc sx={{ mt: 4 }}>
      {children}
    </Flex>
  );
};

export const AuthPageContainer = ({ children }: Props) => {
  return (
    <Flex x xc fullwidth sx={{ minHeight: "100vh" }}>
      <SidebarDesktop />
      <Flex y xc fullwidth sx={{ bgcolor: "neutral.100" }}>
        <Navbar />
        <Flex y sx={{ height: "100%", width: { xs: "100%", lg: MAIN_WIDTH }, p: 1 }}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
