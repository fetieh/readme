// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = data.license !== 'None' ? `![License](https://img.shields.io/badge/license-${data.license}-blue.svg)` : '';

  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
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
  ${licenseBadge}
    
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, you can reach me at [${data.email}](mailto:${data.email}) or visit my GitHub profile at [https://github.com/${data.questions}](https://github.com/${data.questions}).
`;
}

module.exports = generateMarkdown;
