// votre code ici
function checkAge(age) {
  if (age < 18) {
    return 'Vous êtes mineur.'
  } else if (age >= 18 && age <= 65) {
    return 'Vous êtes majeur.'
  } else if (age > 65) {
    return 'Vous êtes senior.'
  }
}

console.log(checkAge(15))
console.log(checkAge(30))
console.log(checkAge(75))

//export default checkAge
