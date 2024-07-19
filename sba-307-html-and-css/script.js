const logIn = document.getElementById("logIn");
const registration = document.querySelector("#registration");
const links = [logIn, registration];

links.forEach(link => link.target = "_blank" )

logIn.addEventListener('mouseover', function(){
    logIn.style.color = "white"
});
logIn.addEventListener('mouseout', function(){
    logIn.style.color = "green"
});

const h1 = document.createElement('h1');
h1.innerText = 'Time to learn' 
logIn.previousElementSibling.prepend(h1)

const fragment = new DocumentFragment();
const h1clone = h1.cloneNode();

fragment.appendChild(h1clone)
h1.addEventListener('click', function() {
    h1.innerText = 'ALREADY LEARNED'
    alert('Header Clicked')
})
