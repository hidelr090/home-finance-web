import Button from "@components/Button";
import Form from "@components/Form";
import Input from "@components/Input";
import Label from "@components/Label";
import "@pages/Signup/style.css";

export default function Signup() {
  return (
    <div className="signup-form-container">
      <h1 className="form-title">Cadastre-se</h1>
      <Form>
        <Label htmlFor="name">
          Nome:
          <Input></Input>
        </Label>
        <Label htmlFor="surname">
          Sobrenome:
          <Input></Input>
        </Label>
        <Label htmlFor="email">
          E-mail (login):
          <Input></Input>
        </Label>
        <Label htmlFor="password">
          Senha:
          <Input type="password" placeholder="**********"></Input>
        </Label>
        <Label htmlFor="confirm-password">
          Confirmacao de senha:
          <Input type="password" placeholder="**********"></Input>
        </Label>

        <Button type="submit">Confirmar</Button>

        <Button type="button" className="cancel-button">
          Cancelar
        </Button>
      </Form>
    </div>
  );
}
