import Button from "@components/Button";
import Form from "@components/Form";
import Input from "@components/Input";
import Label from "@components/Label";
import { Logo } from "@components/Logo";
import "@pages/Login/style.css";

export default function Login() {
  return (
    <div className="login-container">
      {/* Logo do app aqui */}
      <Logo/>

      <h2 className="login-title">Entrar na sua conta</h2>

      <Form>
        <Label htmlFor={"email"}>
          E-mail
          <Input id="email" type="email" placeholder="seuemail@email.com" required />
        </Label>

        <Label htmlFor={"password"}>
          Senha
          <Input id="password" type="password" placeholder="••••••••" required />
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
