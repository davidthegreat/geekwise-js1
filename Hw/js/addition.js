// Addition 
var form = document.querySelector('form');
var num1 = parseInt(document.getElementById('number1').value);
var num2 = parseInt(document.getElementById('number2').value);
var answer = form.addEventListener('submit', function(){
   answer.value = num1 + num2;
})

console.log(answer);

