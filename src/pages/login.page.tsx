import { Button, Input, Link, Typography } from "@mui/joy";
import { Link as ReactLink } from "react-router-dom";
import { PageContainer } from "../components/layout/containers";
import { Flex } from "../components/layout/flex";

export const LoginPage = () => {
  return (
    <PageContainer>
      <Flex y gap2 sx={{ width: { xs: "90%", sm: 400 } }}>
        <Typography level="h4">Welcome back</Typography>
        <Flex y gap2>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </Flex>
        <Button disabled>Log In</Button>
        <Flex y>
          <Typography>
            Don't have an account?{" "}
            <Link component={ReactLink} to="/signup">
              Sign up here
            </Link>
          </Typography>
          <Typography>
            Go back to{" "}
            <Link component={ReactLink} to="/">
              Home
            </Link>
          </Typography>
        </Flex>
      </Flex>
    </PageContainer>
  );
};
