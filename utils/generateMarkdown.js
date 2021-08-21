/* LOGO SECTION */
function renderLogo(logo) {
  if (logo) {
    return `<img src="${logo}" alt="Logo" width="80" height="80">`;
  }
  return '';
}
/* END LOGO SECTION */

/* TITLE SECTION */
function displayTitle(title) {
  const idSplit = title.split(' ').join('-').toLowerCase();

  if (title) {
    return `<h2 align="center" id="${idSplit}">${title}</h2>`;
  }
  return '';
}

function renderGoTopLink(title) {
  const goTop = title.split(' ').join('-').toLowerCase();

  if (title) {
    return `[Back To Top](#${goTop})`;
  }
  return '';
}

function renderTitleLink(title) {
  const str = title.split(' ').join('-').toLowerCase();

  if (title) {
    return `- [Title](#${str})`;
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
  const list = technologies.toString().split(',').join('\n- ');

  if (technologies) {
    return `
## Technologies
- ${list}`;
  }
  return '';
}

function othersTechnologies(others) {
  // if (others = '') {
  //   const convert = others
  // } else {
    const convert = others.split(',').join('\n-');
  // }

  if (others) {
    return `- ${convert}`;
  }
  return '';
}
/* END TECHNOLOGIES SECTION */

/* DESCRIPTION SECTION */
function renderDescriptionSection(description) {
  if (description) {
    return `
---
  
## Description
  
${description}`;
  }
  return '';
}

function renderShortDescription(description) {
  if (description.length > 60) {
    return `${description.substring(0, 60)}...`;
  }
  return '';
}

function renderDescriptionLink(description) {
  if (description) {
    return `<li><a href="#description">Description</a></li>`;
  }
  return '';
}

function demoProject(demo) {
  if (demo) {
    return `
  ### Example:
  
  ![Demo](${demo})`;
  }
  return '';
}

function demoLink(demo) {
  if (demo) {
    return `
<a href="#example">View Demo</a>
·`;
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
  return '';
}

function renderUsageLink(usage) {
  if (usage) {
    return `<li><a href="#usage">Usage</a></li>`;
  }
  return '';
}
/* END USAGE SECTION */

/* CONTRIBUTOR SECTION */
function renderContributor(contributors) {
  if (contributors) {
    return `
## Contributors
  
${contributors}`;
  }
  return '';
}

function renderContributorLink(contributors) {
  if (contributors) {
    return `<li><a href="#contributors">Contributors</a></li>`;
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
  if (linkedin) {
    return `- Linkedin - [${name}](${linkedin})`;
  }
  return '';
}

function twitterBadgeShield(twitter) {
  if (twitter) {
    return `[twitter-shield]: https://img.shields.io/badge/-Twitter-red.svg?&logo=twitter&style=for-the-badge&color=9cf`;
  }
  return '';
}

function renderTwitterURL(twitter) {
  if (twitter) {
    return `[twitter-url]: ${twitter}`;
  }
  return '';
}

function renderTwitterDisplay(twitter) {
  if (twitter) {
    return `[![twitter][twitter-shield]][twitter-url]`;
  }
  return '';
}

function twitterProfile(twitter, name) {
  if (twitter) {
    return `- Twitter - [${name}](${twitter})`;
  }
  return '';
}
/* END SOCIAL MEDIA SECTION */

/* LICENSE SECTION */
// Returns a license badge based on which license is passed in, If there is no license, return an empty string
function renderLicenseBadge2(license) {
  if (license !== 'NONE') {
    // return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg?style=for-the-badge)`
    return `![${license} License][license-shield]`;
  }
  return '';
}

function renderLicenseBadge(license) {
  if (license !== 'NONE') {
    // return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg?style=for-the-badge)`
    return `[license-shield]: https://img.shields.io/static/v1?label=license&message=${license}&color=yellowgreen.svg&style=for-the-badge`;
  }
  return '';
}

// Returns the license link, If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return `<li><a href="#license">License</a></li>`;
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

Distributed under the ${license} License. See \`LICENSE\` for more information.
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
${renderTwitterDisplay(data.twitter)}
${renderLinkedinDisplay(data.linkedin)}
${renderLicenseBadge2(data.license)}

<br />
<p align="center">

${renderLogo(data.logo)}

${displayTitle(data.title)}

<p align="center">
${renderShortDescription(data.description)}
<br />
<a href="#how-to-download"><strong>Explore the docs »</strong></a>
<br />
<br />
${demoLink(data.demo)}
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
<li><a href="#test">Test</a></li>
${renderUsageLink(data.usage)}
<li><a href="#roadmap">Roadmap</a></li>
<li><a href="#contributing">Contributing</a></li>
${renderContributorLink(data.contributors)}
<li><a href="#questions">Questions</a></li>
${renderLicenseLink(data.license)}
</ul>
</details>

${renderDescriptionSection(data.description)}

${demoProject(data.demo)}

${renderTechnologies(data.technologies)}
${othersTechnologies(data.others)}

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

## Test

To run tests, run these commands:

  \`\`\`
  ${data.test}
  \`\`\`

${renderGoTopLink(data.title)}

---

${renderUsage(data.usage)}

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/${data.github}/${data.repo}/issues) for a list of proposed features (and known issues).

${renderGoTopLink(data.title)}

---

<!-- CONTRIBUTORS -->
## Contributing

Contributions are part of this open source project. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/name-of-feature\`)
3. Commit your Changes (\`git commit -m "Add some feature"\`)
4. Push to the Branch (\`git push origin feature/name-of-feature\`)
5. Open a Pull Request

${renderContributor(data.contributors)}

## Questions

For additional help or questions about collaboration, contact me at: ${data.email}

- GitHub - [${data.github}](https://github.com/${data.github}/)
${twitterProfile(data.twitter, data.name)}
${linkedinProfile(data.linkedin, data.name)}
- Project Repository Link: https://github.com/${data.github}/${data.repo}

${renderGoTopLink(data.title)}

---

${renderLicenseSection(data.license, data.name)}

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
${twitterBadgeShield(data.twitter)}
${renderTwitterURL(data.twitter)}
${renderLinkedinShield(data.linkedin)}
${renderLinkedinURL(data.linkedin)}
  `;
}

module.exports = generateMarkdown;
