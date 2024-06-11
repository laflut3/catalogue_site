document.addEventListener('DOMContentLoaded', (event) => {
    const articleForm = document.getElementById('article-form');
    const articleContainer = document.getElementById('article-container');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const logoutBtn = document.getElementById('logout-btn');

    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const articles = JSON.parse(localStorage.getItem('articles')) || [];

    const isAdmin = currentUser && currentUser.isAdmin;

    const displayArticles = () => {
        articleContainer.innerHTML = '';
        articles.forEach((article, index) => {
            const articleElement = document.createElement('article');
            const date = new Date(article.date).toLocaleDateString('fr-FR');

            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>Publié le ${date}</p>
                <p>${article.content}</p>
                ${isAdmin ? `<button class="delete" data-index="${index}">Supprimer</button>` : ''}
            `;

            articleContainer.appendChild(articleElement);
        });

        if (isAdmin) {
            document.querySelectorAll('button.delete').forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    deleteArticle(index);
                });
            });
        }
    };

    const deleteArticle = (index) => {
        articles.splice(index, 1);
        localStorage.setItem('articles', JSON.stringify(articles));
        displayArticles();
    };

    const updateUI = () => {
        if (currentUser) {
            loginForm.style.display = 'none';
            signupForm.style.display = 'none';
            logoutBtn.style.display = 'block';
            if (currentUser.isAdmin) {
                articleForm.style.display = 'block';
            }
        } else {
            loginForm.style.display = 'block';
            signupForm.style.display = 'block';
            logoutBtn.style.display = 'none';
            articleForm.style.display = 'none';
        }
    };

    articleForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const date = new Date().toISOString();

        const newArticle = {
            title: title,
            content: content,
            date: date
        };

        articles.push(newArticle);

        localStorage.setItem('articles', JSON.stringify(articles));

        displayArticles();

        articleForm.reset();
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateUI();
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect');
        }

        loginForm.reset();
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        const userExists = users.some(u => u.username === newUsername);

        if (userExists) {
            alert('Nom d\'utilisateur déjà pris');
        } else {
            const newUser = {
                username: newUsername,
                password: newPassword,
                isAdmin: false
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Inscription réussie, vous pouvez maintenant vous connecter');
        }

        signupForm.reset();
    });

    logoutBtn.addEventListener('click', function() {
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateUI();
    });

    displayArticles();
    updateUI();
});
