/* function vymenObrazek() {

}
let vybraneFoto = document.getElementById("foto")
vybraneFoto.onclick= function ( ) {} */
/* document.querySelector('.foto').addEventListener('click', () => {
  console.log("nasrat")
  const element = document.querySelector('.foto')
  element.classList.toggle("mystyle");
   }); */
/* 
let element = document.getElementsByClassName("foto");
 element.addEventListener=(onclick) => {
console.log("nasrat")
 element.classList.toggle("mystyle");
  } */
/* 
  var element = document.getElementById("foto");
  element.onclick=(e) => {
 
 
     
     element.classList.toggle("mystyle");
  } */

  function toggleImage() {
    var image = document.getElementsByClassName('foto')[0];
    if (image.src.match("meMale")) {
        image.src = "./meA.jpg";
    } else {
        image.src = "./meMale.jpg";
    }
}