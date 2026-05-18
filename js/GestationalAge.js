function GestationalAge(week, day)
{
	this.week = week;
	this.day = day;

	this.getAgeInDays = getAgeInDays;
	this.getEDD = getEDD;
	this.getCurrentDate = getCurrentDate;
}

function getAgeInDays() {
	return this.week * 7 + this.day;
}

function getGestationalAge(today, edd) {
	var daysToGo = (edd.getTime() - today.getTime()) / 1000 / 60 / 60 / 24;
	var ageInDays = 40 * 7 - Math.round(daysToGo);

	var week = Math.floor(ageInDays / 7);
	var day = ageInDays % 7;

	return new GestationalAge(week, day)
}

function getEDD(today) {
	return new Date(today.getFullYear(),
			today.getMonth(),
			today.getDate() - this.getAgeInDays() + 40 * 7);
}

function getCurrentDate(edd) {
	return new Date(edd.getFullYear(), edd.getMonth(),
					parseInt(edd.getDate()) - 40 * 7 + this.getAgeInDays());
}