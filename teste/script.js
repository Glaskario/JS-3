const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  // Aqui você pode adicionar sua lógica de validação de login
  
  console.log(`Usuário: ${username}\nSenha: ${password}`);
});
