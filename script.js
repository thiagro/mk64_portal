// Obtém o link e o contêiner de informações
var open2022 = document.getElementById('open2022');
var open2023 = document.getElementById('open2023');
var open2024 = document.getElementById('open2024');
var infoContainer = document.getElementById('infoContainer');

// Define o conteúdo das informações
var info2022 = '<h3>2022:</h3>' +
                  '<p>First Place: <strong>Thiago</strong></p>' +
                  '<p>Second Place: <strong>Lívia</strong></p>' +
                  '<p>Third Place: <strong>Cristiano</strong></p>';

var info2023 = '<h3>2023:</h3>'+
                '<p>First Place: <strong>Cristiano</strong></p>' +
                  '<p>Second Place: <strong>Thiago</strong></p>' +
                  '<p>Third Place: <strong>Lívia</strong></p>';
var info2024 = '<h3>2024:</h3>'+
                '<p>First Place: <strong>Thiago</strong></p>' +
                  '<p>Second Place: <strong>Lívia</strong></p>' +
                  '<p>Third Place: <strong>Cristiano</strong></p>';


// Início do MAIN

//Função do link 2022
open2022.addEventListener('click', function(event) {
    // Impede o comportamento padrão do link (não redireciona)
    event.preventDefault();
    // Define o conteúdo do contêiner de informações
    infoContainer.innerHTML = info2022;
});

//Função do link 2023
open2023.addEventListener('click', function(event) {
    event.preventDefault();
    infoContainer.innerHTML = info2023;});

//Função do link 2024
open2024.addEventListener('click', function(event) {
    event.preventDefault();
    infoContainer.innerHTML = info2024; });

