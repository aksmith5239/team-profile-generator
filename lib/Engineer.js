function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

Engineer.prototype.getGitHub = function() {
    return this.github;
  };


  Employee.prototype.getRole = function(name, id, email, github) {
    return {
        name: this.name,
        id: this.id,
        email: this.email,
        github: this.github
    };
 };  
module.exports = Engineer;
