// Credenciais padrão (em produção, use autenticação real!)
const USUARIOS_VALIDOS = {
    'admin': 'admin123',
    'usuario': 'senha123',
    'teste': 'teste'
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Validar credenciais
    if (USUARIOS_VALIDOS[username] && USUARIOS_VALIDOS[username] === password) {
        // Salvar informações no localStorage
        localStorage.setItem('usuarioLogado', username);
        localStorage.setItem('loginTime', new Date().toLocaleString('pt-BR'));
        
        // Redirecionar para o painel
        window.location.href = 'painel.html';
    } else {
        // Mostrar mensagem de erro
        errorMessage.textContent = '❌ Usuário ou senha incorretos!';
        errorMessage.classList.add('show');
        
        // Limpar campos
        document.getElementById('password').value = '';
    }
});

// Dica: Use essas credenciais para testar
console.log('Credenciais de teste:');
console.log('admin / admin123');
console.log('usuario / senha123');
console.log('teste / teste');