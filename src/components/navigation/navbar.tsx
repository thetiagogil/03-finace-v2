import { Flex } from "../layout/flex";
import { NavbarContent } from "../layout/navbar-content";

export const Navbar = () => {
  return (
    <Flex x fullwidth sx={{ bgcolor: "white", pl: { lg: 2 }, pt: { lg: 2 }, pb: 2 }}>
      <NavbarContent />
    </Flex>
  );
};
