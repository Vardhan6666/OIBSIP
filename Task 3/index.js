window.addEventListener('load', () => {
	const form = document.querySelector("#TF");
	const input = document.querySelector("#Inp");
	const list_ele = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const t = input.value;

		const t_ele = document.createElement('div');
		t_ele.classList.add('task');

		const t_ctt_ele = document.createElement('div');
		t_ctt_ele.classList.add('content');

		t_ele.appendChild(t_ctt_ele);

		const t_inp_ele = document.createElement('input');
		t_inp_ele.classList.add('text');
		t_inp_ele.type = 'text';
		t_inp_ele.value = t;
		t_inp_ele.setAttribute('readonly', 'readonly');

		t_ctt_ele.appendChild(t_input_ele);

		const t_actions_ele = document.createElement('div');
		t_actions_ele.classList.add('actions');
		
		const t_edit_ele = document.createElement('button');
		t_edit_ele.classList.add('edit');
		t_edit_ele.innerText = 'Edit';

		const t_del_ele = document.createElement('button');
		t_del_ele.classList.add('delete');
		t_del_ele.innerText = 'Delete';

		t_actions_ele.appendChild(t_edit_ele);
		t_actions_ele.appendChild(t_del_ele);

		t_ele.appendChild(t_actions_ele);

		list_ele.appendChild(t_ele);

		input.value = '';

		t_edit_ele.addEventListener('click', (e) => {
			if (t_edit_ele.innerText.toLowerCase() == "edit") {
				t_edit_ele.innerText = "Save";
				t_inp_ele.removeAttribute("readonly");
				t_inp_ele.focus();
			} else {
				t_edit_ele.innerText = "Edit";
				t_inp_ele.setAttribute("readonly", "readonly");
			}
		});

		t_del_ele.addEventListener('click', (e) => {
			list_ele.removeChild(t_ele);
		});
	});
});
