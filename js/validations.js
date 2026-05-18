function isValidDate(year, month, day)
{
	return isExactFourDigits(year)
			&& isOneOrTwoDigits(month)
			&& isOneOrTwoDigits(day)
			&& isActualDay(year, month, day);
}

function isActualDay(year, month, day){
	var dateObj = new Date(year, month - 1, day);

	return (dateObj.getFullYear() == year)
			&& (dateObj.getMonth() + 1 == month)
			&& (dateObj.getDate() == day);
}

function isExactFourDigits(input) {
	var format = /^\d{4}$/
	return format.test(input);
}

function isOneOrTwoDigits(input) {
	var format = /^\d{1,2}$/
	return format.test(input);
}

function isOneDigit(input) {
	var format = /^\d{1}$/
	return format.test(input);
}

function isAllDigits(input) {
	var format = /^\d+$/
	return format.test(input);
}

function validateDate(year, month, day, errorSpanId, document) {
	if (!isValidDate(year, month, day)) {
		replaceSpanText(errorSpanId, "*Invalid Date", document);
		return false;
	}

	clearSpanText(errorSpanId, document);
	return true;
}

function validateCycleLength(cycleLength, errorSpanId, document) {

	if (!isAllDigits(cycleLength)) {
		replaceSpanText(errorSpanId, "*Invalid input", document);
		return false;
	} else if (parseInt(cycleLength) < 14) {
		replaceSpanText(errorSpanId, "*Cycle needs to be > 14 ", document);
		return false;
	}

	clearSpanText(errorSpanId, document);
	return true;
}

function validateRange(range, errorSpanId, document) {

	if (!isAllDigits(range)) {
		replaceSpanText(errorSpanId, "*Invalid range", document);
		return false;
	}

	clearSpanText(errorSpanId, document);
	return true;
}

function validateGestationalAge(week, day, errorSpanId, document) {
	if (!isOneOrTwoDigits(week)) {
		replaceSpanText(errorSpanId, "*Invalid", document);
		return false;
	} else if (!isOneDigit(day)) {
		replaceSpanText(errorSpanId, "*Invalid", document);
		return false;
	} else if (day > 6) {
		replaceSpanText(errorSpanId, "*Day should be < 7", document);
		return false;
	}

	clearSpanText(errorSpanId, document);
	return true;
}
