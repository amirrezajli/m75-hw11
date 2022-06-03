var users = [];
    users.push(["Name","Age","Country"]);
    users.push(["james",9,"united state"]);
    users.push(["peter",31,"united kingdom"]);
    users.push(["rony",58,"canada"]);
    users.push(["marks",20,"spain"]);


    var table = document.createElement("TABLE");
    table.border ="1";

    var col = users[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < col; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = users[0][i];
        row.appendChild(headerCell);
    }


    for (var i = 1; i < users.length; i++) {
        row = table.insertRow(-1);
        if(users[i][1] < 10) row.style.backgroundColor='yellow'
        if(users[i][1] >= 10 && users[i][1]<40) row.style.backgroundColor='green'
        if(users[i][1] >= 40 && users[i][1]<80) row.style.backgroundColor='red'

        for (var j = 0; j < col; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = users[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);