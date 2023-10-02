document.addEventListener("DOMContentLoaded", function() {
  var checkboxesComunicacoes = document.getElementsByName("comunicacoes[]");
  var marcarTodosComunicacoes = document.getElementById("todos_os_meios");

  marcarTodosComunicacoes.addEventListener("change", function() {
    checkboxesComunicacoes.forEach(function(checkbox) {
      checkbox.checked = marcarTodosComunicacoes.checked;
    });
  });

  checkboxesComunicacoes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
      var todosMarcados = true;
      var peloMenosUmMarcado = false;

      checkboxesComunicacoes.forEach(function(cb) {
        if (!cb.checked) {
          todosMarcados = false;
        } else {
          peloMenosUmMarcado = true;
        }
      });

      if (todosMarcados) {
        marcarTodosComunicacoes.checked = true;
        marcarTodosComunicacoes.indeterminate = false;
      } else if (peloMenosUmMarcado) {
        marcarTodosComunicacoes.indeterminate = true;
      } else {
        marcarTodosComunicacoes.checked = false;
        marcarTodosComunicacoes.indeterminate = false;
      }
    });
  });
});

function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var preferencias = document.querySelectorAll('input[name="preferencia"]:checked').length;
  var mensagem = document.getElementById("mensagem").value;

  // Validar Nome
  if (nome.trim() === "" || nome.split(" ").length < 2) {
    alert("Nome não pode estar em branco e deve possuir pelo menos 2 nomes.");
    return false;
  }

  // Validar E-mail
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("E-mail inválido.");
    return false;
  }

  // Validar Telefone
  telefone = telefone.replace(/[()\- ]/g, "");
  if (telefone.length !== 11) {
    alert("Telefone deve ter 11 caracteres.");
    return false;
  }

  // Validar Preferência
  if (preferencias === 0) {
    alert("Pelo menos uma preferência deve ser marcada.");
    return false;
  }

  // Validar Mensagem
  if (mensagem.length < 5) {
    alert("A mensagem deve conter pelo menos 5 caracteres.");
    return false;
  }
  alert("Mensagem enviada com sucesso!");
  return true;
}