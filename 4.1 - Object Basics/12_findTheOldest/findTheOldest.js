const findTheOldest = function(people) {

    people.forEach(person => {
        if(!("yearOfDeath" in person)) {
          const yearNow = new Date();
          person.yearOfDeath = yearNow.getFullYear();
        }
      })

    const peopleOld = people.sort( (personA, personB) => {
        return (personA[Object.keys(personA)[2]] - personA[Object.keys(personA)[1]]) < (personB[Object.keys(personB)[2]] - personB[Object.keys(personB)[1]]) ? 1 : -1;      
     })

     const oldestPerson = peopleOld[0];

     return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
