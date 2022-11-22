
import Bio from './componentes/Bio'
import './App.css'
import Imagem from './componentes/Imagem'

function App() {


  return (
    <div className="Cards">
      <div>
        <Bio ttitulo='Meus conteudos favoritos' />
        <Bio titulo='ola eu sou a Bia' />
        <Bio paragrafos='Eu sou a Bia,tenho 21 anos,sou de Minas Gerais. Estou me encontrando no mundo da tecnologia e amando viver cada experiencia.' />
        <Imagem link="https://avatars.githubusercontent.com/u/100352006?v=4" alt="foto de uma mulher" />
      </div>
      <div>
        
      </div>



    </div>
  )
}

export default App
