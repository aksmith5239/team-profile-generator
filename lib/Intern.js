class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    };

    getSchool() {
        return this.school;
      };

    getRole(name, id, email, school) {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            school: this.school
        };
     };

} //end class 

module.exports = Intern;