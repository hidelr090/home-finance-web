import Button from "@components/Button";
import Form from "@components/Form";
import Input from "@components/Input";
import Label from "@components/Label";
import { Logo } from "@components/Logo";
import "@pages/Login/style.css";
import { authUser } from "@services/user";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ]= useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { token, refreshToken } = await authUser({ email, password });
    console.log(token)
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("refreshToken", refreshToken);
    navigate('/');
  }

  return (
    <div className="login-container">
      {/* Logo do app aqui */}
      <Logo/>

      <h2 className="login-title">Entrar na sua conta</h2>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor={"email"}>
          E-mail
          <Input id="email" type="email" placeholder="seuemail@email.com" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Label>

        <Label htmlFor={"password"}>
          Senha
          <Input id="password" type="password" placeholder="••••••••" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Label>

        <Button type="submit" className="login-button">
          Entrar
        </Button>

        <Button>Entrar com Google</Button>

        <div className="login-links">
          <a href="/recuperar-senha">Esqueci minha senha</a>
          <span> | </span>
          <a href="/cadastro">Criar conta</a>
        </div>
      </Form>
    </div>
  );
}
