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


// load all gallery and carousel images function
var carouselContainer = document.getElementById("main-carousel");
var moodboardContainer = document.getElementById("moodboard-container");

// the ones to be added to the carousel
let newCells = [];

function loadGalleryImages() {

    console.log("called");
    for (let i = 0; i < artData.length; i++) { // error here that i dont wanna fix rn
        var piece = artData[i];

        if (piece.tags.includes("favorites")) { // put in upper carousel

            var newCarouselCell = document.createElement('div');
            newCarouselCell.classList.add("carousel-cell");

            var newCarouselImage = document.createElement('img');
            newCarouselImage.src = piece.path;
            newCarouselCell.appendChild(newCarouselImage);

            var newCarouselCaption = document.createElement('p');
            newCarouselCaption.classList.add("gallery-description");
            newCarouselCaption.innerHTML = "[ " + piece.id + " ]";
            newCarouselCell.appendChild(newCarouselCaption);

            newCells.push(newCarouselCell);

        } else {
            var newMoodboardItem = document.createElement('div');

            var newMoodboardImage = document.createElement('img')
            newMoodboardImage.src = piece.path;
            newMoodboardItem.appendChild(newMoodboardImage)

            var newMoodboardCaption = document.createElement('p');
            newMoodboardCaption.classList.add("moodboard-description")

            // var newMoodboardDescription = document.createElement('span');
            // newMoodboardDescription.classList.add("hidden");

            newMoodboardCaption.innerHTML = "[ " + piece.id + " ]";
            newMoodboardItem.appendChild(newMoodboardCaption);

            newMoodboardItem.classList.add('moodboard-item');
            moodboardContainer.appendChild(newMoodboardItem);
        }
        
    }
}

var flkty = new Flickity( '.main-carousel', {
    wrapAround: true,
    cellAlign: 'left',
    contain: true
});

flkty.append(newCells)
console.log("appended")
console.log(newCells)