/* ART.HTML */

// carousel functionality
var carousel = ["img1", "img2", "img3"];
// function that enables clickability for side 
function enableSelect(left, right) {
    left.addEventListener("click", moveLeft)
}

function moveLeft() {

}

function moveRight() {
    
}

// read in csv file
const artFile = "../public/art.csv"

const reader = new FileReader();
reader.onload = function (e) {
    try {
        const text = e.target.result;
        const rows = text.trim().split("\n").map(row => row.split(","));
        document.getElementById('output').textContent = JSON.stringify(rows, null, 2)
    } catch (err) {
        console.error("error parsing CSV:", err);
        alert("error reading csv file.");
    }
}

reader.readAsText(artFile);


// load all gallery images function
// load with "general"