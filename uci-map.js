// map that holds coordinate for aldrichpark/UCI
var map = L.map('map').setView([33.6459647, -117.8427597], 16.44);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.locate().addTo(map);

//---------------------------------

const restaurants = [
    { name: 'Brandywine', location: [33.64540329022346, -117.83928262177889], url: "https://uci.campusdish.com/en/LocationsAndMenus/Brandywine"},
    { name: 'Java City Kiosk', location: [33.64342086082128, -117.84115637545828], url: "https://uci.campusdish.com/LocationsAndMenus/JavaCityKiosk"},
    { name: 'Med Ed Cafe', location: [33.64452215740989, -117.85189061002549], url: "https://uci.campusdish.com/LocationsAndMenus/MedEdCafe" },
    { name: 'Phoenix Food Court', location: [33.645599107261454, -117.8407076396062], url: "https://uci.campusdish.com/LocationsAndMenus/PhoenixFoodCourt" },
    { name: 'Starbucks @ Biological Sciences', location: [33.64498862746285, -117.84564024802606] , url: "https://uci.campusdish.com/LocationsAndMenus/StarbucksBiologicalSciences" },
    { name: 'Starbucks @ Paul Merage School of Business', location: [33.64663727961053, -117.83803714082919], url: "https://uci.campusdish.com/LocationsAndMenus/StarbucksPaulMerageSchoolofBusiness" },
    { name: 'Anthill Pub', location: [33.64893997674284, -117.8422533219668], url: "https://uci.campusdish.com/LocationsAndMenus/StudentCenter/AnthillPubGrille" },
    { name: 'Bento', location: [33.648830986166416, -117.84210095478684], url: "https://uci.campusdish.com/LocationsAndMenus/StudentCenter/BentoSushi" },
    { name: 'Jamba', location: [33.648830986166416, -117.84210095478684], url: "https://uci.campusdish.com/LocationsAndMenus/StudentCenter/JambaJuice" },
    { name: 'Panda Express', location: [33.648899339073196, -117.84208400857327], url: "https://uci.campusdish.com/LocationsAndMenus/StudentCenter/PandaExpress" },
    { name: 'Planteatery', location: [33.648899339073196, -117.84208400857327], url: "https://uci.campusdish.com/LocationsAndMenus/StudentCenter/Planteatery" },
    { name: 'Subway', location: [33.64925284884054, -117.84247968566768], url: "https://uci.campusdish.com/LocationsAndMenus/StudentCenter/Subway" },
    { name: 'ZotnGo Market', location: [33.64872449938839, -117.84276830100971], url: "https://uci.campusdish.com/LocationsAndMenus/ZotNGoMarket" },
    { name: 'The Anteatery', location: [33.65119240860278, -117.84499118571881], url: "https://uci.campusdish.com/LocationsAndMenus/TheAnteatery" },
    { name: 'The Green Room', location: [33.64980183961821, -117.84472431876374], url: "https://uci.campusdish.com/LocationsAndMenus/TheGreenRoom" },
    { name: 'University Club (UN CLB)', location: [33.643775880392305, -117.8420042322584], url: "https://www.uclub.uci.edu/" },
];



const studySpaces = [
    { name: 'Gateway Study Center', location: [33.64767975240846, -117.84159683964475], url: 'https://spaces.lib.uci.edu/spaces?lid=6579' },
    { name: 'Graduate Study Center', location: [33.64734100228406, -117.84121530101072], url: 'https://grad.uci.edu/professional-development/graduate-and-postdoctoral-scholar-resource-center/' },
    { name: 'Orange County & Southeast Asian Archive Center', location: [33.64727575191827, -117.84180847062977], url: 'https://ocseaa.lib.uci.edu/' },
    { name: 'Student Outreach and Retention Center', location: [33.64739139130019, -117.84202161072926], url: 'https://soar.uci.edu/' },
    { name: 'Langson Library', location: [33.64734100228406, -117.84121530101072], url: 'https://spaces.lib.uci.edu/spaces?lid=6539' },
    { name: 'Law Library', location: [33.64699820299756, -117.83598098566956], url: 'https://www.law.uci.edu/library/' },
    { name: 'Science Library', location: [33.645734255137604, -117.84670409988699], url: 'https://spaces.lib.uci.edu/spaces?lid=6580' },
    { name: 'Center of Excellence in Communication and Writing', location: [33.64578539096283, -117.84640355142896], url: 'https://writingcenter.uci.edu/' },
    { name: 'Multimedia Resources Center', location: [33.64601288677165, -117.84667824231845], url: 'https://spaces.lib.uci.edu/spaces?lid=6581' },
    { name: 'Scholarship Oppurtunities Porgram ', location: [33.645734255137604, -117.84670409988699], url: 'https://scholars.uci.edu/' }
];

const ClubsAnsEvents = [
    { name: 'Hack @ UCI', location: [33.6432013564727, -117.8418968451981], url: 'https://linktr.ee/HackAtUCI' },
    { name: 'Design @ UCI', location: [], url: 'https://linktr.ee/designatuci/' },
    { name: 'WICS', location: [33.6432013564727, -117.841896845198], url: 'https://linktr.ee/wicsuci' },
    { name: 'Venus Hacks', location: [], url: 'https://linktr.ee/venushacks/' },
    { name: 'ICS Student Council @ UCI', location: [33.6432013564727, -117.8418968451981], url: 'https://linktr.ee/icssc.uci/' },
    { name: 'Google Development Student Club @ UCI', location: [], url: 'https://linktr.ee/gdsc.uci' }
];

//---------------------------------
let favorite_list = [];
let checked_list = [];

function showItem(item) {


    //add item
    let list = document.querySelector('ul');
    let list_item = document.createElement("li");
    const button = document.createElement('button');
    button.textContent = item.name;
    button.addEventListener('click', function(){
    showInMap(item)
    });
    // add checkmark toggle
    const toggle = document.createElement('button');
    toggle.innerHTML = "<i class='fa-solid fa-square-check'></i>";
    toggle.style.paddingRight = "8px";
    toggle.classList.add('undone');
    toggle.addEventListener('click', () => {
    if (toggle.classList.contains("undone")){
    toggle.classList.add("done");
    toggle.classList.remove("undone");
    toggle.style.color = "green";
    completed_item = toggle.nextElementSibling.nextElementSibling.innerHTML;
    checked_list.push(completed_item);
    console.log(checked_list);
    } else {
    toggle.classList.add("undone");
    toggle.classList.remove("done")
    toggle.style.color = "black";
    uncompleted_item = toggle.nextElementSibling.nextElementSibling.innerHTML;
    index_to_remove = checked_list.indexOf(uncompleted_item);
    checked_list.splice(index_to_remove,1);
    console.log(checked_list);
    };
    });
    
    
    // add favorite button
    const favorite = document.createElement('button');
    favorite.innerHTML = '<i class="fa-regular fa-heart"></i>';
    favorite.style.paddingRight = "8px";
    favorite.classList.add('unfavorite');
    favorite.addEventListener('click', () => {
        if (favorite.classList.contains("unfavorite")){
            favorite.classList.add("favorite");
            favorite.classList.remove("unfavorite");
            favorite.style.color = "red";
            favorite_item = favorite.nextElementSibling.innerHTML;
            favorite_list.push(favorite_item);
            console.log(favorite_list);
        } else {
            favorite.classList.add("unfavorite");
            favorite.classList.remove("favorite")    
            favorite.style.color = "black";
            unfavorite_item = favorite.nextElementSibling.innerHTML;
            index_to_remove = favorite_list.indexOf(unfavorite_item);
            favorite_list.splice(index_to_remove,1);
            console.log(favorite_list);
        };
    });
    list_item.appendChild(toggle);
    list_item.appendChild(favorite);
    list_item.appendChild(button);
    list.appendChild(list_item);
    }

function showSubmitButton(){
    let submit_button = document.querySelector("#submit-button");
    submit_button.style.display = "block";
}
    

var shown = false;
function showDiv() {
    shown = true;
    document.getElementById('detail-list').style.display = "block";
}

function clearItems(item){
    let list = document.querySelector('#items');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function showRestaurants(){
    if(!shown) {
        showDiv();
    }
    clearItems();
    restaurants.forEach(showItem); // Use the forEach() method to call the function on each item
    showSubmitButton();
}

function showStudySpaces(){
    if(!shown) {
        showDiv();
    }
    clearItems();
    studySpaces.forEach(showItem); // Use the forEach() method to call the function on each item
    showSubmitButton();

}

function showClubsAnsEvents(){
    if(!shown) {
        showDiv();
    }
    clearItems();
    ClubsAnsEvents.forEach(showItem); // Use the forEach() method to call the function on each item
    showSubmitButton();

}

var activeMarker;

function showInMap(item){
    if (activeMarker === undefined) {
        activeMarker = L.marker(item.location);
        activeMarker.addTo(map);
    } else {
        activeMarker.setLatLng(item.location);
    }
    activeMarker.bindPopup(`<a href="${item.url}">${item.name}</a>`).openPopup();
    map.flyTo(item.location);
}

function submit(){
    
}