import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { useCallback, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { Flex } from "./flex";

interface CallbackProps {
  isOpen: boolean | ((prevState: boolean) => boolean);
}

export const NavbarDropdown = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = useCallback(({ isOpen }: CallbackProps) => {
    setOpen(isOpen);
  }, []);

  return (
    <Dropdown open={open} onOpenChange={(_event, isOpen) => handleOpenChange({ isOpen })}>
      <MenuButton variant="plain" sx={{ py: 0, px: 1 }}>
        <Flex x xc yc>
          <IoPersonCircle size={30} />
          {!open ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </Flex>
      </MenuButton>
      <Menu placement="bottom-end">
        <MenuItem>Profile</MenuItem>
        <MenuItem>Sign Out</MenuItem>
      </Menu>
    </Dropdown>
  );
};
