function replaceSpanText(spanId, text, document) {
	var span = document.getElementById(spanId);
	removeChildNodes(span);
	span.appendChild(document.createTextNode(text));
}

function removeChildNodes(node) {
	for (i = node.childNodes.length - 1; i >= 0; i--) {
		node.removeChild(node.childNodes[i]);
	}
}

function clearSpanText(spanId, document) {
	replaceSpanText(spanId, "", document);
}

function resetSpans(document) {
	var spans = document.getElementsByTagName('span');
	for (var i = 0; i < spans.length; i++) {
		clearSpanText(spans[i].id, document);
	}
}

function setHighlight(fieldId, document) {
	var field = document.getElementById(fieldId);
	field.style.border = "2px solid blue";
}

function removeHighlight(fieldId, document) {
	var field = document.getElementById(fieldId);
	field.style.border = "none";
}

