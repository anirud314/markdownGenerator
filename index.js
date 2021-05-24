// TODO: Include packages needed for this application
const fs = require('fs'); /*Used for reading or writing data from a file, In our case we are using it for reading*/
const inquirer = require('inquirer');/*A nodeJS library we are using to ask questions to collect data to generate our markdown file */
const generateMarkdown = require('./utils/generateMarkdown');/*Calls our function from generateMarkdownJS */
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', /*input used to collect a one lined text answer*/
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input', /*input used to collect a one lined text answer*/
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input', /*input used to collect a one lined text answer*/
        name: 'description',
        message: 'Provide a description of the project'
    },
    {
        type: 'input', /*input used to collect a one lined text answer*/
        name: 'installGuide',
        message: 'Provide instructions on steps required for installation of the project'
    },
    {
        type: 'input', /*input used to collect a one lined text answer*/
        name: 'useCase',
        message: 'Please tell us how to use your project, provide instructions and examples'
    },
    {
        type: 'list', /*Allows user to pick an predetermined option from list of options*/
        name: 'license',
        message: 'Select a license for your project',
        choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'none']
    },
    {
        type: 'input', /*input used to collect a one lined text answer*/
        name: 'contGuide',
        message: 'Provide some contribution guidelines'
    },
    {
        type: 'input', /*input used to collect a one lined text answer*/
        name: 'testExample',
        message: 'provide tests with examples'
    },
    {
        type: 'input', /*input used to collect a one lined text answer*/
        name: 'contactGit',
        message: 'Provide your Github username for contact info'
    },
    {
        type: 'input', /*input used to collect a one lined text answer*/
        name: 'contactEmail',
        message: 'Provide your Email for contact information.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { // Function using fs we called earlier to make markdown file 
    const markdown = generateMarkdown(data); // calls generateMarkdown function and assigns it to const
    fs.writeFile(fileName, markdown, err =>{ // fs.writeFile passing name of file, markdown variable and error to generate file
        if(err){
            console.log("Fail------->"); // Log failure
            console.error(err); // Log error
            return
        }
        console.log("Success!!!"); // Log success
    })
}

// TODO: Create a function to initialize app
function init() { // initialization function
    console.log("Welcome to markdown Generator 1.0!!! \nPlease answer the following questions to generate a markdown file."); // Opening log to give some intro

    inquirer.prompt(questions) // Inquirer called and prompted using questions 
        .then(data => {
            let fileName = data.title; // set filename to be answer given in data.title
            if(!fileName.endsWith('.md')) { // Checker that makes sure there is a .md extension in the file if user didnt type it
                fileName +='.md'
            }
            writeToFile(fileName, data);// call writeToFile function to create markdown based on inquirer data
        })
}

// Function call to initialize app
init();
