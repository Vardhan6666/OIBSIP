window.addEventListener('load', () => {
	const form = document.querySelector("#TF");
	const input = document.querySelector("#Inp");
	const list_component = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const event = input.value;

		const event_component = document.createElement('div');
		task_element.classList.add('task');

		const event_content_component = document.createElement('div');
		event_content_component.classList.add('content');

		event_component.appendChild(task_content_component);

		const event_input_component = document.createElement('input');
		event_input_component.classList.add('text');
		event_input_component.type = 'text';
		event_input_component.value = event;
		event_input_component.setAttribute('readonly', 'readonly');

		event_content_component.appendChild(task_input_component);

		const event_actions_component = document.createElement('div');
		event_actions_component.classList.add('actions');
		
		const event_edit_component = document.createElement('button');
		event_edit_component.classList.add('edit');
		event_edit_component.innerText = 'Edit';

		const event_delete_component = document.createElement('button');
		event_delete_component.classList.add('delete');
		event_delete_component.innerText = 'Delete';

		event_actions_component.appendChild(event_edit_component);
		event_actions_component.appendChild(event_delete_component);

		event_component.appendChild(event_actions_component);

		list_component.appendChild(event_component);

		input.value = '';

		event_edit_component.addEventListener('click', (e) => {
			if (event_edit_component.innerText.toLowerCase() == "edit") {
				event_edit_component.innerText = "Save";
				event_input_component.removeAttribute("readonly");
				event_input_component.focus();
			} else {
				event_edit_component.innerText = "Edit";
				event_input_component.setAttribute("readonly", "readonly");
			}
		});

		event_delete_component.addEventListener('click', (e) => {
			list_component.removeChild(event_component);
		});
	});
});
