/* adding new habit to table */
function newHabit(tableID){
    var name = document.getElementById("habitName").value;
    if(name != ''){
        var freq = 3;
        var table = document.getElementById(tableID);
        var row = table.insertRow(-1);
        // create cells and add event listeners
        var cell1 = row.insertCell(0);
        cell1.innerHTML = name;
        var cell2 = row.insertCell(1);
        cell2.addEventListener("click", toggleComplete, true);
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
        // reset text box
        document.getElementById("habitName").value = '';
    }
}

/* when a cell is clicked */
function toggleComplete(){
    var col = window.event.target.cellIndex;
    var row = window.event.target.parentNode.rowIndex;
    cell = window.event.target;
    // if cell is empty, add heart
    if (cell.innerHTML == ""){
        cell.innerHTML = '<img src="heart3.png" width="40" height="40" style="pointer-events:none"/>';
    } else { // if cell is not empty, remove heart
        cell.innerHTML = "";
    }
}