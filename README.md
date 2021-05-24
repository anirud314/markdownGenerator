# 09 Node.js: Professional README Generator

# Link to github Repo: https://github.com/anirud314/markdownGenerator

## Screenshot demo 
Here are 2 screenshot gifs to show you how the project works

### Screenshot 1 (with a license)

![myDemo1](./images/demoWLic.gif)

### Screenshot 2 (without a license)
![myDemo2](./images/demoWOLic.gif)

## Report
This week we are deep diving into nodeJS and using NPM commands. To start off with this project is a readme generator that takes user input using the inquirer package and uses the users response to generate a markdown file. I broke this project down into three steps. Step 1: using inquirer to prompt the user for a response, Step 2: Using the response data to generate a markdown page, Step 3: Generate the page properly. So I will break down my process of each step.

### Pre steps
Before everything I had to initialize and install the packages required. Because of the instructions I know that i need to npm install inquirer, and fs which is used to read and write files is already set up as part of node. So after running the npm commands I "initialized" the package's functionalities using this 

```
const fs = require('fs');
const inquirer = require('inquirer');

```

### Step 1
Step 1 is rather simple, especially with what we learned from the activities. I just utilized what we learned in the activities in class when practicing using inquirer, as well as the documentation. I based my questions on what the instructions provided. While almost all of the questions fit best with using input type as the answer, the one regarding license best suited using a list of responses to choose from. so I did that. The only thing in this section I had trouble with is thinking of a better way to do the descriptive parts/questions. I was playing around with other types like editor which should allow you to write long lines. But I didnt really have alot of time to play around with it extensively. After I set up the questions array of question objects. I initialized the inquirer in the provided init function

```
inquirer.prompt(questions) // Inquirer called and prompted using questions 
        .then(data => {
            let fileName = data.title; 
            if(!fileName.endsWith('.md')) { 
                fileName +='.md'
            }
            writeToFile(fileName, data);
        })
```

in the prompt.then I call the writeToFile function passing in the fileName and the data collected from the inquirer prompt. In write to file we call generateMarkdown function from generateMarkdown.js and pass in the data.

### Step 2
Step 2 is when we use the data collected and passed into the generateMarkdown function in generateMarkdown.js to set up what the markdown page is meant to look like. For starters in order to call the function from another file altogether we have to require it from the corresponding file, which is why I did this.

```
const generateMarkdown = require('./utils/generateMarkdown');

```

By doing this I was able to access the function that was exported from the generateMarkdown file.

```
module.exports = generateMarkdown;

```

In generateMarkdown.js there are a total of 4 functions, 3 of which are kind of bound together to create one section of the markdown. renderLicenseBadge uses the data given to render a license badge based on the license chosen by the user in the inquirer. renderLicenseLink uses the data given to render a link based on the user input for the license question as well. renderLicenseSection renders a description based on the user data inputted for license type as well as builds the license section for the markdown. Then the generate markdown function uses all of this data and returns it all in the format of standard markdown. 

### Step 3
The markdown value is then taken and pushed into the fs.writeFile to write the file as a markdown file. Once this is done the a file is then generated from the data provided from generateMarkdown (which is the data from the inquirer prompt that was formatted in generateMarkdown.)

### Post step testing
After the main meat of the project was successfully working I now had clean up a bit. This meant formatting errors needed to be fixed, and issues caused by weird and silly mistakes needed to be ironed out. This mainly was dealing with weird spacing and indent issues, but once those were fixed this project should mostly be done. 

### ISSUES
I didn't have much technical issues with this project, It was relatively easy thanks to the inquirer documentation, and after I figured out how to use javascript to write in markdown thanks to a bit of googling and some practice. The issue I had was more time related. I did want to do some advanced things like actually properly learning how to best set up using editor for descriptive sections rather than input for inquirer. My issues with time were because of personal matters that I couldn't avoid. Because of that I did sort of avoid trying to complicate everything. 

## Instructions
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Guide to a Professional README](https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```
node index.js
```

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit 2.2.4: Screencastify Tutorial in Module 2 of the **prework** as a refresher on how to record video from your computer. You’ll need to submit a link to the video **and** add it to the README of your project.

Before you start, clone the [starter code](https://github.com/coding-boot-camp/potential-enigma).

## User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Getting Started

Here are some guidelines to help you get started:

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.


## Review

You are required to submit the following for review:

* A walkthrough video demonstrating the functionality of the application.

* A sample README.md file for a project repository generated using your application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
