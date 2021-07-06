// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
	if (license == 'None') {
		return ''
	} else if (license == 'MIT') {
		return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
	} else if (license == 'GNU') {
		return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
	} else {
		return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
	}
}

// TODO: Create a function to generate markdown for README
