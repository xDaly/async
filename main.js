const plotPerson = ({ name, roles, phone, email }) => (
        `<div class="col">
<div class="card">
<div class="card-body">
<h5 class="card-title">${name}</h5>
<h6 class="card-subtitle mb-2 text-muted">${roles.map(role => 
`<span style="text-transform: capitalize;">${role} </span>`
)}</h6>
<a href="tel:${phone}" class="card-link">Phone</a>
<a href="mailto:${email}" class="card-link">Email</a>
</div>
</div>
</div>`
);

const fetchPersonsFromAPI = async () => {
const response = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-data-api/users');
const data = await response.json();

if(!localStorage.getItem("person")){
localStorage.setItem("person", data.map(person => plotPerson(person)).join(''));	
}
document.querySelector('.row').innerHTML = localStorage.getItem("person");
}

fetchPersonsFromAPI();








document.querySelector('#submit').addEventListener("click",() =>{
const name = document.querySelector('#name').value ;
const roles = [document.querySelector('#role').value] ;
const phone = document.querySelector('#phone').value ;
const email = document.querySelector('#email').value ;

const persons = {name, roles, phone, email} ;


const prs = localStorage.getItem("person") + "" + plotPerson(persons);
localStorage.setItem("person", prs)

document.querySelector('.row').innerHTML = localStorage.getItem("person");

});