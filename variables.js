/* 
    ? Variables
    * containers that store data in memory
    * declaration
        * allows memory space to be reserved
        * starts with let, var, or const
        * cannot start with a number or characters other than $ or _
    * initialization
        * assignment of data value
        * if no value is assigned, it's undefined by default
        * can be any value or data type (str, int, arr, fx, class, etc.)
        * can be reassigned (except for const)
*/

// Variable declaration
let firstName
console.log(firstName)

// Variable Initilization (and reassignment)
firstName = "Paul"
console.log(firstName)

// Variable initilization and declaration
let lastName = "Niemczyk"

console.log(lastName)

// (a)  (b) (c)     (d)
let address = "123 Main St, Salem, MA";
// (e)      |      (f)

// (a) - keyword
// (b) - variable identifier
// (c) - assignment operator
// (d) - value or initializer
// (e) - variable declaration
// (f) - variable initilization or value assignment

var age = 26
console.log(age)
// va is hoisted whereas let or const are not
// ! do not use it

const ssn = "123-55-6789"
console.log(ssn)

// ssn = "233-23-2323"
// console.log(ssn)
// TypeError: Assignment to constant variable

/* 
    ? Coding Practices for Variables
    * be concise (ex: firstName instead of usersFirstName)
    * be specific (ex: value instead of i)
    * utilize camelCase (most popular in JS)
    * snake_case
    * PascalCase
    * skewer-case
    * SCREAMING_CASE
*/

/* 
    Challenge

    Set a few variables:
    fName, lName, houseNumber, aptNumber (if applicable)
    street, city, state, post code

    Once done, concatenate or interpolate them together into new variable to create your address stamp

    Create a new variable that utilizes all of those variable values

    Console log it

    !SPICEY MODE - assign the value of state to be lowercase but when you console log your address stamp, utilize a method to make sure it's capitalized.

*/


//variable declaration
let firstName = 
consule.log = (april)

firstName = "april"
console.log (april)

let lastName = "whitbourn"

consule.log (whitbourn)

let houseNumber ="10"
let st name ="Ilene Pl"
let city ="Latham"
let state ="New York"
let postcode = "1210"

let addressStamp = `${fName} ${lName} \n ${houseNumber} ${street} \n ${city}, ${state} ${postCode}`
console.log(addressStamp)







