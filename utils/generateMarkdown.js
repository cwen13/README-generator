const { makeBadge, ValidationError} = require("badge-maker");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let label = license;
  if (license = "None") label = null;
  const format = {
    lable: label ?  "License" : "No License",
    message: message ? license : "",
    color: "green",
  }
  
  return badge ? `https://img.shields.io/github/license/${user}/${repo}` : " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  

  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
