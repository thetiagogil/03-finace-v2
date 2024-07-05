import { Box, Button, IconButton, Input, Link, Typography } from "@mui/joy";
import { FC, useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";
import { Flex } from "./flex";

interface Form {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
  setFirstName?: (value: string) => void;
  setLastName?: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setPasswordConfirmation?: (value: string) => void;
}

interface Props {
  signup?: boolean;
  login?: boolean;
  form: Form;
  handleSubmit: (e: React.FormEvent) => void;
}

export const FormAuth: FC<Props> = ({ signup, login, form, handleSubmit }) => {
  const {
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setPasswordConfirmation
  } = form;

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      (signup ? firstName && lastName && passwordConfirmation : true) &&
      email &&
      password &&
      password === passwordConfirmation;

    setIsFormValid(!!isValid);
  }, [signup, firstName, lastName, email, password, passwordConfirmation]);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: { xs: "90%", sm: 400 } }}>
      <Flex y gap2>
        <Flex x yc gap1>
          <Box component={ReactLink} to="/">
            <IconButton size="sm">
              <MdKeyboardArrowLeft size={20} />
            </IconButton>
          </Box>
          <Typography level="h4">{signup ? "Create an account" : login ? "Welcome back" : ""}</Typography>
        </Flex>
        {signup && (
          <Flex x gap1>
            <Input
              placeholder="First Name"
              sx={{ width: "100%" }}
              value={firstName}
              onChange={e => setFirstName?.(e.target.value)}
            />
            <Input
              placeholder="Last Name"
              sx={{ width: "100%" }}
              value={lastName}
              onChange={e => setLastName?.(e.target.value)}
            />
          </Flex>
        )}
        <Flex y gap2>
          <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {signup && (
            <Input
              placeholder="Password Confirmation"
              type="password"
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation?.(e.target.value)}
            />
          )}
        </Flex>
        <Button type="submit" disabled={!isFormValid}>
          {signup && "Sign Up"}
          {login && "Log In"}
        </Button>
        <Flex y>
          <Typography>
            {signup && "Don't have an account? "}
            {login && "Already have an account? "}
            {signup && (
              <Link component={ReactLink} to="/login">
                Log in here
              </Link>
            )}
            {login && (
              <Link component={ReactLink} to="/signup">
                Sign up here
              </Link>
            )}
          </Typography>
        </Flex>
      </Flex>
    </Box>
  );
};
