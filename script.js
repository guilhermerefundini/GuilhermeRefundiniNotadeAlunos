const form = document.getElementById('formAluno');
const tabela = document.querySelector('#tabelaAlunos tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const disciplina = document.getElementById('disciplina').value;
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);

  const media = ((nota1 + nota2) / 2).toFixed(1);
  const status = media >= 7 ? 'Aprovado' : 'Reprovado';

  const novaLinha = document.createElement('tr');
  novaLinha.className = media >= 7 ? 'aprovado' : 'reprovado';

  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${disciplina}</td>
    <td>${nota1.toFixed(1)}</td>
    <td>${nota2.toFixed(1)}</td>
    <td>${media}</td>
    <td>${status}</td>
  `;

  tabela.appendChild(novaLinha);
  form.reset();
});