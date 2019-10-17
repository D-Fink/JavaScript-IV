// CODE here for your Lambda Classes
class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.name;
        this.location = props.location;
    }
    greet(){
        return `Hello, my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    };
    demo(subjectStr){
        return `Today we are learning about ${subjectStr}.`
    };
    grade(studentObj, subjectStr){
        return `${studentObj.name} receives a perfect score on ${subjectStr}!`
    }
}

class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    };
    listsSubjects(){
        //copies array (spread operator)
        [...this.favSubjects]
    };
    PRAssignment(subjectStr){
        return `${this.name} has submitted a PR for ${subjectStr}.`
    };
    sprintChallenge(subjectStr){
        return `${this.name} has begun the sprint challenge on ${subjectStr}`
    }
}

class ProjectManager extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    };
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    };
    debugsCode(studentObj, subjectStr){
        return `${this.name} debugs ${studentObj}'s code on ${subjectStr}.`
    }
}

const jim = new Instructor({
    name:"Jim",
    age: "23",
    location: "Montana",
    specialty: "React",
    favLanguage: "Java",
    catchPhrase: "Wang Bang Bobble!"
});
const tony = new Instructor({
    name:"Tony",
    age: "45",
    location: "California",
    specialty: "Redux",
    favLanguage: "JavaScript",
    catchPhrase: "Nothin' but a chicken wing on a string."
});
const molly = new Student({
    name:"Molly",
    age: "19",
    location: "Virginia",
    previousBackground: "Business Management",
    className: "Web254",
    favSubjects: ["HTML", "CSS"]
});
const noah = new Student({
    name:"Noah",
    age: "55",
    location: "Maryland",
    previousBackground: "Customer Service",
    className: "Web868",
    favSubjects: ["JavaScript", "Java"]
});
const whis = new ProjectManager({
    name:"Whis",
    age: "46",
    location: "The Moon",
    specialty: "Web Design",
    favLanguage: "Mark-up",
    catchPhrase: "Yak 'em Slack 'em Whack 'em Jack 'em",
    gradClassName: "Web937",
    favInstructor: "Dirt McGirt"
});
const abe = new ProjectManager({
    name:"Abe",
    age: "32",
    location: "Minnesota",
    specialty: "Data Science",
    favLanguage: "Mark-down",
    catchPhrase: "Uber Stoked!",
    gradClassName: "Web000",
    favInstructor: "Bob Lund"
});

console.log(abe.greet())
console.log(noah.greet())
console.log(jim.demo("JavaScript"))
console.log(tony.demo("HTML"))
console.log(whis.grade(molly, "JS"))
console.log(jim.grade(noah, "CSS"))
console.log(molly.listsSubjects())
console.log(noah.listsSubjects())
console.log(molly.PRAssignment("LESS"))
console.log(noah.PRAssignment("React"))
console.log(molly.sprintChallenge("Data Science"))
console.log(noah.sprintChallenge("Web Design"))
console.log(whis.standUp("web25"))
console.log(abe.standUp("web25_help"))
console.log(whis.debugsCode(molly.name, "Web Development"))
console.log(abe.debugsCode(noah.name, "Java"))