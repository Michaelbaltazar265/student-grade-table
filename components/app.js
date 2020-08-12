
// define a call name App for all the primary class of Student Grade Table

class App { 
    constructor(gradeTable, pageHeader){ 
        this.handleGetGradesError = this.handleGetGradesError.bind(this); 
        this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;

    }
    handleGetGradesError(error){ 
        console.error(error);
    }; 
    handleGetGradeSuccess(grades){ 
        //console.log(grades);
        this.gradeTable.updateGrades(grades);
        var sum = 0;
        for (var i = 0; i < grades.length; i++){ 
            //console.log(grades[i].grade);
            sum += grades[i].grade;
            //console.log(sum/grades.length);
        }
        var gradeAverage = Math.round(sum/grades.length);
        //console.log(gradeAverage);
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
    }
}  
