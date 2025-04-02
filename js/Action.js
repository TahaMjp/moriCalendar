let birthDate = document.getElementById("birthDate");
let deathDate = document.getElementById("deathAge");
let generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", function() {
    console.log("Button clicked");
    console.log("Birth Date: ", birthDate.value);
    console.log("Death Date: ", deathDate.value);
});