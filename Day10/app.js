const addBtn = document.getElementById('addBtn');
const gridNotes = document.querySelector('.notes-grid');

const notes = JSON.parse(localStorage.getItem('Notes'));

if (notes) {
	notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
	const note = document.createElement('div');
	note.classList.add('note');

	note.innerHTML = `
        <div class="action">
            <button class="edit"><i class="fas fa-pencil-alt"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
    `;

	gridNotes.append(note);

	const editBtn = note.querySelector('.edit');
	const deleteBtn = note.querySelector('.delete');
	const main = note.querySelector('.main');
	const textArea = note.querySelector('textarea');

	textArea.value = text;
	main.innerHTML = marked(text);
	updateLc();

	editBtn.addEventListener('click', () => {
		main.classList.toggle('hidden');
		textArea.classList.toggle('hidden');
		updateLc();
	});

	deleteBtn.addEventListener('click', () => {
		note.remove();
		updateLc();
	});

	textArea.addEventListener('input', (e) => {
		const { value } = e.target;

		main.innerHTML = marked(value);
		updateLc();
	});
}

function updateLc() {
	const notesText = document.querySelectorAll('textarea');
	const notes = [];
	notesText.forEach((note) => notes.push(note.value));
	localStorage.setItem('Notes', JSON.stringify(notes));
}

const mode = document.getElementById('mode');
mode.addEventListener('click', () => {
	document.body.classList.toggle('LightMode');
	if (mode.innerHTML == 'Dark Mode') {
		mode.innerHTML = 'Light Mode';
	} else {
		mode.innerHTML = 'Dark Mode';
	}
});
