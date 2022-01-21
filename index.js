// Binds an event listener in addingEventListener()
function addingEventListener() {
	const input = document.getElementById('input');
	input.addEventListener('click', function(event) {
		alert('I was clicked!');
	});
}
