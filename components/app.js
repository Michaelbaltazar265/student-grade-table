
// define a call name App for all the primary class of Student Grade Table

class App { 
    constructor(gradeTable, pageHeader, gradeForm){ 
        this.handleGetGradesError = this.handleGetGradesError.bind(this); 
        this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    }
    handleGetGradesError(error){ 
        console.error(error);
    }; 
    handleGetGradeSuccess(grades){ 
        this.gradeTable.updateGrades(grades);
        var sum = 0;
        for (var i = 0; i < grades.length; i++){ 
            sum += grades[i].grade;
        }
        var gradeAverage = Math.round(sum/grades.length);
        this.pageHeader.updateAverage(gradeAverage);

    };
    getGrades(){ 
        $.ajax({ 
            method: "GET", 
            url: "https://sgt.lfzprototypes.com/api/grades", 
            success: this.handleGetGradeSuccess, 
            error: this.handleGetGradesError, 
            data: "none",
            headers: {"X-Access-Token": "tenYnVPr"},
        })
    }
    start(){ 
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
        
    }
    createGrade(name, course, grade){ 
        console.log(name, course, grade);
        $.ajax({ 
            method: "POST",
            url: "https://sgt.lfzprototypes.com/api/grades", 
            error: this.handleCreateGradeError, 
            success: this.handleCreateGradeSuccess,
            headers: {"X-Access-Token": "tenYnVPr"},
            data: { 
               name: name,
               course: course,
               grade: grade, 
            }
        })
    }
    handleCreateGradeError(error){ 
        console.error(error, "this is the error");
    }
    handleCreateGradeSuccess(){ 
        this.getGrades();
    }
}  
