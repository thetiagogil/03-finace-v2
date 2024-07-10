import { Typography } from "@mui/joy";
import { useLocation } from "react-router-dom";
import { SidebarMobile } from "../navigation/sidebar-mobile";
import { Flex } from "./flex";
import { NavbarDropdown } from "./navbar-dropdown";

export const NavbarContent = () => {
  const { pathname } = useLocation();
  const content = {
    Dashboard: {
      title: "Dashboard",
      path: "/dashboard"
    },
    Overview: {
      title: "Overview",
      path: "/overview"
    },
    Transactions: {
      title: "Transactions",
      path: "/transactions"
    },
    Profile: {
      title: "Profile",
      path: "/profile"
    },
    Reports: {
      title: "Reports",
      path: "/reports"
    },
    Settings: {
      title: "Settings",
      path: "/settings"
    }
  };

  const activeContent = Object.values(content).filter(item => pathname.includes(item.path));

  return (
    <Flex x xsb fullwidth>
      <Flex sx={{ display: { xs: "block", lg: "none" } }}>
        <SidebarMobile />
      </Flex>
      {activeContent.map(item => (
        <Typography key={item.path} level="h3">
          {item.title}
        </Typography>
      ))}
      <NavbarDropdown />
    </Flex>
  );
};
