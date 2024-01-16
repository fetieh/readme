const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Function to prompt the user for project information
async function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you run tests for your project?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
}

// Function to write README file
function writeToFile(fileName, data) {
  return fs.appendFileSync(fileName, data, 'utf8');
}

// Function to initialize program
async function init() {
  try {
    console.log('Welcome to the README Generator!');

    // Prompt the user for information
    const userResponses = await promptUser();

    // Generate the README content
    const readmeContent = generateMarkdown(userResponses);

    // Determine the file path
    const outputPath = path.join(process.cwd(), 'README.md');

    // Write the README file
    writeToFile(outputPath, readmeContent);

    console.log('README.md successfully created!');
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

// Function call to initialize program
init();
