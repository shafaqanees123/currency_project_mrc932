#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n \t 'CURRENCY CONVERTER by shafaq' \n"));
const currency = {
    USD: 1,
    PKR: 280,
    SAR: 3.75,
    INR: 74.57,
    EUR: 0.91,
    JYP: 113,
    AUD: 1.65,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "PKR", "SAR", "INR", "EUR", "JYP", "AUD"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "PKR", "SAR", "INR", "EUR", "JYP", "AUD"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.green(Math.round(convertedAmount)));
