/*let html = '<ul>';
let carros = ['Ferrari', 'Toyota', 'Fiat', 'Audi', 'Lamborgini'];

for (let i in carros) {
    html += '<li>'+ carros[i]+'</li>';
}

html += '</ul>'

document.getElementById("demo").innerHTML = html;
*/

let html = '';

let c = 0;

while(c <= 10) {
    html += "Número: "+c+"<br/>"
    c++;
}

document.getElementById("demo").innerHTML = html;