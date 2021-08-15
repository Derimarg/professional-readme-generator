// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const { generatePrime } = require('crypto');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description about your project:',
    },
    {
        type: 'input',
        name: 'table_of_content',
        message: 'Any table of content',
    },
    {
        type: 'input',
        name: 'installation',
        message: '',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this repo?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a type of license',
        choices: ['NONE', 'MIT', 'AFL-3.0', 'APACHE-2.0', 'ARTISTIC-2.0', 'BSL-1.0', 'BSD-2-CLAUSE',
         'BSD-3-CLAUSE', 'BSD-3-CLAUSE-CLEAR', 'CC', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'WTFPL',
          'ECL-2.0', 'EPL-1.0', 'EPL-2.0', 'EUPL-1.1', 'AGPL-3.0', 'GPL', 'GPL-2.0', 'GPL-3.0', 'LGPL',
           'LGPL-2.1', 'LGPL-3.0', 'ISC', 'LPPL-1.3C', 'MS-PL', 'MPL-2.0', 'OSL-3.0', 'POSTGRESQL', 'OFL-1.1',
            'NCSA', 'UNLICENSE', 'ZLIB']
    },
    {
        type: 'input',
        naMe: 'contributors',
        message: 'Who are the contributors of this project?',
    },
    {
        type: 'input',
        nae: 'test',
        message: 'Insert a command to run a test!',
        default: 'npm test'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            
            // Use user feedback for... whatever!!
            console.log('Generating file...');
            writeToFile('./demo/README.md', generateMarkdown({answers}));
        })
}

// Function call to initialize app
init();
