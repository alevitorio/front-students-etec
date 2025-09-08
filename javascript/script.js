
fetch('http://localhost:3000/students')
    .then(response => response.json())
    .then(data => {
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

// Formulário de cadastro de aluno
const formUser = document.getElementById("form-user")
formUser.addEventListener('submit', e =>{
    e.preventDefault()
    const formData = new FormData(formUser);
    const data = Object.fromEntries(formData.entries())
    
    fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            alert("Aluno já está cadastrado ou não existe no GITHUB!")
            throw new Error('Erro ao cadastrar aluno');
        }
        alert('Aluno cadastrado com sucesso!')
        formUser.reset()
        console.log(response.json());
        
        return response.json();

       })
   
    
})
