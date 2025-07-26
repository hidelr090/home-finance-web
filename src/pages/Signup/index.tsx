import Button from "@components/Button";
import Form from "@components/Form";
import Input from "@components/Input";
import Label from "@components/Label";
import { useForm } from "@hooks/useForm";
import "@pages/Signup/style.css";
import { signupUser } from "@services/user";
import type { SignupFormData } from "@src/dtos";
import { useNavigate } from "react-router-dom";

const initLoginForm: SignupFormData = {
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function Signup() {
  const { values, setField, resetForm } = useForm<SignupFormData>(initLoginForm);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signupUser(values);
    navigate('/login');
  }

  const handleCancel = () => {
    resetForm();
    navigate('/login');
  }

  return (
    <div className="signup-form-container">
      <h1 className="form-title">Cadastre-se</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          Nome:
          <Input
            id="name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Nome"
          />
        </Label>

        <Label htmlFor="surname">
          Sobrenome:
          <Input
            id="surname"
            value={values.surname}
            onChange={(e) => setField("surname", e.target.value)}
            placeholder="Sobrenome"
          />
        </Label>

        <Label htmlFor="email">
          E-mail (login):
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="exemplo@email.com"
          />
        </Label>

        <Label htmlFor="password">
          Senha:
          <Input
            id="password"
            type="password"
            value={values.password}
            onChange={(e) => setField("password", e.target.value)}
            placeholder="**********"
          />
        </Label>

        <Label htmlFor="confirm-password">
          Confirmação de senha:
          <Input
            id="confirm-password"
            type="password"
            value={values.confirmPassword}
            onChange={(e) => setField("confirmPassword", e.target.value)}
            placeholder="**********"
          />
        </Label>

        <Button type="submit">Confirmar</Button>

        <Button
          type="button"
          className="cancel-button"
          onClick={handleCancel}
        >
          Cancelar
        </Button>
      </Form>
    </div>
  );
}
