function getToday() {
	var newDate = new Date();
	return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0, 0);
}

function createDate(year, month, date) {
	return new Date(year, month, date, 0, 0, 0, 0);
}