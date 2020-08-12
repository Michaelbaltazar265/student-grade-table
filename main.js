var container = document.querySelector(".container");
var table = document.querySelector(".table");
var clPageHeader = new PageHeader(container);
var clGradeTable = new GradeTable(table);
var clApp = new App(clGradeTable, clPageHeader).start();
