function salvarDiario() {
  const situacao = document.getElementById("situacao").value;
  const emocao = document.getElementById("emocao").value;
  const intensidade = document.getElementById("intensidade").value;

  if (!situacao || !emocao) {
    alert("Preencha todos os campos.");
    return;
  }

  const registro = {
    data: new Date().toLocaleString(),
    situacao,
    emocao,
    intensidade
  };

  let historico = JSON.parse(localStorage.getItem("historico")) || [];
  historico.push(registro);

  localStorage.setItem("historico", JSON.stringify(historico));

  document.getElementById("resultado").innerHTML =
    "Registro salvo com sucesso. Você conseguiu parar e observar o que sente.";
}

function analisarFato() {
  const fato = document.getElementById("fato").value;
  const interpretacao = document.getElementById("interpretacao").value;

  if (!fato || !interpretacao) {
    alert("Preencha os dois campos.");
    return;
  }

  document.getElementById("resultado").innerHTML = `
    <strong>Fato:</strong> ${fato}<br><br>
    <strong>Interpretação:</strong> ${interpretacao}<br><br>
    Nem todo pensamento é uma verdade. Respire e observe os fatos com calma.
  `;
}

function guardarMensagem() {
  const mensagem = document.getElementById("mensagem").value;

  if (!mensagem) {
    alert("Digite uma mensagem antes.");
    return;
  }

  localStorage.setItem("mensagemGuardada", mensagem);

  document.getElementById("resultado").innerHTML = `
    Mensagem guardada. Espere 10 minutos antes de decidir enviar.
    <br><br>
    Você não precisa agir no pico da emoção.
  `;
}

function fraseCrise() {
  const frases = [
    "O silêncio de alguém não define seu valor.",
    "Você não precisa resolver isso agora.",
    "Nem todo pensamento é um fato.",
    "Respire. A ansiedade passa.",
    "Você pode sentir sem agir impulsivamente.",
    "Volte para você antes de tentar entender o outro."
  ];

  const sorteada = frases[Math.floor(Math.random() * frases.length)];

  document.getElementById("resultado").innerHTML = sorteada;
}

function mostrarHistorico() {
  const historico = JSON.parse(localStorage.getItem("historico")) || [];
  const div = document.getElementById("historico");

  if (historico.length === 0) {
    div.innerHTML = "<p>Nenhum registro encontrado.</p>";
    return;
  }

  div.innerHTML = "";

  historico.forEach(item => {
    div.innerHTML += `
      <div class="card">
        <strong>Data:</strong> ${item.data}<br>
        <strong>Situação:</strong> ${item.situacao}<br>
        <strong>Emoção:</strong> ${item.emocao}<br>
        <strong>Intensidade:</strong> ${item.intensidade}/10
      </div>
    `;
  });
}

function limparHistorico() {
  localStorage.removeItem("historico");
  location.reload();
}