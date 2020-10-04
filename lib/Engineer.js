class Engineer {
    constructor(name, id, email, github) {
        // super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
}

getGitHub() {
    return this.github;
  };


getRole(name, id, email, github) {
    return {
        name: this.name,
        id: this.id,
        email: this.email,
        github: this.github
    };
 };
}   
module.exports = Engineer;
