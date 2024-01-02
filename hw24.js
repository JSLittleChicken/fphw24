class Student {
    constructor (firstName, lastName, birthDay, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.marks = marks;
        this.absence = new Array(25);
        this.absenceIndex = 0;
        this.age = this.getAge(birthDay);
        this.averageMarks = this.marks.reduce((a,b)=>a+b)/this.marks.length;
        this.presenceFactor = 0.9;
        this.goodMarksMin = 90;
        this.results = {
            BAD: "редиска",
            NORMAL: "добре але можна краще",
            EXCELENT: "молодець",
        };
    }

absent() {
    if (this.absence.length > this.absenceIndex) {
        this.absence[this.absenceIndex] = false;
        this.absenceIndex++;
    }
};

present() {
    if (this.absence.length > this.absenceIndex) {
        this.absence[this.absenceIndex] = true;
        this.absenceIndex++;
    }
};

get averagePresence() {
    var presenceCount = this.absence.slice(0, this.absenceIndex).filter(x => x).length;
    return presenceCount / this.absenceIndex;
}    

getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

summary() {
    if (this.averageMarks < this.goodMarksMin && this.averagePresence < this.presenceFactor) {
        console.log(this.results.BAD);
    } else if (this.averageMarks < this.goodMarksMin || this.averagePresence < this.presenceFactor)
        console.log(this.results.NORMAL);
    else
        console.log(this.results.GOOD);
}
}

let st1 = new Student("John", "Doe", 'July 1, 2000', [90,88,100,92,90,96])
console.log(st1.age)
console.log(st1.averageMarks)
st1.present()
st1.absent()
st1.present()
st1.summary()

let stud = new Student("Petro", "Lytvyn", 'December 17, 1995', [1,2,4])
console.log(stud.age)
console.log(stud.averageMarks)
stud.present()
stud.absent()
stud.absent()
stud.absent()
stud.absent()
stud.absent()
stud.summary()