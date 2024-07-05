import { Button, Input, Link, Typography } from "@mui/joy";
import { Link as ReactLink } from "react-router-dom";
import { PageContainer } from "../components/layout/containers";
import { Flex } from "../components/layout/flex";

export const SignupPage = () => {
  return (
    <PageContainer>
      <Flex y gap2 sx={{ width: { xs: "90%", sm: 400 } }}>
        <Typography level="h4">Create an account</Typography>
        <Flex x gap1>
          <Input placeholder="First Name" sx={{ width: "100%" }} />
          <Input placeholder="Last Name" sx={{ width: "100%" }} />
        </Flex>
        <Flex y gap2>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Password Confirmation" />
        </Flex>
        <Button disabled>Sign Up</Button>
        <Flex y>
          <Typography>
            Already have an account?{" "}
            <Link component={ReactLink} to="/login">
              Log in here
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
