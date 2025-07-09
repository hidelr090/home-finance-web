import '@pages/NotFound/style.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Página não encontrada</p>
      <a href="/" className="notfound-link">Voltar para a página inicial</a>
    </div>
  )
}
