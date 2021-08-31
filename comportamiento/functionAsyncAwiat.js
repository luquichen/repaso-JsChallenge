const fechData = require('./fechData'); //esto me tira error
const API = 'http://api.coinlayer.com/api/live?access_key=08f38e198946047d1527b0d7c25d483a';

let auxParrafo = document.getElementById('money');

const anotherFunction = async (url_api) =>{
    try{
        const data = await fechData(url_api);
        console.log(data.target)
        auxParrafo.innerText = data.target;  //esto es lo que quiero mostrar en la etiqueta P con id= "money"
        console.log(data.rates.BCN);
    }catch(error){
        console.error(error);
    }
}


anotherFunction(API); //ESTO POR CONSOLA ANDA (RUN CODE)
