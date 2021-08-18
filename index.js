// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your full name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Enter your Repository name (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter your Repository name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'confirm',
        name: 'confirmSocialMedia',
        message: 'Would you like to add your Social Media?',
        default: true
    },
    {
        type: 'confirm',
        name: 'confirmLinkedin',
        message: 'Would you like to add your Linkedin Profile?',
        default: true,
        when: ({ confirmSocialMedia}) => {
            if (confirmSocialMedia ) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Provide Linkedin Profile URL:',
        when: ({ confirmLinkedin }) => {
            if (confirmLinkedin ) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLogo',
        message: 'Would you like to add a logo of project?',
        default: true
    },
    {
        type: 'input',
        name: 'logo',
        message: 'Provide directory of logo: [example: ./assets/images/logo.png]',
        when: ({ confirmLogo }) => {
            if (confirmLogo) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'Provide url of Deployed Webpage:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description about your project:'
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Select which technologies did you use [example: JavaScript, HTML, CSS, etc.]',
        choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap', 'Bulma', 'Python', 'JAVA', 'C#', 'C', 'C++', 'Go', 'Swift', 'PHP']
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['NONE', 'MIT', 'AFL-3.0', 'APACHE-2.0', 'ARTISTIC-2.0', 'BSL-1.0', 'BSD-2-CLAUSE',
            'BSD-3-CLAUSE', 'BSD-3-CLAUSE-CLEAR', 'CC', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'WTFPL',
            'ECL-2.0', 'EPL-1.0', 'EPL-2.0', 'EUPL-1.1', 'AGPL-3.0', 'GPL', 'GPL-2.0', 'GPL-3.0', 'LGPL',
            'LGPL-2.1', 'LGPL-3.0', 'ISC', 'LPPL-1.3C', 'MS-PL', 'MPL-2.0', 'OSL-3.0', 'POSTGRESQL', 'OFL-1.1',
            'NCSA', 'UNLICENSE', 'ZLIB']
    },
    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the usage of this repo?",
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Provide contributors of this project:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log("Generating.... Please wait....");
            writeToFile("./demo/README.md", generateMarkdown({ ...answers }));
        }).then(() => {
            console.log('README.md has been created!');
        }).catch((err) => {
            console.log(err);
        });
}

// Function call to initialize app
init();