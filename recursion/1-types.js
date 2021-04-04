// Прямая (direct)
function a(x) {
	return a(x);
}

// Непрямая (indirect)
function b(x) {
	return c(x);
}

function c(x) {
	return b(x);
}
