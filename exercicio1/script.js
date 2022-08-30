const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//Parte 1
function objMaiusculo(objeto){
    let caixaAlta = {};
    for (var i in objeto){
        caixaAlta[i] = objeto[i].toUpperCase()
    }
    return caixaAlta
}

//Parte 2
const objConcat =(objeto) =>{
    let concat = ''
    for(let i in objeto){
        concat += objeto[i] + " "
    }
    return concat
}

//Parte 3
const imprimirObj = (objeto, callback) =>{
  const imprimir = callback(objeto)
  console.log(imprimir)
}
imprimirObj(objeto, objMaiusculo)
imprimirObj(objeto, objConcat)