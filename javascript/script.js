



fetch('http://localhost:3000/students')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const cards = document.querySelector('.cards');
        const card = data.map(student => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <div class="card-header">
                    <img src="${student.avatar}" alt="">
                    <h4> ${student.name}</h4>
                </div>
                <div class="card-body">
                    <p><i class="fab fa-github"></i> ${student.login} </p>
                    <a href="${student.urlRepository}" class="button button-card" onclick="" target="_blanck"><i class="fas fa-folder-open"></i></i></a>
                </div>
        `;
            return card;

        });
        cards.append(...card);
    })
    .catch(error => console.error('Erro ao carregar alunos:', error));

