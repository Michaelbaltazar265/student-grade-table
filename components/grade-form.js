
class GradeForm { 
    constructor(formElement){ 
        this.formElement = formElement;
        this.formElement.addEventListener("submit", this.handleSubmit.bind(this));
    } 
    onSubmit(createGrade){ 
        this.createGrade = createGrade;

    } 
    handleSubmit(event){ 
        event.preventDefault();
        var dataForm = new FormData(event.target);
        var nameFrom = dataForm.get("name"); 
        var courseFrom = dataForm.get("course"); 
        var gradeFrom = dataForm.get("grade");
        this.createGrade(nameFrom, courseFrom, gradeFrom);
        event.target.reset();
    }
}
