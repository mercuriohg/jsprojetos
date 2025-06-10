
function clicar(texto){
   const input = document.getElementById("texto");
   input.value += texto; 
}
function mostrarResultado(){
   const input = document.getElementById("texto");
   try {
      const resultado = eval(input.value); 
      input.value = resultado;
   } catch (error) {
      input.value = "Erro";
   }
}
function Delete(){
   const input = document.getElementById("texto")
   input.value = '' 
}