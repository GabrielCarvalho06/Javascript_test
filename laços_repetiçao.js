let html = '<ul>';
let carros = ['Ferrari', 'Toyota', 'Fiat', 'Audi', 'Lamborgini'];

for (let i in carros) {
    html += '<li>'+ carros[i]+'</li>';
}

html += '</ul>'

document.getElementById("demo").innerHTML = html;