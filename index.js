const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const markdownGenerator = require('./utils/generateMarkdown')

function askQuestions(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the purpose of the application?"
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install the application?"
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use the application?"
        },
        {
            type: "input",
            name: "contribution",
            message: "Who contributed to the project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Are there any tests involved??"
        },
        {
            type: "input",
            name: "questions",
            message: "Where can I ask a question?"
        },
        {
            type: "list",
            name: "license",
            message: "What license was used?",
            choices: ["BSD", "MIT", "GPL", "N/A"]
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your e-mail address?"
        },
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    const data = await askQuestions();
    const generateMarkdown = markdownGenerator(data);
}

// Function call to initialize app
init();
