import { Drawer, IconButton } from "@mui/joy";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { SidebarContent } from "../layout/sidebar-content";
import { Flex } from "../shared/flex";

export const SidebarMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Flex x>
      <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
        <IoIosMenu size={30} />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <SidebarContent textColor="primary.800" />
      </Drawer>
    </Flex>
  );
};
