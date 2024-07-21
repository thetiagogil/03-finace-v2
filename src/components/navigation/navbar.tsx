import { NavbarContent } from "../layout/navbar-content";
import { Flex } from "../shared/flex";

export const Navbar = () => {
  return (
    <Flex x fullwidth sx={{ bgcolor: "neutral.50", px: 2, py: 1 }}>
      <NavbarContent />
    </Flex>
  );
};
