
/*// script.js
const API_URL = "http://colormind.io/api/";

//PARA SIMPLIFICAR USAR SÒ HTML SEM API
// Função para buscar uma paleta aleatória da API--ERRO
async function fetchPalette() {
  try {
    // Envia o modelo padrão como corpo da requisição
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify('{ "model" : "default" }'), // Parâmetro necessário
    });

    if (!response.ok) {
      throw new Error("Failed to fetch palette");
    }

    // Obtém a resposta JSON da API
    const data = await response.json();
    return data.result; // Retorna o array de cores
  } catch (error) {
    console.error(error);
    alert("Error fetching palette. Try again later.");
    return [];
  }
}

// Função para exibir a paleta na tela
function displayPalette(colors) {
  const paletteContainer = document.getElementById("palette");
  paletteContainer.innerHTML = ""; // Limpa paletas anteriores

  colors.forEach(color => {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = `rgb(${color.join(",")})`; // Define a cor de fundo
    paletteContainer.appendChild(colorBox);
  });
}

// Clica no botão -> Gera paleta nova
document.getElementById("generate").addEventListener("click", async () => {
  const colors = await fetchPalette();
  if (colors.length) {
    displayPalette(colors);
  }
});

// Gera uma paleta inicial ao carregar a página
window.addEventListener("load", async () => {
  const colors = await fetchPalette();
  if (colors.length) {
    displayPalette(colors);
  }
});*/
