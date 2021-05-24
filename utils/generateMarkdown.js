// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let lBadge = '';
  if(license !== 'none') { // if license is not none
    lBadge = `![License](httms://img.shields.io/badge/${license}-red.svg)` // creates badge
  }
  return lBadge; // return out of function
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let lLink = '';
  if(license !== 'none') { // if license is not none
    lLink = '(https://choosealicense.com/licenses/'+ license.toLowerCase() + '/)' // creates link for license
  };
  return lLink; // return value out of function
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licLink) { // pass in license and license link
  let lSection = ''; 
  let lDescription = '';
  if(license === 'none'){ // if license is none
    lDescription = ''; // leave description blank
  }
  else if(license === 'MIT') { // if license is mit
    // description from wikipedia
    lDescription = 'a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.';
  }
  else if(license === 'GPL-3.0') { // if license is GPL-3.0
    // description from wikipedia
    lDescription = 'a widely used free software licenses that guarantee end users the freedom to run, study, share, and modify the software.';
  }
  else if(license === 'Apache-2.0') { // if license is Apache-2.0
    // description from wikipedia
    lDescription = 'a permissive free software license written by the Apache Software Foundation (ASF). It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties.';
  }

  if(license !== 'none') { // if license is not none write section in markdown as follows
    lSection = `
  ## License

  ### [${license} License]${licLink}

  ${lDescription}
    `
  }
  else { // otherwise leave section empty
    lSection = ``
  }
  return lSection; // return value for section
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const lic = data.license; // lic is data.license
  let Badge = renderLicenseBadge(lic); // calls renderLicenseBadge and assigns result to variable badge
  let Link = renderLicenseLink(lic);// calls renderLicenseLink and assigns result to variable link
  let Section = renderLicenseSection(lic, Link);// calls renderLicenseSection and assigns result to variable Section
  //returns full markdown based on data from inquirer prompt.
  return `
  # ${data.title}
  ${Badge}
  ## Description

  ${data.description}
  
  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation
  
  ${data.installGuide}

  ## Usage

  ${data.useCase}
  ${Section}
  ## Contributing

  ${data.contGuide}

  ## Tests

  ${data.testExample}

  ## Questions
  
  [${data.name}'s Github](https://github.com/${data.contactGit}/)

  To contact ${data.name} send a email to ${data.contactEmail}

`;
}

module.exports = generateMarkdown; // exports generateMarkdown function
