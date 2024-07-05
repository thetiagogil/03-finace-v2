import { FormEvent, useState } from "react";
import { PageContainer } from "../components/layout/containers";
import { FormAuth } from "../components/layout/form-auth";

export const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password, passwordConfirmation });
  };

  const form = {
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
  };

  return (
    <PageContainer>
      <FormAuth signup form={form} handleSubmit={handleSubmit} />
    </PageContainer>
  );
};
