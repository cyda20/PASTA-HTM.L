const nome= "cida costa";
let nome2= "";
let pessoaDefault= {
    nome: "cida ",
    idade: "33",
    trabalho:"programadora",
}
let nomes=["maria","ana ","costa" ,"pedro silva"]

let pessoaListaVazia=[];

let pessoas=[
    {
        nome: "francisca ",
        idade: "62",
        trabalho:"programadora",

    },
    {
        nome: "cida ",
        idade: "33",
        trabalho:"programadora",
    }

];


function alterarNome(){
    nome2="maria silva"
    console.log("valor alterado:");
    console.log(nome2);

}
function recebeEalteraNome(novoNome){
    nome2=novoNome
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);

}
function imprirPessoa(pessoa){
    console.log("Nome")
    console.log(pessoa.nome);

    console.log("idade");
    console.log(pessoa.idade);

    console.log("trabalho");
    console.log(pessoa.trabalho);
}



function adicionarPessoa(pessoa) {
  pessoas.push(pessoa);
  
}

function imprirPessoas(){
    console.log("========IMPRIMIR PESSOAS=======");
    pessoas.forEach((item)=>{
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
      console.log(item.trabalho);
  
    })
}

imprirPessoas();

adicionarPessoa({
    nome:"pedro silva",
    idade:"28",
    trabalho:"analista",

});


//imprirPessoa(pessoaDefault)

//imprirPessoa({
   //nome: "cida ",
   // idade: "33",
    //trabalho:"programadora",
//});


//recebeEalteraNome("ana silva");
//recebeEalteraNome("maria silva")

//alterarNome();
