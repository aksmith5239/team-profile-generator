
const createTeamProfile = profile => {
const createManager = manager => {
    console.log(manager.getName());
    return `
    <div class='card'>
    <div class='card-header manager'>
        <h4>${manager.getName()}</h4>
        <h4>${manager.getRole()}</h4>
    </div>
    <div class='card-body '>
        <ul class='list-group'>
            <li class='list-group-item'>ID: ${manager.getId()}</li>
            <li class='list-group-item'>${manager.getEmail()}</li>
            <li class='list-group-item'>Office #: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
`
};

const createEngineer = engineer => {
    return `
    <div class='card'>
    <div class='card-header engineer'>
        <h4>${engineer.getName()}</h4>
        <h4>${engineer.getRole()}</h4>
    </div>
    <div class='card-body '>
        <ul class='list-group'>
            <li class='list-group-item'>ID: ${engineer.getId()}</li>
            <li class='list-group-item'>${engineer.getEmail()}</li>
            <li class='list-group-item'>GitHub Username: ${engineer.getGitHub()}</li>
        </ul>
    </div>
</div>
`
};

const createIntern = intern => {
    return `
    <div class='card'>
    <div class='card-header intern'>
        <h4>${intern.getName()}</h4>
        <h4>${intern.getRole()}</h4>
    </div>
    <div class='card-body '>
        <ul class='list-group'>
            <li class='list-group-item'>ID: ${intern.getId()}</li>
            <li class='list-group-item'>${intern.getEmail()}</li>
            <li class='list-group-item'>School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
`
};

const createHTML = [];

createHTML.push(profile.filter(employee => employee.getRole() === 'Manager')
.map(manager => createManager(manager))
);

createHTML.push(profile.filter(employee => employee.getRole() === 'Engineer')
.map(engineer => createEngineer(engineer))
);

createHTML.push(profile.filter(employee => employee.getRole() === 'Intern')
.map(intern => createIntern(intern))
);

return createHTML.join("");


}

module.exports = profile => {
    console.log(profile);
 return`
 <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Team Profile Generator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- <script charset="utf-8" src="js/app.js"></script> -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
        <link rel="stylesheet" href="../src/style.css" />
    </head>
    <body>
        <header>
            <h1>My Team!</h1>
        </header>
        <div class = 'container-fluid'>
            <div class='row'>
                <div class='col mt-3'>
            <!-- begin cards -->
                    <div class='card-deck'>
                       ${createTeamProfile(profile)}
                    </div>
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
    </html>`


}