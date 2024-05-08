#! /usr/bin/env node

import inquirer from "inquirer";
import { currencyRate } from "./currencyRate.js";

const userInput: any = await inquirer.prompt([
  {
    name: "currencyFrom",
    message: "Select the currency you want to convert from:",
    type: "list",
    choices: ["USD", "EUR", "PKR", "GBP", "INR"],
  },
  {
    name: "currencyto",
    message: "Select the currency you want to convert to:",
    type: "list",
    choices: ["USD", "EUR", "PKR", "GBP", "INR"],
  },
  {
    name: "amount",
    message: "Enter the amount you want to convert:",
    type: "string",
  },
]);

const fromCurrency = currencyRate[userInput.currencyFrom];
const toCurrency = currencyRate[userInput.currencyto];
const amount = userInput.amount;
const convertedAmount = (amount / fromCurrency) * toCurrency;


console.log(convertedAmount);
