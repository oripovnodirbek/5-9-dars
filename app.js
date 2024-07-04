const wrapp = document.querySelector('.wrapp')
const imag = document.getElementById('imga')

function createCard(user) {
    return `
    <div class="card">
       <img src="${user.flag}" alt="img api" id="imga">
       <h1>${user.country}</h1>
       <h2>${user.code}</h2>
       <h2>${user.id}</h2>
    </div>
    `
}



document.addEventListener('DOMContentLoaded', function() {
    fetch('https://cars-pagination.onrender.com/all-countries')
    .then(function(respons) {
        if(respons.status < 300) {
            return respons.json()
        }
    })
    .then(function(data) {
        data.length > 0 && data.forEach(user => {
            const card = createCard(user);
            wrapp.innerHTML += card
        });
    })
})

imag.addEventListener('click', function() {
    wrapp.innerHTML.remove('card')
    modal.style.display == 'block'
})
