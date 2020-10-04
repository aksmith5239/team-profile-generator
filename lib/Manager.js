class Manager{
    constructor(name, id, email, officeNumber) {
        // super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    };


    getRole(name, id, email, officeNumber) {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            officeNumber: this.officeNumber
        };
     };

} //end class 

module.exports = Manager;