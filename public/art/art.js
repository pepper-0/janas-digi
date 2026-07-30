/* ART.HTML */

const artFile = "../public/art/art.json"

// read in art data file
async function fetchArtData() {
    try {
        const response = await fetch(artFile)
        if (!response.ok) {
            throw new Error('HTTP error!');
        }
        const data = await response.json();
        return data;
    } catch(error) {
        console.error("failed to fetch data", error);
        throw error;
    }

}

var artData = null;

async function init() {
    try {
        artData = await fetchArtData();
    } catch (error) {
        console.log("freak my chud life");
    }
    console.log(artData);
    loadGalleryImages();
}

init();


// load all gallery images function
var moodboardContainer = document.getElementById("moodboard-container");

function loadGalleryImages() {
    console.log("called");
    for (let i = 0; i < artData.length; i++) {
        var piece = artData[i];

        console.log("yes things are happening rn")
        console.log(piece);

        var newMoodboardItem = document.createElement('div');

        var newMoodboardImage = document.createElement('img')
        newMoodboardImage.src = piece.path;
        newMoodboardItem.appendChild(newMoodboardImage)

        var newMoodboardDescription = document.createElement('p');
        newMoodboardDescription.classList.add("moodboard-description")
        newMoodboardDescription.innerHTML = "[ " + piece.id + " ]";
        newMoodboardItem.appendChild(newMoodboardDescription);

        newMoodboardItem.classList.add('moodboard-item');
        moodboardContainer.appendChild(newMoodboardItem);
    }
}

// load with "general"
loadGalleryImages();