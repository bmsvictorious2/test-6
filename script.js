function checkAnswers() {
    let score = 0;
    const totalQuestions = 14; // Total number of questions

    // Get student name
    const studentName = document.getElementById("studentName").value;
    document.getElementById("displayName").innerText = `Student Name: ${studentName}`;
     //question1
 if (document.querySelector('input[name="testing"]:checked')?.value === "Word Embading") {
        score += 5;
    }
    // Question 2
    if (document.getElementById("EnableExplainbestmodel").checked) {
        score += 5;
    }

    // Question 3
    if (document.querySelector('input[name="workloadAI"]:checked')?.value === "Machine Learning") {
        score += 5;
    }
    // Question 4
    const question2Answer = document.getElementById("question2").value;
    if (question2Answer === "inclusiveness") {
        score += 5;
    }

  // Question 5
    const question5Answer = document.getElementById("question5").value;
    if (question5Answer === "Privacy and security") {
        score += 5;
    }
    // Question 6
    if (document.querySelector('input[name="train"]:checked')?.value === "VALUE3") {
        score += 5;
    }

   // Question 7
    const question7Answer = document.getElementById("question7").value;
    if (question7Answer === "OCR") {
        score += 5;
    }

    // Question 8 (Select two)
    const q6Selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    if (q6Selected.includes("Image classication") && q6Selected.includes("R")) {
        score += 5;
    }

   
    // Question 9
    if (document.querySelector('input[name="AI"]:checked')?.value === "CNN") {
        score += 5;
    }


    // Question 10
    const question8Answer = document.getElementById("question8").value;
    if (question8Answer === "inclusiveness") {
        score += 5;
    }

    // Question 11
    if (document.querySelector('input[name="image"]:checked')?.value === "Object detection") {
        score += 5;
    }
    // new question12
    if (document.querySelector('input[name="imge"]:checked')?.value === "34") {
        score += 5;
    }
//ques 13
 if (document.querySelector('input[name="img"]:checked')?.value === "6") {
        score += 5;
    }
//question 14
 if (document.querySelector('input[name="im"]:checked')?.value === "11") {
        score += 5;
    }
    // Question 15
    if (document.querySelector('input[name="images"]:checked')?.value === "Detect individual objects in an image") {
        score += 5;
    }

    // Question 16
    if (document.querySelector('input[name="At"]:checked')?.value === "standards") {
        score += 5;
    }

  

    // Question 17
    const selectedOptions = [];
    if (document.getElementById("inclusiveness").checked) {
        selectedOptions.push("inclusiveness");
    }
    if (document.getElementById("opinionatedness").checked) {
        selectedOptions.push("opinionatedness");
    }
    if (document.getElementById("reliability and safety").checked) {
        selectedOptions.push("reliability and safety");
    }

    // Correct answers for Question 14
    const correctAnswers = ["opinionatedness", "reliability and safety"];

    // Calculate score for Question 14
    const correctSelected = correctAnswers.filter(option => selectedOptions.includes(option)).length;
    
    if (correctSelected === 2) {
        score += 5; // Full score if both correct answers are selected
    } else if (correctSelected === 1) {
        score += 2.5; // Partial score if only one correct answer is selected
    }
//question18
    if (document.querySelector('input[name="Angle"]:checked')?.value === "4") {
        score += 5;
    }
//question 19
    if (document.querySelector('input[name="Angll"]:checked')?.value === "6") {
        score += 5;
    }
  // Question 20
    if (document.querySelector('input[name="Am"]:checked')?.value === "Voxel") {
        score += 5;
    }
    const resultPage = `result.html?name=${encodeURIComponent(studentName)}&marks=${encodeURIComponent(score)}`;
    window.location.href = resultPage;
}


   // Display result
   // document.getElementById("result").innerText = `You scored ${score} out of ${totalQuestions * 5}`;
    