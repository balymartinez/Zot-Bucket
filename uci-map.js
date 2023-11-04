// map that holds coordinate for aldrichpark/UCI
var map = L.map('map').setView([33.6459647, -117.8427597], 16.44);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//---------------------------------

const restaurants = [
    { name: 'Brandywine', location: "33.64540329022346, -117.83928262177889"},
    { name: 'Java City Kiosk', location: "33.64342086082128, -117.84115637545828"},
    { name: 'Med Ed Cafe', location: " 33.64452215740989, -117.85189061002549"},
    { name: 'Phoenix Food Court', location: " 33.645599107261454, -117.8407076396062"},
    { name: 'Starbucks @ Biological Sciences', location: "33.64498862746285, -117.84564024802606"},
    { name: 'Starbucks @ Paul Merage School of Business', location: "33.64663727961053, -117.83803714082919"},
    { name: 'Anthill Pub', location: "33.64893997674284, -117.8422533219668"},
    { name: 'Bento', location: "33.648830986166416, -117.84210095478684"},
    { name: 'Jamba', location: "33.648830986166416, -117.84210095478684"},
    { name: 'Panda Express', location: "33.648899339073196, -117.84208400857327"},
    { name: '', location: ""},

];

const study_Spaces = [
    { name: 'Gateway Study Center', location: "33.64767975240846, -117.84159683964475"},
    { name: 'Graduate Study Center', location: "33.64342086082128, -117.84115637545828"},
    { name: 'Orange County & Southeast Asian Archive Center', location: "33.64727575191827, -117.84180847062977"},
    { name: 'Student Outreach and Retention Center', location: "33.64739139130019, -117.84202161072926"},
    { name: 'Langson Library', location: "33.64734100228406, -117.84121530101072"},
    { name: 'Law Library', location: "33.64699820299756, -117.83598098566956"},
    { name: 'Science Library', location: "33.645734255137604, -117.84670409988699"},
    { name: 'Multimedia Resources Center', location: "33.64601288677165, -117.84667824231845"},
    { name: 'Center of Excellence in Communication and Writing ', location: "33.64578539096283, -117.84640355142896"},
    { name: 'Scholarship Oppurtunities Porgram  ', location: "33.645734255137604, -117.84670409988699"}
];



 



 

 

// Planteatery
// Starbucks
// Subway
// 33.64925284884054, -117.84247968566768
// ZotnGo Market
// 33.64872449938839, -117.84276830100971
// Taza
// The Anteatery
// 33.65119240860278, -117.84499118571881
// The Green Room
// 33.64980183961821, -117.84472431876374
// University Club (UN CLB)
// 33.643775880392305, -117.8420042322584


const studySpaces = [
    { name: 'Langson Library', location: "", url: 'https://example.com/restaurant1' },
    { name: 'Law Library', location: "", url: 'https://example.com/restaurant2' },
    { name: 'Science Library ', location: "", url: 'https://example.com/restaurant3' }
];


//---------------------------------
function showItem(item) {
    let list = document.querySelector('ul');
    let list_item = document.createElement("li");
    const button = document.createElement('button');
    button.textContent = item.name;
    button.addEventListener('click', function(){
        showInMap(button.textContent)
    });
    list_item.appendChild(button);
    list.appendChild(list_item);
}

function clearItems(item){
    let list = document.querySelector('#items');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function showRestaurants(){
    clearItems();
    restaurants.forEach(showItem); // Use the forEach() method to call the function on each item

}

function showStudySpaces(){
    clearItems();
    studySpaces.forEach(showItem); // Use the forEach() method to call the function on each item

}

function showClubsAnsEvents(){
    clearItems();
    // restaurants.forEach(showItem); // Use the forEach() method to call the function on each item

}


function showInMap(itemName){
    alert(itemName)
}