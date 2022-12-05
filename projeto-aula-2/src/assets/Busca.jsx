
import  {  useState ,  useEffect  }  from  '  react' //importei os hooks
import  Axios  from  'axios'  // importei o axios

 função  de exportação Busca ( )  {
  const  [ pokemons ,  setPokemons ]  =  useState ( [ ] )  //criei um estado pra salvar os pokemons
  const  [ termoBuscado ,  setTermoBuscado ]  =  useState ( '' )
  const  [ pokemonsFiltrados ,  setPokemonsFiltrados ]  =  useState ( [ ] )

  const  baseURL  =  'https://pokeapi.co/api/v2/pokemon'

  useEffect ( ( )  =>  {
      função assíncrona getData ( ) { 
        resposta const =  await Axios  . get ( baseURL ) //consome uma API 
      setPokemons ( resposta . dados . resultados )  // guarda os dados na variável/estado pokemons
    }
    obterDados ( )
  } ,  [ ] )  //quando a tela carrega

  function  handlePesquisa ( evento )  {
    setTermoBuscado ( event . target . value )
  }

  // O que foi digitado na busca existe na lista?
  useEffect ( ( ) =>  {
    const  filtrado  =  pokémons . filtro ( pokémon  =>  {
      retorna  pokémon . nome . inclui ( termoBuscado )
    } )
    setPokemonsFiltrados ( filtrado )
  } ,  [ pokemons ,  termoBuscado ] )  //existe termo buscado? alguem digitou sem entrada? A API afetou os dados?

  retornar (
    < >
      < input  placeholder = "Digite sua busca"  onChange = { handleSearch }  / >
      { termoBuscado  && 
        pokemonsFiltrados . mapa ( pokémon  =>  {
          retornar (
            < div >
              < p  chave = { pokémon . nome } > { pokémon . nome } < / p >
              < a  href = { pokémon . url } > confira < / a >
            < / div >
          )
      } ) }
    < / >
  )
}