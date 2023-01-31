////document.getElementById("btnCalculate").addEventListener("click", function () {
////    alert("This worked!");
////})

$("#btnCalculate").click(function () {
    //Pull the variables from the submitted form
    var assignments = 0;
    //assignments = document.getElementById("assignments").value;
    assignments = $("#assignments").val();
    //assignments = assignments * 1;
    var groupProject = 0;
    //groupProject = document.getElementById("group project").value;
    groupProject = $("#group_project").val();
    var quizzes = 0;
    //quizzes = document.getElementById("quizzes").value;
    quizzes = $("#quizzes").val();
    var midterm = 0;
    //midterm = document.getElementById("midterm exam").value;
    midterm =$("#midterm_exam").val();
    var final = 0;
    //final = document.getElementById("final exam").value;
    final =$("#final_exam").val();
    var intex = 0;
    //intex = document.getElementById("intex").value;
    intex = $("#intex").val();

    //Calculate the final grade percentage based on category weights
    var percentGrade = (assignments * .5) + (groupProject * .1) + (quizzes * .1) + (midterm * .1) + (final * .1) + (intex * .1);

    //Assign a final letter grade based on the final percentage
    var letterGrade = "I"
    if (percentGrade >= 94) {
        letterGrade = "A"
    } else if (percentGrade >= 90) {
        letterGrade = "A-"
    } else if (percentGrade >= 87) {
        letterGrade = "B+"
    } else if (percentGrade >= 84) {
        letterGrade = "B"
    } else if (percentGrade >= 80) {
        letterGrade = "B-"
    } else if (percentGrade >= 77) {
        letterGrade = "C+"
    } else if (percentGrade >= 74) {
        letterGrade = "C"
    } else if (percentGrade >= 70) {
        letterGrade = "C-"
    } else if (percentGrade >= 67) {
        letterGrade = "D+"
    } else if (percentGrade >= 64) {
        letterGrade = "D"
    } else if (percentGrade >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }
    var gradeText = "Final Grade : " + letterGrade + " " + percentGrade.toString() + "%";
    //Output the final grade to the website
    $("#finalGrade").html(gradeText)
})