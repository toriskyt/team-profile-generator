function generateTeam(team) {
    const html = [];
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => makeMgrCard(manager)));

    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => makeEngCard(engineer)).join(""));

    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => makeIntCard(intern)).join(""));

    return html.join("");
}
function makeMgrCard(manager) {
    return `
    <div class="card-container">
      <div class="card p-3 mb-2 bg-success text-white" style="width: 18rem">Manager</div>
      <div class= "card-body"> <h4 class= "card-title">
        Name: ${manager.getName()} <br>
        ID: ${manager.getId()} <br>
        Email: ${manager.getEmail()} <br>
        Office: ${manager.getOfficeNumber()} <br>
      </h4></div> 
	</div>
    `
} function makeEngCard(engineer) {
    return `
	<div class="card-container">
      <div class="card p-3 mb-2 bg-danger text-white" style= "width: 18rem">Engineer</div>
      <div class= "card-body"> <h4 class= "card-title">
          Name: ${engineer.getName()} <br>
          ID: ${engineer.getId()} <br>
          Email: ${engineer.getEmail()} <br>
          GitHub: ${engineer.getGithub()} <br>
      </h4></div> 
	</div>
    `
} function makeIntCard(intern) {
    return `
	<div class="card-container">
      <div class="card p-3 mb-2 bg-info text-dark" style="width: 18rem">Intern</div>
      <div class= "card-body"> <h4 class= "card-title">
          Name: ${intern.getName()} <br>
          ID: ${intern.getId()} <br>
          Email: ${intern.getEmail()} <br>
          School: ${intern.getSchool()} <br>
      </h4></div> 
	</div>
    `
}

function makeHtml(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap link for cards -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet"  href="./style.css"/>
    <title>Team Profile Generator</title>
    </head>

    <body>
    <header>
    <h1>My Team Members</h1>
    </header>
    <div class="container" style= "border: 1px solid black">
    ${generateTeam(team)}
    </div>
    </body>
    </html>
  `
}

module.exports = makeHtml
