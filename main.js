

var form = document.querySelector("form");
var container = document.querySelector(".container");
var table = document.querySelector(".table");
var clGradeForm = new GradeForm(form);
var clPageHeader = new PageHeader(container);
var clGradeTable = new GradeTable(table);
var clApp = new App(clGradeTable, clPageHeader, clGradeForm).start();
//console.log(form);  
