const { makeBadge, ValidationError} = require("badge-maker");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let label = license;
  if (license = "None") label = null;
  const format = {
    lable: label ? "License" : "No License",
    message: message ? license : "",
    color: "green",
  }
  const svg = makeBadge(format)
  
  return badge ? `https://img.shields.io/github/license/${user}/${repo}` : " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let baseUrl ="https://choosealicense.com/licenses/"
  let license_ = license.replace(" ","_");
  const licenses = {
    Apache:"apache-2.0/",
    MIT: "mit/",
    BSD_2:"bsd-2-clause/",
    BSD_3:"bsd-3-clause-clear/",
    Boost: "bsl-1.0/",
    CC: "cc-by-4.0/",
    Eclipse_Public: "epl-2.0/",
    GNU_Affero: "agpl-3.0/",
    GNU_General: "gpl-3.0/",
    GNU_Lesser: "lgpl-3.0/",
    Monzilla: "mpl-2.0/",
    The_Unlicense:"unlicense/",
  };
  let licensePath = licenses[license_];
  
  return `${baseUrl}${licensePath}`
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.toLowerCase() === "none") return "";

  let licenseLink = renderLicenseLink(license);
  let lSection = "## License\n\n";
  lSection += `This application is covered under the following license:
[${license}](${licenseLink})

`;
  
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readme = `# ${data.title}

## Description

${data.description}

## Table of Contents

`;
  let sections = [];
  
  if (data.install.toLowerCase() !== "none") {
    readme += `[Installation](#installation)`;
    readme += "\n";
    sections.push(`## Installation

${data.install}

`);
  }
  if  (data.usage.toLowerCase() !== "none") {
    readme += `[Usage](#usage)`;
    readme += "\n";
    sections.push(`## Usage

${data.usage}

`);
  }
  if  (data.contribute.toLowerCase() !== "none") {
    readme += `[Contribute](#contribute)`;
    readme += "\n";
    sections.push(`## Contribution

${data.contribute}

`);
  }
  if  (data.testing.toLowerCase() !== "none") {
    readme += `[Testing](#testing)`;
    readme += "\n";
    sections.push(`## Testing

${data.testing}

`);
  }
  if (data.license.toLowerCase() !== "none") {
    readme += `[License](#license)`;
    readme += "\n";
    
    sections.push(renderLicenseSection(data.license));
  }
  readme += `[Questions](#questions)`;
  readme += "\n\n";

  sections.forEach((section) =>{
    readme += section;
  });

  readme += `## Questions

Any further questions please reach out:

[${data.github}](https://github.com/${data.github})
<${data.email}>

`;

  return readme;
}

module.exports = generateMarkdown;
