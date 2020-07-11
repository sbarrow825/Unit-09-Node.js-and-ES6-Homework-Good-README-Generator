const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Write a description of your project"
    },
    {
      type: "input",
      name: "installation",
      message: "Enter the installation intructions for the user to be able to use your project"
    },
    {
      type: "input",
      name: "usage",
      message: "Enter the usage intructions for how the user should use your project"
    },
    {
      type: "input",
      name: "role",
      message: "Let's write a user story for your project in the form: AS A <role>, I WANT <product/service>, SO THAT <goal/desire>. What is the role of the person using this project?"
    },
    {
      type: "input",
      name: "product",
      message: "What is the product/service this project offers?"
    },
    {
      type: "input",
      name: "goal",
      message: "What is the goal of the person using this project?"
    },
    {
      type: "input",
      name: "testGIF",
      message: "Insert the path/link to a gif/video of you testing your project, i.e. you running your project demonstrating its functionality"
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Enter your Github username"
    },
    {
      type: "input",
      name: "repoName",
      message: "Enter the name of the repo you are creating this README.md for"
    },
    {
      type: "input",
      name: "email",
      message: "Enter the email address associated with your Github account"
    }
  ]);
}

function generateREADME(answers) {
  return `
  # ${answers}

  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  
  ${answer.installation}
  
  ## Usage
  
  ${answer.usage}

  The following is a user story outlining the project's intended usage

  AS A ${answers.role}

  I WANT ${answers.product}

  SO THAT ${answers.goal}
  
  ## License
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  Code size of project
  ![Code size](https://img.shields.io/github/languages/code-size/${answers.githubUsername}/${answers.repoName})
  
  ## Contributions
  
  The following in a copy of the [Contributor Covenant v2.0](https://www.contributor-covenant.org/). Please read before contributing to understand contribution guidelines.
  
  ### Our Pledge
  
  We as members, contributors, and leaders pledge to make participation in our
  community a harassment-free experience for everyone, regardless of age, body
  size, visible or invisible disability, ethnicity, sex characteristics, gender
  identity and expression, level of experience, education, socio-economic status,
  nationality, personal appearance, race, religion, or sexual identity
  and orientation.
  
  We pledge to act and interact in ways that contribute to an open, welcoming,
  diverse, inclusive, and healthy community.
  
  ### Our Standards
  
  Examples of behavior that contributes to a positive environment for our
  community include:
  
  * Demonstrating empathy and kindness toward other people
  * Being respectful of differing opinions, viewpoints, and experiences
  * Giving and gracefully accepting constructive feedback
  * Accepting responsibility and apologizing to those affected by our mistakes,
    and learning from the experience
  * Focusing on what is best not just for us as individuals, but for the
    overall community
  
  Examples of unacceptable behavior include:
  
  * The use of sexualized language or imagery, and sexual attention or
    advances of any kind
  * Trolling, insulting or derogatory comments, and personal or political attacks
  * Public or private harassment
  * Publishing others' private information, such as a physical or email
    address, without their explicit permission
  * Other conduct which could reasonably be considered inappropriate in a
    professional setting
  
  ### Enforcement Responsibilities
  
  Community leaders are responsible for clarifying and enforcing our standards of
  acceptable behavior and will take appropriate and fair corrective action in
  response to any behavior that they deem inappropriate, threatening, offensive,
  or harmful.
  
  Community leaders have the right and responsibility to remove, edit, or reject
  comments, commits, code, wiki edits, issues, and other contributions that are
  not aligned to this Code of Conduct, and will communicate reasons for moderation
  decisions when appropriate.
  
  ### Scope
  
  This Code of Conduct applies within all community spaces, and also applies when
  an individual is officially representing the community in public spaces.
  Examples of representing our community include using an official e-mail address,
  posting via an official social media account, or acting as an appointed
  representative at an online or offline event.
  
  ### Enforcement
  
  Instances of abusive, harassing, or otherwise unacceptable behavior may be
  reported to the community leaders responsible for enforcement at
  ${answers.email}
  
  All complaints will be reviewed and investigated promptly and fairly.
  
  All community leaders are obligated to respect the privacy and security of the
  reporter of any incident.
  
  #### Enforcement Guidelines
  
  Community leaders will follow these Community Impact Guidelines in determining
  the consequences for any action they deem in violation of this Code of Conduct:
  
  #### 1. Correction
  
  **Community Impact**: Use of inappropriate language or other behavior deemed
  unprofessional or unwelcome in the community.
  
  **Consequence**: A private, written warning from community leaders, providing
  clarity around the nature of the violation and an explanation of why the
  behavior was inappropriate. A public apology may be requested.
  
  #### 2. Warning
  
  **Community Impact**: A violation through a single incident or series
  of actions.
  
  **Consequence**: A warning with consequences for continued behavior. No
  interaction with the people involved, including unsolicited interaction with
  those enforcing the Code of Conduct, for a specified period of time. This
  includes avoiding interactions in community spaces as well as external channels
  like social media. Violating these terms may lead to a temporary or
  permanent ban.
  
  #### 3. Temporary Ban
  
  **Community Impact**: A serious violation of community standards, including
  sustained inappropriate behavior.
  
  **Consequence**: A temporary ban from any sort of interaction or public
  communication with the community for a specified period of time. No public or
  private interaction with the people involved, including unsolicited interaction
  with those enforcing the Code of Conduct, is allowed during this period.
  Violating these terms may lead to a permanent ban.
  
  #### 4. Permanent Ban
  
  **Community Impact**: Demonstrating a pattern of violation of community
  standards, including sustained inappropriate behavior,  harassment of an
  individual, or aggression toward or disparagement of classes of individuals.
  
  **Consequence**: A permanent ban from any sort of public interaction within
  the community.
  
  ### Attribution
  
  This Code of Conduct is adapted from the [Contributor Covenant][homepage],
  version 2.0, available at
  https://www.contributor-covenant.org/version/2/0/code_of_conduct.html.
  
  Community Impact Guidelines were inspired by [Mozilla's code of conduct
  enforcement ladder](https://github.com/mozilla/diversity).
  
  [homepage]: https://www.contributor-covenant.org
  
  For answers to common questions about this code of conduct, see the FAQ at
  https://www.contributor-covenant.org/faq. Translations are available at
  https://www.contributor-covenant.org/translations.
  
  ## Tests
  
  The following is a visual of testing the project, giving you a better idea of the project's functionality
  ![test GIF/video](${answers.testGIF})
  
  ## Questions
  
  ![Github Profile Picture](https://github.com/${answers.githubUsername}.png)
  
  For any questions concerning this project, please feel free to email me at ${answers.email}
  
  `;
}

async function init() {
  try {
    const answers = await promptUser();

    const README = generateREADME(answers);

    await writeFileAsync("test.md", README);

    console.log("Successfully made your personal README.md");
  } catch(err) {
    console.log(err);
  }
}

init();
