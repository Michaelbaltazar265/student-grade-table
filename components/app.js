
// define a call name App for all the primary class of Student Grade Table

class App { 
    constructor(){ 
        this.handleGetGradesError = this.handleGetGradesError.bind(this); 
        this.headleGetGradeSuccess = this.headleGetGradeSuccess.bind(this);

    }
    handleGetGradesError(error){ 
        console.error(error);
    } 
    handleGetGradeSuccess(grades){ 
        console.log(grades)
    } 
    getGrades(){ 
        $.ajax({ 
            method: "GET", 
            url: "https://sgt.lfzprototypes.com/api/grades", 
            success: this.handleGetGradeSuccess, 
            error: this.handleGetGradesError, 
            data: "none",
            headers: { 
                "X-Access-Token": "tenYnVPr"
            }
        })
    }
    start(){ 
        this.getGrades();
    }
} 

console.log("hello world");