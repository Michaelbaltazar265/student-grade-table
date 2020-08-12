
// define a call name App for all the primary class of Student Grade Table

class App { 
    constructor(gradeTable){ 
        this.handleGetGradesError = this.handleGetGradesError.bind(this); 
        this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
        this.gradeTable = gradeTable;

    }
    handleGetGradesError(error){ 
        console.error(error);
    };
    handleGetGradeSuccess(grades){ 
        //console.log(grades);
        this.gradeTable.updateGrades(grades);
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

// console.log("hello world");