import { Grid, Stack, Typography } from "@mui/joy";
import { useLocation } from "react-router-dom";
import { linksArray } from "../arrays/links-array";
import { SidebarMobile } from "../navigation/sidebar-mobile";
import { NavbarDropdown } from "./navbar-dropdown";

export const NavbarContent = () => {
  const { pathname } = useLocation();

  const activeContent = linksArray.filter(item => pathname.includes(item.path));

  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid xs={4} sx={{ display: { xs: "block", lg: "none" } }}>
        <SidebarMobile />
      </Grid>
      <Grid xs={4} sx={{ display: { xs: "none", lg: "block" } }} />
      {activeContent.map(item => (
        <Stack component={Grid} xs={4} sx={{ alignItems: "center" }} key={item.path}>
          <Typography level="h3">{item.title}</Typography>
        </Stack>
      ))}
      <Stack component={Grid} xs={4} sx={{ alignItems: "end" }}>
        <NavbarDropdown />
      </Stack>
    </Grid>
  );
};
