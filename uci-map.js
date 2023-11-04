// map that holds coordinate for aldrichpark/UCI
var map = L.map('map').setView([33.6459647, -117.8427597], 16.44);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//---------------------------------

const restaurants = [
    { name: 'Brandywine', location: [33.64540329022346, -117.83928262177889]},
    { name: 'Java City Kiosk', location: [33.64342086082128, -117.84115637545828]},
    { name: 'Med Ed Cafe', location: [33.64452215740989, -117.85189061002549]},
    { name: 'Phoenix Food Court', location: [33.645599107261454, -117.8407076396062]},
    { name: 'Starbucks @ Biological Sciences', location: [33.64498862746285, -117.84564024802606]},
    { name: 'Starbucks @ Paul Merage School of Business', location: [33.64663727961053, -117.83803714082919]},
    { name: 'Anthill Pub', location: [33.64893997674284, -117.8422533219668]},
    { name: 'Bento', location: [33.648830986166416, -117.84210095478684]},
    { name: 'Jamba', location: [33.648830986166416, -117.84210095478684]},
    { name: 'Panda Express', location: [33.648899339073196, -117.84208400857327]},
    { name: 'Planteatery', location: "33.648899339073196, -117.84208400857327"},
    { name: 'Subway', location: "33.64925284884054, -117.84247968566768"},
    { name: 'ZotnGo Market', location: "33.64872449938839, -117.84276830100971"},
    { name: 'The Anteatery', location: "33.65119240860278, -117.84499118571881"},
    { name: 'The Green Room', location: "33.64980183961821, -117.84472431876374"},
    { name: 'University Club (UN CLB)', location: "33.643775880392305, -117.8420042322584"},
];



const studySpaces = [
    { name: 'Langson Library', location: "", url: 'https://example.com/restaurant1' },
    { name: 'Law Library', location: "", url: 'https://example.com/restaurant2' },
    { name: 'Science Library ', location: "", url: 'https://example.com/restaurant3' }
];

const ClubsAnsEvents = [
    { name: 'Hack @ UCI', location: "33.6432013564727, -117.8418968451981", url: 'https://linktr.ee/HackAtUCI' },
    { name: 'Design @ UCI', location: "", url: 'https://linktr.ee/designatuci/' },
    { name: 'WICS', location: "33.6432013564727, -117.841896845198", url: 'https://linktr.ee/wicsuci' },
    { name: 'Venus Hacks', location: "", url: 'https://linktr.ee/venushacks/' },
    { name: 'ICS Student Council @ UCI', location: "33.6432013564727, -117.8418968451981", url: 'https://linktr.ee/icssc.uci/' },
    { name: 'Google Development Student Club @ UCI', location: "", url: 'https://linktr.ee/gdsc.uci' }
];

//---------------------------------
function showItem(item) {
    let list = document.querySelector('ul');
    let list_item = document.createElement("li");
    const button = document.createElement('button');
    button.textContent = item.name;
    button.addEventListener('click', function(){
        showInMap(item)
    });
    const toggle = document.createElement('button');
    toggle.textContent = ;

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
    ClubsAnsEvents.forEach(showItem); // Use the forEach() method to call the function on each item

}

var activeMarker;

function showInMap(item){
    if (activeMarker === undefined) {
        activeMarker = L.marker(item.location).bindPopup("");
        activeMarker.addTo(map);
    } else {
        activeMarker.setLatLng(item.location)
    }
}