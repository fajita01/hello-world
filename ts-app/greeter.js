function greeter(person) {
    return "Hello, " + person.fullName;
}
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user = new Student("Jane", "T", "User");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map