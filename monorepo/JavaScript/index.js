document.addEventListener('DOMContentLoaded', function () {
	const shuffleButtn = document.getElementById('shuffleButtn');
	const changeButtn = document.getElementById('changeButtn');
	const showButtn = document.getElementById('showButtn');
	const checkboxForm = document.getElementById('checkboxForm');
	const output = document.getElementById('output');

	shuffleButtn.addEventListener('click', function (e) {
		e.preventDefault();
		const checkboxes = Array.from(checkboxForm.querySelectorAll('input[type="checkbox"]'));
		checkboxes.sort(() => Math.random() - 0.5);
		checkboxes.forEach((checkbox) => {
			checkboxForm.appendChild(checkbox.parentNode);
		});
	});

	changeButtn.addEventListener('click', function (e) {
		e.preventDefault();
		const checkboxes = checkboxForm.querySelectorAll('input[type="checkbox"]');
		// console.log(checkboxes);
		checkboxes.forEach((checkbox) => {
			const label = checkbox.parentNode;
			label.textContent = 'Pabau new Value';
			label.prepend(checkbox);
		});
	});

	showButtn.addEventListener('click', function (e) {
		e.preventDefault();
		const checkboxes = checkboxForm.querySelectorAll('input[type="checkbox"]');
		const selectedCheckboxes = Array.from(checkboxes).filter((checkbox) => checkbox.checked);
		if (selectedCheckboxes.length <= 0) {
			output.textContent = 'Please select one or more options ';
		} else {
			output.textContent = 'Selected Checkboxes: ';
		}
		selectedCheckboxes.forEach((checkbox) => {
			output.textContent += checkbox.parentNode.textContent.trim() + ', ';
		});
		output.textContent = output.textContent.slice(0, -2);
	});
});
