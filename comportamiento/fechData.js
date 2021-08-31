let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//EN ES6
const fechData = (url_api)=>{
    return new Promise((resolve, rejects)=>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange =( () => {
            if (xhttp.readyState ===4){
                (xhttp.status ===200)
                    ?resolve (JSON.parse(xhttp.responseText))
                    :rejects(new Error('Error', url_api))
            }
        });
        xhttp.send();
    });
}
module.exports = fechData;