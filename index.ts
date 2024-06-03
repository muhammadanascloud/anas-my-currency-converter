#!/usr/bin/env node

import inquirer from "inquirer";

//This is from where program will take currency value.

const currency:any= {
    USD: 1.0000, //base currency
    EUR: 0.9295,
    JPY: 152.92,
    GBP: 0.7974,
    AUD: 1.4942,
    CAD: 1.3529,
    CNY: 7.0527,
    HKD: 7.8119,
    INR: 83.39,
    PKR: 277.54
};

//Here we are taking input from user about the currencies. (From Currency,To Currency,Amount they want to convert)

let userInputCurrency= await inquirer.prompt(
    [
        {
            name:"currency1",
            type:"list",
            message:"Please select currency you have:",
            choices:["USD","EUR","INR","PKR","JPY","GBP","AUD","CAD","CNY","HKD"]
        },
        {
            name:"currency2",
            type:"list",
            message:"Please select currency in which you want to convert:",
            choices:["USD","EUR","INR","PKR","JPY","GBP","AUD","CAD","CNY","HKD"]
        },
 
        {
            name:"amount",
            type:"number",
            message:"Please write the amount you want to convert:",
        },
    ]
)
// 1)what ever currency user will selects we have to call its value from currencies object.

let firstCurrency = userInputCurrency.currency1;
let secondCurrency = userInputCurrency.currency2;

let fromCurrency = currency[firstCurrency];
let toCurrency = currency[secondCurrency];

// // 2)we will convert from currency into base currency(USD).

let userAmount = userInputCurrency.amount;

//                  amount    / exchange rate(USD)
let convertToUSD = userAmount/currency[firstCurrency];


// 3)now we will multiply customers amount to convert to USD.It will give us final answer after conversion.

let finalAmount:any = currency[secondCurrency] * convertToUSD;

//here we are using.tofixed that can retain a number to desired decimal values.
finalAmount = finalAmount.toFixed(2);


//here we are using Unary Plus (+) function that will convert the string into number.

console.log(+finalAmount );

