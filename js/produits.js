
function selectionner() {
  var selectElement = document.getElementById("choisir");
  var selectedValue = selectElement.value;
  
  var elements = document.getElementsByClassName("affichetous");
  
  // Afficher tous les éléments par défaut
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
  
  // Masquer les éléments correspondant à la valeur sélectionnée
  if (selectedValue !== "Tous") {
    var selectedElements = document.getElementsByClassName(selectedValue);
    
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    
    for (var i = 0; i < selectedElements.length; i++) {
      selectedElements[i].style.display = "block";
    }
  }
}

// Appeler la fonction selectionner une fois au chargement de la page pour
//  afficher tous les éléments par défaut
window.onload = function() {
  selectionner();
};

// création de zoom avec modal js
var modal1 = document.getElementById("confort1Modal");
var modal2 = document.getElementById("confort2Modal");
var modal3 = document.getElementById("surface1Modal");
var modal4 = document.getElementById("surface2Modal");
var modal5 = document.getElementById("decoration1Modal");
var modal6 = document.getElementById("decoration2Modal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var modalImg6 = document.getElementById("img06");


img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal1.style.display = "none";
}
// incrementation button
var res = document.getElementById('result');
result = parseInt(res.value,10);

var plus = document.getElementById('plus');
var moins = document.getElementById('moins');

    // prendre en compte la modification du nombre au clavier
    res.addEventListener('blur', function() {
       result = document.getElementById('result');
			 result = parseInt(result.value,10);
    });
    
    // boutton +
    plus.addEventListener('click', function() {
      if(result >= 0 && result < 100){
       result++;
       document.getElementById('result').value= result;
       }
    });
    
     // boutton -
      moins.addEventListener('click', function() {
      if(result > 0 && result <= 99){
       result--;
       document.getElementById('result').value= result;
       }
    });
    
    