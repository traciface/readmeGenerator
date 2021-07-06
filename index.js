// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const promptUser = () => {
	return inquirer.prompt([{
			type: 'input',
			name: 'githubUser',
			message: "What is your GitHub username?",
  },
		{
			type: 'input',
			name: 'email',
			message: "What is your email?",
  },
		{
			type: 'input',
			name: 'projectTitle',
			message: 'What is the title of your project?',
  },
		{
			type: 'input',
			name: 'description',
			message: 'Please provide a description of your project.',
  },
		{
			type: 'input',
			name: 'installation',
			message: 'Provide instructions on how to install your project.',
  },
		{
			type: 'input',
			name: 'contributors',
			message: 'Did anyone else contribute? If so, what are their GitHub Usernames?',
  },
		{
			type: 'input',
			name: 'usage',
			message: 'Describe the usage of this application.',
  },
		{
			type: 'input',
			name: 'tests',
			message: 'Are there any tests for this application',
},
		{
			type: "list",
			message: "What license is this project under?",
			name: "license",
			choices: [
      'MIT',
      'GPL',
      'BSD-3',
      'None'
  ]
}
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
		err ? console.error(err) : console.log('')
	);
}

// TODO: Create a function to initialize app



// TODO: Create a function to initialize app
