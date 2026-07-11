# 🎨 Painel Administrativo com Login e Autenticação

Um painel web completo com sistema de autenticação, desenvolvido em HTML, CSS e JavaScript puro.

## 📋 Funcionalidades

✅ **Sistema de Login** - Autenticação segura com usuário e senha  
✅ **Dashboard** - Visualização de estatísticas e métricas  
✅ **Gerenciamento de Usuários** - Adicionar, editar e deletar usuários  
✅ **Configurações** - Customizar o painel  
✅ **Relatórios** - Visualizar dados e análises  
✅ **Interface Responsiva** - Funciona em desktop, tablet e mobile  
✅ **Dark/Light Theme** - Temas personalizáveis  

## 🔐 Credenciais de Teste

| Usuário | Senha |
|---------|-------|
| admin | admin123 |
| usuario | senha123 |
| teste | teste |

## 🚀 Como Usar

1. **Clone ou baixe os arquivos**
   ```bash
   git clone https://github.com/roberth37/Proxy.git
   cd Proxy
   git checkout painel-dashboard
   ```

2. **Abra o arquivo `index.html` no navegador**
   - Duplo clique em `index.html` ou
   - Use um servidor local (Live Server, Python, Node.js)

3. **Faça login com uma das credenciais acima**

4. **Explore o painel!**

## 📂 Estrutura dos Arquivos

```
├── index.html          # Página de login
├── painel.html         # Página do dashboard
├── login.js            # Lógica de autenticação
├── painel.js           # Lógica do painel
├── style.css           # Estilos da aplicação
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilos e responsividade
- **JavaScript ES6** - Lógica da aplicação
- **LocalStorage** - Armazenamento de dados

## 📱 Responsividade

O painel é totalmente responsivo e funciona perfeitamente em:
- 💻 Desktop
- 📱 Tablets
- 📲 Smartphones

## ⚙️ Personalizações

Você pode facilmente personalizar:

### Adicionar novos usuários (em `login.js`):
```javascript
const USUARIOS_VALIDOS = {
    'admin': 'admin123',
    'seu_usuario': 'sua_senha'
};
```

### Mudar cores (em `style.css`):
```css
:root {
    --primary-color: #007bff;  /* Cor azul principal */
    --danger-color: #dc3545;   /* Cor de perigo */
    /* ... outras cores ... */
}
```

### Adicionar novos menu items (em `painel.html`):
```html
<li><a href="#seu-menu" class="menu-item" onclick="showTab('seu-menu')">🎨 Seu Menu</a></li>
```

## 🔒 Segurança

⚠️ **ATENÇÃO**: Esta é uma versão de demonstração. Para uso em produção:

1. ✅ Use autenticação real (JWT, OAuth, etc.)
2. ✅ Nunca armazene senhas em JavaScript/LocalStorage
3. ✅ Implemente HTTPS
4. ✅ Use um backend seguro (Node.js, Python, etc.)
5. ✅ Adicione validações no servidor

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 👨‍💻 Autor

Desenvolvido com ❤️ usando GitHub Copilot

---

**Gostou? Deixe uma ⭐ no repositório!**