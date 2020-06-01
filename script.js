const scheduleStorageCell = "AppointmentData";

// Returns empty schedule data
function emptySchedule() {
    
}

function init() {
    // initializes data from local storage 
    const maybeSchedule = localStorage.getItem(scheduleStorageCell);
    if (maybeSchedule) return JSON.parse(maybeSchedule);
    return emptySchedule();
}

function updateClock() {
    $('#current-time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

// color past cells grey
function updateSchedule() {

}

function refreshScreen () {
    updateClock();
    const now = moment();
    if (now.minute() === "00") {
        updateSchedule();
    }
}

// Show the time when the page loads
updateClock();

let clock = setInterval(updateClock, 1000);


let newBlock = $('<div id = " + i + " class = "row future">');

let hourData = $()
let inp

let inputField = $('<textarea class="w-100" placeholder="Write your todo here">');