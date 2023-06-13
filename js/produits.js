
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
