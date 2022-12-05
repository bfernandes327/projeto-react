import  {  useState ,  useEffect  }  from  '  react' //importei de dentro do react

 função  de exportação Relógio ( )  {
  const  [ horario ,  setHorario ]  =  useState ( new  Date ( ) . toLocaleTimeString ( ) )  //usando meu hook useState

  function  atualizaHora ( )  {
    setHorario ( new  Date ( ) . toLocaleTimeString ( ) )  //atualizando a variavel de dentro do useState
  }

  useEffect ( ( ) =>  {
    setInterval ( atualizaHora ,  1000 )  //chamando a função que invoca a função que vem de dentro do useState, quando a tela carrega
  } ,  [ ] )

  retornar (
    < h2 > { horario } < / h2 >
  )
}