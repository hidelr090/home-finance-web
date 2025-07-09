import "@pages/Login/style.css";
import logo from "@assets/png/logo-nobd.png";

export default function Login() {
  return (
    <div className="login-container">
      {/* Logo do app aqui */}
      <img src={logo} alt="Logo" className="login-logo" style={{ width: 200, height: 'auto' }}/>

      <h2 className="login-title">Entrar na sua conta</h2>

      <form className="login-form">
        <label>
          E-mail
          <input type="email" placeholder="seuemail@email.com" required />
        </label>

        <label>
          Senha
          <input type="password" placeholder="••••••••" required />
        </label>

        <button type="submit" className="login-button">
          Entrar
        </button>

        <button type="button" className="google-button">
          Entrar com Google
        </button>

        <div className="login-links">
          <a href="/recuperar-senha">Esqueci minha senha</a>
          <span> | </span>
          <a href="/cadastro">Criar conta</a>
        </div>
      </form>
    </div>
  );
}
