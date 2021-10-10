function hora() {
    let d = new Date();
    console.log(d);

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h+':'+m+':'+s;
    console.log(txt);
    document.querySelector('#demo').innerHTML = txt;
}

let timer;

function comecar() {
    timer = setInterval(hora, 1000);
}
function parar() {
    clearInterval(timer);
}