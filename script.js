function updateCard() {
    const name = document.getElementById('name').value;
    const note = document.getElementById('note').value;
    const wisherName = document.getElementById('wisherName').value;


    const nameElements = document.querySelectorAll('.name');
    nameElements.forEach((element) => {
        element.textContent = name;
    });

    document.querySelector('.note').textContent = note;
    document.querySelector('.wisher_name').textContent = wisherName;


    document.querySelector('.birthdayCard').style.display = 'block';
}