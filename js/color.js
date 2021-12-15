var tableLine = document.getElementById("auto-number");
for (var i = 0; i < tableLine.rows.length; i++) {
	tableLine.rows[i].cells[0].innerHTML = (i + 1);
}
