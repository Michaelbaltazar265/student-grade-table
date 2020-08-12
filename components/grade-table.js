
class GradeTable { 
    constructor(tableElement){ 
        this.tableElement = tableElement;
        
    }
    updateGrades(grades){ 
        console.log(grades);
        var tBody = document.getElementById("user-data");
        for (var i = 0; i < grades.length; i++){ 
            var row = document.createElement("tr"); 
            var studentName = document.createElement("td");
            var studentCourse = document.createElement("td");
            var studentGrade = document.createElement("td");
            studentName.textContent = grades[i].name;
            studentCourse.textContent = grades[i].course; 
            studentGrade.textContent = grades[i].grade;
            row.append(studentName, studentCourse, studentGrade);
            tBody.appendChild(row);
        }
        
    }
}