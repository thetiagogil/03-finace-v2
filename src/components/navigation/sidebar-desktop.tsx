import { Box } from "@mui/joy";
import { SIDEBAR_WIDTH } from "../../utils/constants";
import { SidebarContent } from "../layout/sidebar-content";

export const SidebarDesktop = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", lg: "block" },
        bgcolor: "primary.800",
        width: SIDEBAR_WIDTH,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16
      }}
    >
      <SidebarContent textColor="white" />
    </Box>
  );
};
