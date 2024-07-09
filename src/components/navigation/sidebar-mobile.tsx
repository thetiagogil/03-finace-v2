import { Drawer, IconButton } from "@mui/joy";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Flex } from "../layout/flex";
import { SidebarContent } from "../layout/sidebar-content";

export const SidebarMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Flex x xe>
      <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
        <IoIosMenu size={30} />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <SidebarContent textColor="primary.800" />
      </Drawer>
    </Flex>
  );
};
