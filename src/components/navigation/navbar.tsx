import { NavbarContent } from "../layout/navbar-content";
import { Flex } from "../shared/flex";

export const Navbar = () => {
  return (
    <Flex x fullwidth sx={{ bgcolor: "neutral.50", pl: { xs: 1, lg: 2 }, pr: { xs: 1, lg: 0 }, py: 2 }}>
      <NavbarContent />
    </Flex>
  );
};
