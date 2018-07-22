function updateName(x) {
    var name = prompt('Enter a new name');
    para.textContent = 'Player' + `${x}` + ": " + name;
}