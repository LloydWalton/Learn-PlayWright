let day = "Sunday";

if (day == "Sunday") {
    console.log("It is a weekend - Sunday");
}
if (day == "Saturday") {
    console.log("It is a weekend - Saturday");
}
else {
    console.log("It is a weekday");
}


let day1 = "Sunday";

if (day1 == "Sunday") {
    console.log("It is a weekend - Sunday");
}
if (day1 == "Saturday") {
    console.log("It is a weekend - Saturday");
}
else {
    console.log("It is a weekday");
}



function grade(marks) {

    if (marks >= 90) {
        console.log("Grade A");
    }
    else if (marks >= 80) {
        console.log("Grade B");
    }
    else if (marks >= 70) {
        console.log("Grade C");
    }
    else if (marks >= 60) {
        console.log("Grade D");
    }
    else {
        console.log("Grade F");
    }
}

grade(90);
grade(80);
grade(70);
grade(60);
grade(50);


function grade(marks) {
    let result;

    if (marks >= 90) {
        result = "Grade A";
    }
    else if (marks >= 80) {
        result = "Grade B";
        //console.log("Grade B");
    }
    else if (marks >= 70) {
        result = "Grade C";
        //console.log("Grade C");
    }
    else if (marks >= 60) {
        result = "Grade D";
        //console.log("Grade D");
    }
    else {
        console.log("Grade F");
    }
    return result;
}

console.log(grade(70));
