/* adding new habit to table */
function newHabit(tableID){
    var name = document.getElementById("habitName").value;
    var freq = 3;
    var table = document.getElementById(tableID);
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(6);
    cell1.innerHTML = name;
    document.getElementById("habitName").value = '';
}

function toggleComplete(){
    print();
}