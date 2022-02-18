//Projeto Modulo 5

const color1 = document.querySelector('#cor1')
const color2 = document.querySelector('#cor2')
const qGraus = document.querySelector('#qGraus')
const corFonte = document.querySelector('#corF')
const textArea = document.querySelector('#tArea')
const tamanhoFonte = document.querySelector('#tFonte')

//salvar valores dos campos em um objeto.


function salvar() {
    const objeto = {
        color1: color1.value,
        color2: color2.value,
        qGraus: qGraus.value,
        corFonte:corFonte.value,
        textArea: textArea.value,
        tamanhoFonte:tamanhoFonte.value
    }
    //utilizar metodo json para criar uma string JSON deste objeto. (JSON.stringify(objeto))

    const objetoJson = JSON.stringify(objeto);

    //Salvar este objeto no localStorage. (localStorage.setItem('estilos', stringifiedObject))

    localStorage.setItem('estilos', objetoJson)
    console.log(objetoJson);
    carregarStorage();
   }

   //Consumir o localStorage e fazer um parse dos valores. (var parsedLocalStorageObject = JSON.parse(localStorage.getItem('estilos')))



function carregarStorage() {

    const parsedLocalStorageObject = JSON.parse(localStorage.getItem('estilos'));
    console.log(parsedLocalStorageObject);


    const section = document.querySelector('#secao')  
    section.innerHTML = parsedLocalStorageObject.textArea; 
    section.style.fontSize = `${(parsedLocalStorageObject.tamanhoFonte + 'px')}`;
   

    var body = document.querySelector('body')
    body.classList.add('minhaAnimacao')

    const bodyElement = document.querySelector('.minhaAnimacao');

    bodyElement.style.setProperty('--cor-um',parsedLocalStorageObject.color1);
    bodyElement.style.setProperty('--cor-dois',parsedLocalStorageObject.color2);
    bodyElement.style.setProperty('--tamanho-f',parsedLocalStorageObject.tamanhoFonte);
    bodyElement.style.setProperty('--cor-fonte',parsedLocalStorageObject.corFonte);

}


