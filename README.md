<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AUXÍLIO DE MIRA RHz</title>

<style>
body {
    background: #0a0a0a;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
}

.container {
    margin-top: 50px;
}

h1 {
    color: red;
    text-shadow: 0 0 10px red;
}

.card {
    background: #111;
    border: 1px solid red;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    margin: auto;
    box-shadow: 0 0 15px red;
}

.slider {
    width: 100%;
}

button {
    background: black;
    border: 1px solid red;
    color: white;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: red;
    box-shadow: 0 0 10px red;
}

.status {
    margin-top: 15px;
    font-weight: bold;
}
</style>

</head>
<body>

<div class="container">
    <h1>AUXÍLIO DE MIRA RHz</h1>

    <div class="card">
        <p>Sensibilidade</p>
        <input type="range" min="0" max="100" class="slider">

        <p>FOV</p>
        <input type="range" min="0" max="100" class="slider">

        <p>Precisão</p>
        <input type="range" min="0" max="100" class="slider">

        <button onclick="toggleStatus()">Ativar</button>

        <div class="status" id="status">INATIVO</div>
    </div>
</div>

<script>
function toggleStatus() {
    let status = document.getElementById("status");
    if (status.innerText === "INATIVO") {
        status.innerText = "ATIVO";
        status.style.color = "lime";
    } else {
        status.innerText = "INATIVO";
        status.style.color = "red";
    }
}
</script>

</body>
</html>
