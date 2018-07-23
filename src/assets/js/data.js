window.computeUsersStats = (users,progress,courses) =>{
  //For de usuarios
 for(var keyUsers in users) {
 
   //Extracción de progreso de usuario
   var userProgressObj = {};
   for(let keyProgress in progress) {
     if (users[key].id == keyProgress) {
       userProgressObj = progress[keyProgress];
       return true;
     }
   }

   //Cálculo de porcentaje global en relación a todos los cursos asignados
   var globalTotalUnits = 0;
   var globalCompletedUnits = 0;
   for(let course in userProgressObj) {
     globalTotalUnits += userProgressObj[course].totalUnits;
     globalCompletedUnits += userProgressObj[course].completedUnits;
   }
   var globalCompletedUnitsPercent = Math.round((100 / globalTotalUnits) * globalCompletedUnits);

   //Total de ejercicios global
   var globalTotalParts = 0;
   var globalCompletedParts = 0;
   for(var course in userProgressObj) {
     for(var unit in userProgressObj[course].units) {
       globalTotalParts += userProgressObj[course].units[unit].totalParts;
       globalCompletedParts += userProgressObj[course].units[unit].completedParts;
     }
   }
   var globalCompletedPartsPercent = Math.round((100 / globalTotalParts) * globalCompletedParts);

   //Objeto para declarar propiedad stats dentro de cada usuario
   var objStats = {
     'percent': globalCompletedUnitsPercent,
     'exercises': {
       'total': globalTotalParts,
       'completed': globalCompletedParts,
       'percent': globalCompletedPartsPercent
     }
   };
   users[key].stats = objStats;
 }
 return users;
};

window.sortUsers = (users, orderBy, orderDirection)=>{

};

window.filterUsers = (users, search) => {
 //guardando en una variable el nuevo arreglo 
  let newArrUsers = [];
//users pasa por un filtrado el cual
  return users.filter(element =>{
//si el search coincide con el nombre de usuario y este es >= a 0
  return element.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
  });
//entonces nos entregara el nuevo array
return newArrUsers;
};

window.processCohortData =(options) =>{

};


