/* LOGO SECTION */
function renderLogo(logo) {
  if (logo) {
    return `<img src="${logo}" alt="Logo" width="80" height="80">`;
  }
  return '';
}
/* END LOGO SECTION */

/* TITLE SECTION */
function renderGoTopLink(title) {
  const goTop = title.split(' ').join('-').toLowerCase();
  if (title) {
    return `
  [Back To Top](#${goTop})
  `;
  }
  return '';
}

function renderTitleLink(title) {
  const str = title.split(' ').join('-').toLowerCase();
  if (title) {
    return (
      `- [Title](#${str})`
    );
  }
  return '';
}
/* END TITLE SECTION */

/* URL DEPLOYED WEBPAGE SECTION */
function renderURLProject(deployed) {
  if (deployed) {
    return `> Link web page: ${deployed}`;
  }
  return '';
}
/* URL DEPLOYED WEBPAGE SECTION */

/* TECHNOLOGIES SECTION */
function renderTechnologies(technologies) {
  if (technologies !== 'NONE') {
    return `
  ## Technologies
    
  ${technologies}`
  }
  return ''
}
/* END TECHNOLOGIES SECTION */


/* DESCRIPTION SECTION */
function renderDescriptionSection(description) {
  if (description) {
    return `
  ---
    
  ## Description of Project
    
  ${description}`;
  }
  return '';
}

function renderShortDescription(description) {
  if (description.length > 40) {
    return `${description.substring(0, 40)}...`;
  }
  return '';
}

function renderDescriptionLink(description) {
  if (description) {
    return `<li><a href="#description">Description of Project</a></li>`;
  }
  return '';
}

function demoProject(demo) {
  if(demo) {
    return `
  Example:
  
  ![Demo](${demo})`;
  }
  return '';
}
/* END DESCRIPTION SECTION */

/* USAGE SECTION */
function renderUsage(usage) {
  if (usage) {
    return `
  ## Usage

  ${usage}
    `;
  }
  return ''
}
/* END USAGE SECTION */

/* CONTRIBUTOR SECTION */
function renderContributor(contributors) {
  if(contributors) {
    return `
  ## Contributors
  
  ${contributors}`;
  }
  return '';
}
/* CONTRIBUTOR SECTION */

/* SOCIAL MEDIA SECTION */
function renderLinkedinShield(linkedin) {
  if (linkedin) {
    return `[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555`;
  }
  return '';
}

function renderLinkedinURL(linkedin) {
  if (linkedin) {
    return `[linkedin-url]: ${linkedin}`;
  }
  return '';
}

function renderLinkedinDisplay(linkedin) {
  if (linkedin) {
    return `[![LinkedIn][linkedin-shield]][linkedin-url]`;
  }
  return '';
}

function linkedinProfile(linkedin, name) {
  if(linkedin) {
    return `- Linkedin - [${name}](${linkedin})`;
  }
  return '';
}
/* END SOCIAL MEDIA SECTION */

/* LICENSE SECTION */
// Returns a license badge based on which license is passed in, If there is no license, return an empty string
function renderLicenseBadge2(license) {
  if (license !== 'NONE') {
    // return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg?style=for-the-badge)`
    return `![${license} License][license-shield]`
  }
  return '';
}

function renderLicenseBadge(license) {
  if (license !== 'NONE') {
    // return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg?style=for-the-badge)`
    return `[license-shield]: https://img.shields.io/static/v1?label=license&message=${license}&color=yellowgreen.svg&style=for-the-badge`
  }
  return '';
}

// Returns the license link, If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return `<li><a href="#license">License</a></li>`
  }
  return '';
}


// Returns the license section of README, If there is no license, return an empty string
function renderLicenseSection(license, name) {
  const currentYear = new Date().getFullYear() // get current year

  if (license !== 'NONE') {
    return (
      `
  ## License

  ${license} License

  Copyright © ${currentYear}, ${name}.
        
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  `
    )
  }
  return '';
}
/* END LICENSE SECTION */

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
![Repo Size][repo-size]
![Language][GitHub-language]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
${renderLicenseBadge2(data.license)}
${renderLinkedinDisplay(data.linkedin)}

<br />
<p align="center">

${renderLogo(data.logo)}

<h2 align="center">${data.title}</h2>

<p align="center">
${renderShortDescription(data.description)}
<br />
<a href="https://github.com/${data.github}/${data.repo}"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="./demo/README.md">View Demo</a>
·
<a href="https://github.com/${data.github}/${data.repo}/issues">Report Bug</a>
·
<a href="https://github.com/${data.github}/${data.repo}/issues">Request Feature</a>
</p>
</p>

${renderURLProject(data.deployed)}

<details open="open">
<summary>Table of Contents</summary>
<ul>
${renderDescriptionLink(data.description)}
<li><a href="#technologies">Technologies</a></li>
<li><a href="#how-to-download">Download</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#test">Test</a></li>
<li><a href="#author-info">Author-info</a></li>
<li><a href="#contributors">Contributors</a></li>
${renderLicenseLink(data.license)}
<li><a href="#questions">Questions</a></li>
</ul>
</details>

${renderDescriptionSection(data.description)}

${demoProject(data.demo)}

${renderTechnologies(data.technologies)}

${renderGoTopLink(data.title)}
---

## How to Download

- Simply copy the **SSH** to the terminal or Download the **ZIP File**:

## Installation

- Use the follow command at your terminal, **git clone** (Create a working copy at your local repository):

  \`\`\`
  git clone git@github.com:${data.github}/${data.repo}.git
  \`\`\`

- After cloned the repository, create your own repository, copy the files to your repository and type in your terminal the follow commands. 

  \`\`\`
  git status

  git add -A

  git commit -m "Message to commit."

  git push or git push origin main
  \`\`\`

## Prerequisites

Before of using this application, is require to install dependencies, run the following command in your terminal:

  \`\`\`
  ${data.dependencies}
  \`\`\`

${renderGoTopLink(data.title)}
---

${renderUsage(data.usage)}

## Tests

To run tests, run these commands:

\`\`\`
${data.test}
\`\`\`

${renderGoTopLink(data.title)}
---
  
## Author Info

- GitHub - [${data.github}](https://github.com/${data.github}/)
${linkedinProfile(data.linkedin, data.name)}

${renderContributor(data.contributors)}

${renderGoTopLink(data.title)}
---

## Questions

For questions contact me at ${data.email}

${renderGoTopLink(data.title)}
---

${renderLicenseSection(data.license, data.name)}

${renderGoTopLink(data.title)}
[repo-size]: https://img.shields.io/github/repo-size/${data.github}/${data.repo}?style=for-the-badge
[GitHub-language]: https://img.shields.io/github/languages/top/${data.github}/${data.repo}?color=yellow&style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/${data.github}/${data.repo}.svg?style=for-the-badge
[contributors-url]: https://github.com/${data.github}/${data.repo}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/${data.github}/${data.repo}.svg?color=9cf&style=for-the-badge
[forks-url]: https://github.com/${data.github}/${data.repo}/network/members
[stars-shield]: https://img.shields.io/github/stars/${data.github}/${data.repo}.svg?color=blueviolet&style=for-the-badge
[stars-url]: https://github.com/${data.github}/${data.repo}/stargazers
[issues-shield]: https://img.shields.io/github/issues/${data.github}/${data.repo}.svg?style=for-the-badge
[issues-url]: https://github.com/${data.github}/${data.repo}/issues
${renderLicenseBadge(data.license)}
${renderLinkedinShield(data.linkedin)}
${renderLinkedinURL(data.linkedin)}
[product-screenshot]: images/screenshot.png

  `;
}

module.exports = generateMarkdown;
