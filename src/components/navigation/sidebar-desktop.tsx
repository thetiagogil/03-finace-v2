import { Box, Divider } from "@mui/joy";
import { SIDEBAR_WIDTH } from "../../utils/constants";
import { SidebarContent } from "../layout/sidebar-content";

export const SidebarDesktop = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: { xs: "none", lg: "flex" },
        minWidth: SIDEBAR_WIDTH,
        position: "fixed",
        height: "100vh",
        overflowY: "auto",
        top: 0,
        left: 0
      }}
    >
      <SidebarContent />
      <Divider orientation="vertical" />
    </Box>
  );
};
