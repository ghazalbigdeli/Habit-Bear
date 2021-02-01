/* adding new habit to table */
function newHabit(tableID){
    var name = document.getElementById("habitName").value;
    //var freq = document.getElementById("habitFreq").value;
    // reset text box
    document.getElementById("habitName").value = '';
    //document.getElementById("habitFreq").value = '';
    if(name != ''){
        var table = document.getElementById(tableID);
        var row = table.insertRow(-1);
        // create cells and add event listeners
        var cell1 = row.insertCell(0);
        cell1.innerHTML = name;
        var cell2 = row.insertCell(1);
        cell2.addEventListener("click", toggleComplete);
        var cell3 = row.insertCell(2);
        cell3.addEventListener("click", toggleComplete);
        var cell4 = row.insertCell(3);
        cell4.addEventListener("click", toggleComplete);
        var cell5 = row.insertCell(4);
        cell5.addEventListener("click", toggleComplete);
        var cell6 = row.insertCell(5);
        cell6.addEventListener("click", toggleComplete);
        var cell7 = row.insertCell(6);
        cell7.addEventListener("click", toggleComplete);
        var cell8 = row.insertCell(7);
        cell8.addEventListener("click", toggleComplete);
    }
}

/* when a cell is clicked */
function toggleComplete(){
    var col = window.event.target.cellIndex;
    var row = window.event.target.parentNode.rowIndex;
    cell = window.event.target;
    // if cell is empty, add heart
    if (cell.innerHTML == ""){
        cell.innerHTML = '<img src="bear.png" width="48" height="37" style="pointer-events:none"/>';
    } else { // if cell is not empty, remove heart
        cell.innerHTML = "";
    }
}

/* save state of page when closed */
function closePage(){
    var body = document.body.innerHTML;
    localStorage.setItem('previous state', body);
}

/* open previous state of page */
function openPage(){
    // if code hasn't run before, set the current state as the clear state
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        var body = document.body.innerHTML;
        localStorage.setItem('clear state', body);
        localStorage.setItem("hasCodeRunBefore", true);
    // if it has been run before, load a previous state
    } else {
        var previous_state = localStorage.getItem('previous state');
        document.body.innerHTML = previous_state;
        setUp();
    }
}

// re-add event listeners upon onload
function setUp(){
    var table = document.getElementById('myTable');
    for (var r = 0; r < table.rows.length; r++){
        for (var c = 0; c < table.rows[r].cells.length; c++){
            table.rows[r].cells[c].addEventListener("click", toggleComplete);
        }
    }
}

// reset table contents
function reset(){
    var clear_state = localStorage.getItem('clear state');
    document.body.innerHTML = clear_state;
}