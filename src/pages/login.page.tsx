import { FormEvent, useContext, useState } from "react";
import { FormPageContainer } from "../components/shared/containers";
import { FormAuth } from "../components/shared/form-auth";
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
    <FormPageContainer>
      <FormAuth login form={form} handleSubmit={handleSubmit} />
    </FormPageContainer>
  );
};
