import { Typography } from "@mui/joy";
import { useLocation } from "react-router-dom";
import { linksArray } from "../arrays/links-array";
import { SidebarMobile } from "../navigation/sidebar-mobile";
import { Flex } from "../shared/flex";
import { NavbarDropdown } from "./navbar-dropdown";

export const NavbarContent = () => {
  const { pathname } = useLocation();

  const activeContent = linksArray.filter(item => pathname.includes(item.path));

  return (
    <Flex x xsb fullwidth>
      <Flex sx={{ display: { xs: "block", lg: "none" }, pl: { xs: 1, lg: 0 } }}>
        <SidebarMobile />
      </Flex>
      {activeContent.map(item => (
        <Typography key={item.path} level="h3">
          {item.title}
        </Typography>
      ))}
      <Flex sx={{ pr: { xs: 1, lg: 0 } }}>
        <NavbarDropdown />
      </Flex>
    </Flex>
  );
};
