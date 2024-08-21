const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Bill",
        yearOfBirth: 1970,
        yearOfDeath: 2000,
    },
    {
        name: "Aaron",
        yearOfBirth: 1980,
        yearOfDeath: 2022,
    },
  ]

function findTheOldest(people){
    let length = people.length;
    let oldest = { name: "", yearOfBirth: 0, yearOfDeath: 0 };

    for(let i = 0; i < length; i++){
        let actual = people[i];
        let actualAge = actual.yearOfDeath - actual.yearOfBirth;
        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        if(actualAge >= oldestAge){
            oldest = actual;
        }
    }

    console.log("Persona con más edad de la lista: ");
    console.log(oldest);
    return oldest;
}