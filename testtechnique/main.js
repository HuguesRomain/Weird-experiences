var first =  document.getElementById("first"); 
var cercle = document.getElementById('cercle');

first.addEventListener('click',function ()
    {
      cercle.classList.toggle("border-red") 
      console.log(cercle)
}); 