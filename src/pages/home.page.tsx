import { Button } from "@mui/joy";
import { Link } from "react-router-dom";
import { PageContainer } from "../components/layout/containers";
import { Flex } from "../components/layout/flex";

export const HomePage = () => {
  const buttonStyle = { width: { xs: "90%", lg: 400 } };
  return (
    <PageContainer>
      <Flex y xc gap2 fullwidth>
        <Button component={Link} to="/signup" variant="solid" size="lg" sx={buttonStyle}>
          Sign up
        </Button>
        <Button component={Link} to="/login" variant="outlined" size="lg" sx={buttonStyle}>
          Log in
        </Button>
      </Flex>
    </PageContainer>
  );
};
