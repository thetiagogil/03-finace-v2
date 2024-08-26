import { ReactNode } from "react";
import { MAIN_WIDTH, SIDEBAR_WIDTH } from "../../utils/constants";
import { Navbar } from "../navigation/navbar";
import { SidebarDesktop } from "../navigation/sidebar-desktop";
import { Flex } from "../shared/flex";

type Props = {
  children?: ReactNode;
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
    <Flex x xc fullwidth fullheight sx={{ minHeight: "100vh" }}>
      <SidebarDesktop />
      <Flex
        y
        xc
        fullwidth
        fullheight
        sx={{
          flex: 1,
          bgcolor: "neutral.100",
          minHeight: "100vh",
          pl: { lg: `${SIDEBAR_WIDTH}px` }
        }}
      >
        <Navbar />
        <Flex y sx={{ flex: 1, width: { xs: "100%", lg: MAIN_WIDTH } }}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
