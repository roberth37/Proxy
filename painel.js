// Verificar se o usuário está autenticado
window.addEventListener('load', function() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    
    if (!usuarioLogado) {
        // Redirecionar para login se não estiver autenticado
        window.location.href = 'index.html';
        return;
    }
    
    // Mostrar o nome do usuário
    document.getElementById('usuarioNome').textContent = usuarioLogado.toUpperCase();
});

// Função para trocar de abas
function showTab(tabName) {
    // Ocultar todas as abas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remover classe active de todos os itens do menu
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Mostrar a aba selecionada
    document.getElementById(tabName).classList.add('active');
    
    // Adicionar classe active ao item do menu clicado
    event.target.classList.add('active');
}

// Função para fazer logout
function logout() {
    // Confirmar logout
    if (confirm('Tem certeza que deseja sair?')) {
        // Remover dados do localStorage
        localStorage.removeItem('usuarioLogado');
        localStorage.removeItem('loginTime');
        
        // Redirecionar para login
        window.location.href = 'index.html';
    }
}

// Função para adicionar novo usuário
function addUsuario() {
    const nome = prompt('Digite o nome do novo usuário:');
    if (nome) {
        const tabela = document.getElementById('usuariosTable');
        const novaLinha = document.createElement('tr');
        const id = tabela.children.length + 1;
        
        novaLinha.innerHTML = `
            <td>${id}</td>
            <td>${nome}</td>
            <td>novo@email.com</td>
            <td><span class="status-ativo">Ativo</span></td>
            <td>
                <button class="btn-sm btn-edit">Editar</button>
                <button class="btn-sm btn-delete" onclick="this.parentElement.parentElement.remove()">Deletar</button>
            </td>
        `;
        
        tabela.appendChild(novaLinha);
        alert(`✅ Usuário "${nome}" adicionado com sucesso!`);
    }
}

// Adicionar eventos aos botões de edição e deleção
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-delete')) {
        if (confirm('Deseja deletar este usuário?')) {
            e.target.parentElement.parentElement.remove();
            alert('✅ Usuário deletado com sucesso!');
        }
    }
    
    if (e.target.classList.contains('btn-edit')) {
        alert('⚠️ Função de edição ainda não implementada');
    }
});

// Inicializar a primeira aba como ativa
window.addEventListener('load', function() {
    document.querySelector('.menu-item').classList.add('active');
});