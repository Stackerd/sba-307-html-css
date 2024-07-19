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