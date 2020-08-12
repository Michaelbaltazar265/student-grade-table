
class GradeForm { 
    constructor(formElement){ 
        this.formElement = formElement;
        this.formElement = this.handleSubmit.bind(this);
    } 
    onSubmit(createGrade){ 
        this.createGrade = createGrade;

    } 
    handleSubmit(event){ 
        event.preventDefault();
        console.log(event.target, "Hi")
    }
}