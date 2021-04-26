// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License]`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `(https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return "## License";
  } else {
    return "";
  }
}

// var licenseBadge = renderLicenseBadge();
// var licenseLink = renderLicenseLink();
// var licenseSection = renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## License
  ![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  
  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  
  GitHub: [${data.github}](https://github.com/${data.github})
  
  Email me with any questions: ${data.email}
  
`;
}


module.exports = generateMarkdown;
