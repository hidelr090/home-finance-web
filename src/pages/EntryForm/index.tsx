import Button from "@components/Button";
import Dropdown from "@components/Dropdown";
import Form from "@components/Form";
import Input from "@components/Input";
import Label from "@components/Label";
import "@pages/EntryForm/style.css";

export default function EntryForm() {
  return (
    <div className="entry-form-container">
      <h1 className="form-title">Novo Lancamento</h1>
      <Form className="entry-form">
        <Label htmlFor={"description"}>
          Descricao:
          <Input id="description" type="description" placeholder="" required />
        </Label>
        <div className="split-fields">
          <Label htmlFor={"description"}>
            Valor:
            <Input
              id="description"
              type="description"
              placeholder=""
              required
            />
          </Label>
          <Label htmlFor={"description"}>
            Data:
            <Input
              id="description"
              type="description"
              placeholder=""
              required
            />
          </Label>
          <Label htmlFor={"description"}>
            Tipo de Lancamento:
            <Dropdown
              options={["Receita", "Despesa"]}
              placeholder={`Selecionar`}
              onSelect={(value) => console.log("Selecionado:", value)}
            />
          </Label>
          <Label htmlFor={"description"}>
            Categoria:
            <Dropdown
              options={["Transporte", "Animais de Estimacao", "Investimento"]}
              placeholder={`Selecionar`}
              onSelect={(value) => console.log("Selecionado:", value)}
            />
          </Label>
        </div>
        <Label htmlFor={"description"}>
          Definir porcentagens:
          <div className="percentage-field">
            <p>Hidelgardo Ramirez</p>
            <Input
              id="description"
              type="description"
              placeholder=""
              required
            />
          </div>
          <div className="percentage-field">
            <p>Natalia Camargo</p>
            <Input
              id="description"
              type="description"
              placeholder=""
              required
            />
          </div>
        </Label>
        <Button type="submit">
          Salvar
        </Button>
        <Button type="button" className="cancel-button">Cancelar</Button>
      </Form>
    </div>
  );
}
