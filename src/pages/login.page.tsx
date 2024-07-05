import { FormEvent, useState } from "react";
import { PageContainer } from "../components/layout/containers";
import { FormAuth } from "../components/layout/form-auth";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const form = {
    email,
    password,
    setEmail,
    setPassword
  };

  return (
    <PageContainer>
      <FormAuth login form={form} handleSubmit={handleSubmit} />
    </PageContainer>
  );
};
