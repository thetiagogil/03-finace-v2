import { Box } from "@mui/joy";
import { SIDEBAR_WIDTH } from "../../utils/constants";
import { SidebarContent } from "../layout/sidebar-content";

export const Sidebar = () => {
  return (
    <Box sx={{ bgcolor: "black", width: SIDEBAR_WIDTH }}>
      <SidebarContent />
    </Box>
  );
};
