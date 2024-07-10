import { Dropdown, Menu, MenuButton, MenuItem, Typography } from "@mui/joy";
import { useCallback, useContext, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoPersonCircle, IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import { Flex } from "./flex";

type CallbackProps = {
  isOpen: boolean | ((prevState: boolean) => boolean);
};

export const NavbarDropdown = () => {
  const { handleLogout } = useContext(AuthContext);
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
        <MenuItem component={Link} to="/profile">
          <Typography startDecorator={<IoPersonSharp />}>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography color="danger" startDecorator={<FaSignOutAlt />}>
            Log Out
          </Typography>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};
