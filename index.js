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

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

async function init() {
  try {
    const answers = await promptUser();

    console.log(answers);

    // const html = generateHTML(answers);

    // await writeFileAsync("index.html", html);

    console.log("Successfully made your personal README.md");
  } catch(err) {
    console.log(err);
  }
}

init();
