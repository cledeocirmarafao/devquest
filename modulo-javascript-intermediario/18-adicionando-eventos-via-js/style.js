let selectDeEstado = document.querySelector("select[name='estado']");

selectDeEstado.addEventListener("change", function () {
  alert("Mudou o Estado");
});

// console.log(selectDeEstado);

// O código acima também pode ser executado assim:

document
  .querySelector("select[name='estado']")
  .addEventListener("change", function (event) {
    // alert("Mudou o Estado");
    console.log(event.target.value);
    
  });
