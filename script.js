let timeSpan = null;

function updateTime () {
	timeSpan.innerHTML = (new Date()).toString();
}

window.onload = function setup () {
	timeSpan = document.getElementById("time-display");
	timeSpan.addEventListener("click", updateTime);
};
