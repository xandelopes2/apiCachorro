let cachorros = [
    { imagem: 'https://placedog.net/640/480?random=1', dono: 'Flavin Pneu', nome: 'Rex', email: 'flavin_do_pneu@gmail.com', telefone: '(11) 98765-4321' },
    { imagem: 'https://placedog.net/640/480?random=2', dono: 'Shaolin Hunter', nome: 'Bolt', email: 'shaolin_matador_de_porco@gmail.com', telefone: '(11) 98876-5432' },
    { imagem: 'https://placedog.net/640/480?random=3', dono: 'Jhon Kennedy', nome: 'Luna', email: 'jhonkennedy@gmail.com', telefone: '(11) 98765-1234' },
    { imagem: 'https://placedog.net/640/480?random=4', dono: 'Carlinhos Paiva', nome: 'Max', email: 'carlinhos@gmail.com', telefone: '(11) 96325-7890' },
    { imagem: 'https://placedog.net/640/480?random=5', dono: 'Thiago Alcantara', nome: 'Fido', email: 'thiaguinho@gmail.com', telefone: '(11) 97456-3210' }
];

function preencherTabela() {
    const tabela = document.getElementById('TabelaDosDogs').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';

    cachorros.forEach((cachorro, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${cachorro.imagem}" alt="Imagem do cachorro" width="50" height="50"></td>
            <td>${cachorro.dono}</td>
            <td>${cachorro.nome}</td>
            <td>${cachorro.email}</td>
            <td>${cachorro.telefone}</td>
            <td class="actions">
                <button onclick="editarCachorro(${index})">Editar</button>
                <button onclick="excluirCachorro(${index})">Excluir</button>
            </td>
        `;
        tabela.appendChild(tr);
    });
}

function adicionarCachorro() {
    const imagem = document.getElementById('Imagem').value;
    const dono = document.getElementById('Dono').value;
    const nome = document.getElementById('Nome').value;
    const email = document.getElementById('Email').value;
    const telefone = document.getElementById('Telefone').value;

    if (!imagem || !dono || !nome || !email || !telefone) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novoCachorro = { imagem, dono, nome, email, telefone };
    cachorros.push(novoCachorro);

    document.getElementById('Imagem').value = '';
    document.getElementById('Dono').value = '';
    document.getElementById('Nome').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Telefone').value = '';
    ocultarFormulario();

    preencherTabela();
}

function editarCachorro(index) {
    const cachorro = cachorros[index];
    document.getElementById('editNome').value = cachorro.nome;
    document.getElementById('editDono').value = cachorro.dono;
    document.getElementById('editEmail').value = cachorro.email;
    document.getElementById('editTelefone').value = cachorro.telefone;
    document.getElementById('editModal').style.display = 'flex';
}

function salvarEdicao() {
    const index = cachorros.findIndex(c => c.nome === document.getElementById('editNome').value);
    cachorros[index].nome = document.getElementById('editNome').value;
    cachorros[index].dono = document.getElementById('editDono').value;
    cachorros[index].email = document.getElementById('editEmail').value;
    cachorros[index].telefone = document.getElementById('editTelefone').value;
    fecharModal();
    preencherTabela();
}

function excluirCachorro(index) {
    cachorros.splice(index, 1);
    preencherTabela();
}

function exibirFormulario() {
    document.getElementById('formulario').style.display = 'block';
}

function ocultarFormulario() {
    document.getElementById('formulario').style.display = 'none';
}

function fecharModal() {
    document.getElementById('')

}
