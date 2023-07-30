window.addEventListener('load', () => {
	const form = document.querySelector("#task-form");
	const input = document.querySelector("#task-input");
	const list_component = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_component = document.createElement('div');
		task_component.classList.add('task');

		const task_ctt_component = document.createElement('div');
		task_ctt_component.classList.add('content');

		task_component.appendChild(task_ctt_component);

		const task_input_component = document.createElement('input');
		task_input_component.classList.add('text');
		task_input_component.type = 'text';
		task_input_component.value = task;
		task_input_component.setAttribute('readonly', 'readonly');

		task_ctt_component.appendChild(task_input_component);

		const task_ats_component = document.createElement('div');
		task_ats_component.classList.add('actions');
		
		const task_edit_component = document.createElement('button');
		task_edit_component.classList.add('edit');
		task_edit_component.innerText = 'Edit';

		const task_dlt_component = document.createElement('button');
		task_dlt_component.classList.add('delete');
		task_dlt_component.innerText = 'Delete';

		task_ats_component.appendChild(task_edit_component);
		task_ats_component.appendChild(task_dlt_component);

		task_component.appendChild(task_ats_component);

		list_component.appendChild(task_component);

		input.value = '';

		task_edit_component.addEventListener('click', (e) => {
			if (task_edit_component.innerText.toLowerCase() == "edit") {
				task_edit_component.innerText = "Save";
				task_input_component.removeAttribute("readonly");
				task_input_component.focus();
			} else {
				task_edit_component.innerText = "Edit";
				task_input_component.setAttribute("readonly", "readonly");
			}
		});

		task_dlt_component.addEventListener('click', (e) => {
			list_component.removeChild(task_component);
		});
	});
});
