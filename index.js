var text = document.getElementById('text');
var nbr = document.getElementById('nbr');
var button = document.getElementById('button');
var char = document.getElementById('charac');

button.addEventListener('click', compte);

function compte(){
    let w = text.value.length;
    var c = text.value;

    var stringArray = c.split(" ");

    char.value = w;
    nbr.value= stringArray.length;
};