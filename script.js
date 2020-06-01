const scheduleStorageCell = "AppointmentData";
const hoursInSchedule = [9,10,11,12,13,14,15,16,17];
const placeholder = "Write your task here";

// Returns empty schedule data
function emptySchedule() {
    
}






function init() {
    // initializes data from local storage 
    const maybeSchedule = localStorage.getItem(scheduleStorageCell);
    //if local storage returns schedule
    if (maybeSchedule) {
        return JSON.parse(maybeSchedule);
    }
    // if there is nothing in local storage return new empty schedule
    return emptySchedule();
}

function save(){
localStorage.setItem(scheduleStorageCell, JSON.stringify(state));
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

