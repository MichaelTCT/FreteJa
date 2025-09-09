// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const addressForm = document.querySelector("#formCadastro");
const cepInput = document.querySelector("#cep");
const enderecoInput = document.querySelector("#endereco");
const cidadeInput = document.querySelector("#cidade");
const estadoInput = document.querySelector("#estado");
const formInputs = document.querySelectorAll("[data-input]");

cepInput.addEventListener("keypress", (e) => {
  const onlyNumbers = /[0-9]|\./;
  const key = String.fromCharCode(e.keyCode);

  console.log(key);

  console.log(onlyNumbers.test(key));

  // allow only numbers
  if (!onlyNumbers.test(key)) {
    e.preventDefault();
    return;
  }
});

cepInput.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;

  if (inputValue.length === 8) {
    getAddress(inputValue);
  }
});

const getAddress = async (cep) => {

  cepInput.blur();

  const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(apiUrl);

  const data = await response.json();

  console.log(data);
  console.log(formInputs);
  console.log(data.erro);

  enderecoInput.value = data.logradouro;
  cidadeInput.value = data.localidade;
  estadoInput.value = data.uf;
};