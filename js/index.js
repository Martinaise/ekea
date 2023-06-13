// création du burger en js
function ouvrirMenu() {
    document.getElementById("mynav").style.display = "block"
}

function fermerMenu() {
    document.getElementById("mynav").style.display = "none"
}
//  création du text défilante en jquery 
$(document).ready(function() {
    function scrollText() {
      let containerWidth = $("#text-container").width();
      let textWidth = $("#scrolling-text").width();
      let endPos = containerWidth - textWidth;
  
      $("#scrolling-text").animate({ marginLeft: endPos }, 5000, "linear", function() {
        // Réinitialiser la position du texte à droite après l'animation
        $(this).css("marginLeft", "0");
        scrollText();
      });
    }
  
    scrollText();
  });
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  // si je veux faire defiler a gauche le Text
/*   $(document).ready(function() {
    function scrollText() {
      var containerWidth = $("#text-container").width();
      var textWidth = $("#scrolling-text").width();
      var startPos = containerWidth;
  
      $("#scrolling-text").css("marginLeft", startPos).animate({ marginLeft: -textWidth }, 15000, "linear", function() {
        // Réinitialiser la position du texte à droite après l'animation
        $(this).css("marginLeft", containerWidth);
        scrollText();
      });
    }
  
    scrollText();
  }); */
  

  // Responsive
const menuburger = document.querySelector("")
const navlinks = document.querySelector("")
menuburger.addEventListener('click', () => {
    navlinks.classList.toggle("mobile-menu")
})

