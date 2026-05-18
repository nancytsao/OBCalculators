function Timeframe(startAge, endAge)
{
	this.startAge = startAge;
	this.endAge = endAge;

	this.toAgeString = timeframeToAgeString;
	this.toDateString = timeframeToDateString;
}

function timeframeToAgeString() {
	return formatTimeframeToAge(this);
}

function timeframeToDateString(edd) {
	return formatTimeframeToDate(edd);
}

