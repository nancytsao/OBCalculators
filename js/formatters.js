function formatDate(date) {
	return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
}

function formatDateLong(date) {
	return date.toDateString();
}

function formatDateRange(startDate, endDate) {
	return formatDate(startDate) + " - " + formatDate(endDate);
}

function formatAge(age) {
	return age.week + " weeks " + age.day + " days";
}

function formatAgeShort(age) {
	return age.week + "+" + age.day;
}

function formatTimeframeToAge(timeframe) {
	var output = "(" + formatAgeShort(timeframe.startAge);
	if (timeframe.endAge != null) {
		output = output + ", " + formatAgeShort(timeframe.endAge);
	}
	return output + ")";
}

function formatTimeframeToDate(timeframe, edd) {
	var output = "(";
	var startDate = timeframe.startAge.getCurrentDate(edd);

	if (timeframe.endAge != null) {
		var endDate = timeframe.endAge.getCurrentDate(edd);
		output = output + formatDateLong(startDate) + ", " + formatDateLong(endDate);
	} else {
		output = output + formatDateLong(startDate);
	}
	return output + ")"
}

function formatTest(test, edd) {
	var output = test.name + ":\n"
					+ formatTimeframeToAge(test.timeframe) + " "
					+ formatTimeframeToDate(test.timeframe, edd);
	if (test.bestTimeframe != null) {
		output = output + "\n"
					+ formatTimeframeToAge(test.bestTimeframe) + " "
					+ formatTimeframeToDate(test.bestTimeframe, edd);
	}
	return output;
}

function formatAppointment(appointmentWeek, edd) {
	var gestationalAge = GestationalAge(appointmentWeek, 0);
	var appointmentDate = gestationalAge.getCurrentDate(edd);

	var output = appointmentWeek + " weeks - "
					+ formatDateLong(appointmentDate);
	return output;
}
