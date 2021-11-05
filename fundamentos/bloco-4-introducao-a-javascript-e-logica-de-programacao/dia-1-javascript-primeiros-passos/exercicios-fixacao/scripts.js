const myName = "Leonardo"
const birthCity = "Anápolis"
let birthYear = 1994

console.log(myName)
console.log(birthCity)
console.log(birthYear)

birthYear = 2030

console.log(birthYear)

birthCity = "Tokio"

console.log(birthCity)

/* O erro TypeError: Assignment to constant variable indica que tentamos alterar o valor definida para a constante birthCity anteriormente. E, por ser uma constante, não é acecito tal ação.*/

