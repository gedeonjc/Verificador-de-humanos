function changeColor(color) {
    document.body.style.backgroundColor = color;
}

document.getElementById('verifyBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name.toLowerCase() === 'alisson') {
        result.textContent = 'É um gay!';
    } else {
        result.textContent = 'É um humano';
    }
});
