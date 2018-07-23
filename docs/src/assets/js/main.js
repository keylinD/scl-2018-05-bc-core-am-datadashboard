const userJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const userCOHORTS = '../data/cohorts.json';
const listCohorts = document.getElementById('nameCohorts');
const lista = document.getElementById('nameAlumna');
const container = document.getElementById('list');


// ----Cohorts--
fetch('https://keylind.github.io/scl-2018-05-bc-core-am-datadashboard/data/cohorts.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  renderCohorts(data);
})

const renderCohorts = data => {
  listCohorts.addEventListener('click', () => {
    const render = data.forEach(element => { 
      let option = document.createElement('option');
      option.text=element.id;
      return listCohorts.add(option);
    })
  })
}
// ---Alumnas--- mostrado en la lista desplegable 1!!
 // fetch(userJSON)
 // .then(response => response.json())
 // .then(data =>{
 // 	console.log(data);
 // 	renderUsers(data);
 // })

 // const renderUsers = data =>{ 
 // 	lista.addEventListener('click',()=>{
 // 		const render = data.forEach(element =>{
 // 			let option = document.createElement("option");
 // 			option.text=element.name;
 // 			return lista.add(option);
 // 		})
 // 	return render;
 // 	});
 // }

// -----Alumnas---- Mostrado dentro de un div en columnas

fetch('https://keylind.github.io/scl-2018-05-bc-core-am-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json')
.then(response => response.json())
.then(data=>{
  console.log(data);
  listUsers(data);
})

const listUsers = data => {
  lista.addEventListener('click' , () => {
    const render = data.forEach(element => {
      return container.innerHTML +=  `<div class="col-lg-4 col-sm-6 col-xs-12">${element.name}</div>`
    })
  })
}

