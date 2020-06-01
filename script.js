const scheduleStorageCell = "AppointmentData";
const hoursInSchedule = [9,10,11,12,13,14,15,16,17];
const placeholder = "Write your task here";

//Variable keeping state
let state = {};

// Returns empty schedule cells for all hours in the schedule
function emptySchedule() {
    return hoursInSchedule.map(makeEmptyCell);
}

//Takes hour and makes empty schedule cell for that hourblock
function makeEmptyCell(hour){
    return {
        start: hour,
        content: "",
        isModified: false
    }
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


function descriptionId(hour) {
    return `description${hour}`;
}


function buttonId(hour){
    return `saveButton${hour}`;
}



function save(){
localStorage.setItem(scheduleStorageCell, JSON.stringify(state));
}


// Takes hour as a number in 24 hour format
function label(hour) {
    const formattedHour = moment().hour(hour).format("h a");
    return `<label class="col-1 hour" for="${descriptionId(hour)}">${formattedHour}</label>`;
}


function inputStyle(hour) {
    const currentHours = moment().hours();
    if (currentHours < hour) {
        return "future";
    }
    if (currentHours === hour) {
        return "present";
    }
    return "past";
}


function input(cell) {
    return `<input class="col-10 description ${inputStyle(cell.start)}" id="${descriptionId(cell.start)}" placeholder="${placeholder}" value="${cell.content}">`;
}


function button(hour) {
    return `<button class="saveButton col-1" id="${buttonId(hour)}">Save</button>`
}



function cellToHtml(cell) {
    return `<div class="row time-block">
                ${label(cell.start)}
                ${input(cell)}
                ${button(cell.start)}
            </div>`
}



function draw(state) {
    
}








function updateClock() {
    $('#current-time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}



// color past cells grey
function updateSchedule() {
}



function redraw () {
    updateClock();
    const now = moment();
    if (now.minute() === "00") {
        updateSchedule();
    }
}

// Show the time when the page loads
updateClock();

setInterval(updateClock, 1000);

