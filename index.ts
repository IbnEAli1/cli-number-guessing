#! /usr/bin/env node
//shabang

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
  {
    name: "userguessNumber",
    type: "number",
    message: "Please guess a number (1-6): ",
  },
]);
//condition
if (answers.userguessNumber === randomNumber) {
  console.log("Congratuations; Your guess a right number.");
} else {
  console.log("You guessed a wrong number.");
}
