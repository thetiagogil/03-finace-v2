import { FormEvent, useContext, useState } from "react";
import { PageContainer } from "../components/layout/containers";
import { FormAuth } from "../components/layout/form-auth";
import { AuthContext } from "../contexts/auth.context";

export const LoginPage = () => {
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = { email, password };
    try {
      await handleLogin(payload);
    } catch (error) {
      throw error;
    }
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
