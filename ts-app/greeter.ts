interface Person{
    firstName: string;
    lastName: string;
    fullName: string;
}

function greeter(person: Person){
    return "Hello, " +person.fullName;
}



class Student {
    fullName:string;
    firstName:string;
    middleInitial:string;
    lastName:string;
    constructor(firstName : string,middleInitial : string,lastName :string){
        this.fullName=firstName + " " + middleInitial + " " + lastName;
    }
}

var user = new Student("Jane","T","User");
document.body.innerHTML = greeter(user);