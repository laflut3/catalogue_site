document.addEventListener('DOMContentLoaded', (event) => {
    const articleForm = document.getElementById('article-form');
    const articleContainer = document.getElementById('article-container');

    // Assume this variable determines if the user is an admin
    const isAdmin = true;

    // Load articles from localStorage
    const articles = JSON.parse(localStorage.getItem('articles')) || [];

    // Function to display articles
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

    // Function to delete an article
    const deleteArticle = (index) => {
        articles.splice(index, 1);
        localStorage.setItem('articles', JSON.stringify(articles));
        displayArticles();
    };

    // Display articles on page load
    displayArticles();

    // Add event listener to the form
    articleForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const date = new Date().toISOString();

        // Create new article object
        const newArticle = {
            title: title,
            content: content,
            date: date
        };

        // Add new article to articles array
        articles.push(newArticle);

        // Save articles array to localStorage
        localStorage.setItem('articles', JSON.stringify(articles));

        // Display the updated articles
        displayArticles();

        // Clear form
        articleForm.reset();
    });
});
