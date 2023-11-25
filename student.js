// Constructor function for Student details
function Student(name, roll_no, classs, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.classs = classs;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    // Function method to print top three subjects based on marks
    this.printTop3Subjects = function () {
        const subjects = Object.keys(this.marks_of_5_subjects);
        const sortedSubjects = subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
        const top3Subjects = sortedSubjects.slice(0, 3);
        console.log("Top 3 Subjects:", top3Subjects.join(", "));
    };

    // Function method to print the report card
    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name} |`);
        console.log(`| Roll no. - ${this.roll_no}      |`);
        console.log(`| Class    - ${this.classs}       |`);
        console.log(`| Section  - ${this.section}       |`);

        // Printing marks for each subject
        Object.keys(this.marks_of_5_subjects).forEach(subject => {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)}  - ${this.marks_of_5_subjects[subject]}      |`);
        });

        // Calculating and printing percentage
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, mark) => acc + mark, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
        console.log(`| Percentage - ${percentage.toFixed(1)} %  |`);
        console.log("+--------------------+");
    };
}

