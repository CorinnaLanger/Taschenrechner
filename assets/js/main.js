
function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML += operation;
}

function berechnen() {
let ergebnis= document.getElementById('resultArea');
let result = eval(ergebnis.innerHTML);
ergebnis.innerHTML = result;
}


function del() {
    let loeschen= document.getElementById('resultArea');
    if(loeschen.innerHTML.endsWith(' ')) {
        loeschen.innerHTML = loeschen.innerHTML.slice(0, -3);
    }else {
        loeschen.innerHTML = loeschen.innerHTML.slice(0, -1); 
    }
   
}
