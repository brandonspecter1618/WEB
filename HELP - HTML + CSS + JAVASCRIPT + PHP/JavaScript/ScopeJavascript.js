/*Function Scope 
O escopo é extremamente importante em JavaScript porque ele pode ser 
interpretado de diversas formas. Um exemplo de como essas interpretações 
mudam foi a inclusão dos identificadores let e const, além do var.

Antes do ES2015, a única forma de declararmos uma 
variável em JS seria através da keyword var. 
O problema disso é que var age sobre o escopo da função:*/

function foo (a) {
    var name = 'Lucas'
    
    function bar () {
      var age = 23
      console.log(name) // Lucas
      console.log(age) // 23
    }
    
    bar() // Lucas - 23
    console.log(name) // Lucas
    console.log(age) // age is not defined
  }


/*Block Scope

Anteriormente falamos do escopo criado por funções, 
mas esta não é a única forma de criarmos um escopo no JS. 
Todo o tipo de bloco cria um novo escopo, e por bloco queremos dizer 
qualquer estrutura que utilize chaves, como if, for, while e outras, 
por exemplo:*/  

Escopo de Função

        var name = "Brandon";

        const jsTest = () => {
            var name = "Katherine";
        }

        jsTest()

        document.querySelector("p#result").innerHTML = name;

/*Const e Let

A grande mudança trazida pelo ES2015 foram a introdução de 
let e const como maneiras de definirmos variáveis. 
Essas keywords permitem que trabalhemos não só com o escopo de funções, 
mas também com o escopo dos blocos, por exemplo, se utilizarmos apenas var:

Veja que temos duas variáveis com o mesmo nome. 
Uma delas está no escopo global, ou seja, acessível à 
todas as funções e objetos, e outra está dentro de um escopo de função.

*/

var name = 'Lucas'

    const func = () => {  
    var name = 'Amanda'
    console.log(name) // 'Amanda'
    }

func()

console.log(name) // 'Lucas'  


/*Problem

Veja que agora alteramos a variável name, mesmo estando fora de seu escopo. 
Isso porque o escopo da função só cobre funções, e não outros tipos de blocos, 
e isso essencialmente nos diz que ambas declarações de name estão no escopo 
global.

Isso pode causar uma série de problemas, pois em um código mais complexo, 
podemos ter trocas de variáveis indesejadas ou então vazamentos de memória.

É ai que let e const salvarão nossas vidas.

Ambos let e const possuem escopo de bloco, diferente do escopo de 
função do var. Isto significa que, se reescrevermos nosso trecho anterior 
removendo todos os var, teremos um código muito mais consistente:

*/

var name = 'Lucas'

    if (true) {  
    var name = 'Amanda'
    console.log(name) // 'Amanda'
    }

console.log(name) // 'Amanda' 

//
//
//

/*Porém se usarmos let ou const ?*/

var name = 'Lucas'

    if (true) {  
    let name = 'Amanda'
    console.log(name) // 'Amanda'
    }

console.log(name) // 'Amanda' 