// map that holds coordinate for aldrichpark/UCI
var map = L.map('map').setView([33.6459647, -117.8427597], 16.44);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//---------------------------------

const restaurants = [
    { name: 'Restaurant 1', location: "", url: 'https://example.com/restaurant1' },
    { name: 'Restaurant 2', location: "", url: 'https://example.com/restaurant2' },
    { name: 'Restaurant 3', location: "", url: 'https://example.com/restaurant3' }
];

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