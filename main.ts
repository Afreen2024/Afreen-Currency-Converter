#! /usr/bin/env node
console.log('... WELCOME IN CURRENCY CONVERTER SHOP...')

import inquirer from "inquirer";


//find te list of currencies and their exchange rate
let exchange_rate:any={
    "USD": 1,
    "EURO": 0.9,
    "JAP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280
}
//prompht the user to select currency to convert from and to

let user_answer= await inquirer.prompt([{
    name: "from_currency",
    type: "list",
    message: "select the currency to convert from: ",
    choices: ["USD","EURO","JAP","CAD","AUD","PKR"]
}, 
{
name: "to_currency",
type: "list",
message: "select the currency to convert into: ",
choices: ["USD","EURO","JAP","CAD","AUD","PKR"]
},
{
name: "amount",
type: "input",
message: "Enter the amount of converter: "

}
]);
//Perform currency convert using formula
 let from_amount=exchange_rate[user_answer.from_currency];
 let to_amount=exchange_rate[user_answer.to_currency];
 let amount= user_answer.amount;

 //formula of conversion
 let base_amount = amount/ from_amount
 let converted_amount= base_amount*to_amount

 //Display the converted Amount...
console.log(`converted_Amount=${converted_amount}`)




