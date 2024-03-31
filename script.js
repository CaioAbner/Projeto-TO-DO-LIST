const formulario = document.querySelector('#formTarefas');
const inputTarefas = document.querySelector('#nomeTarefa');
const ulTarefas = document.querySelector('#ulDasTarefas');

function adicionarTarefa(e) {
    e.preventDefault();

    const novaTarefa = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            novaTarefa.style.backgroundColor = '#5eff81';
            novaTarefa.style.textDecoration.li = 'line-through';
        } else {
            novaTarefa.style.backgroundColor = '';
            novaTarefa.style.textDecoration = '';
        }
    })

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = 'Remover';

    botaoRemover.addEventListener('click', () => {
        ulTarefas.removeChild(novaTarefa);
    })

    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(document.createTextNode(inputTarefas.value));
    novaTarefa.appendChild(botaoRemover)
    ulTarefas.appendChild(novaTarefa);
    inputTarefas.value = '';
    inputTarefas.focus();
}

formulario.addEventListener('submit', adicionarTarefa);