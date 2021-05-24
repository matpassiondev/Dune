

// ============ VIDEO ================


let etatLecteur;

      function lecteurPret(event) {
        // event.target = lecteur
        event.target.setVolume(50);
      }

      function changementLecteur(event) {
        // event.data = état du lecteur
        etatLecteur = event.data;
      }

      let lecteur;

      function onYouTubeIframeAPIReady() {
        lecteur = new YT.Player("clip", {
          height: "390",
          width: "640",
          videoId: "b0WH8wWmqtE",
          playerVars: {
            color: "white",
            enablejsapi: 1,
            modestbranding: 1,
            rel: 0
          },
          events: {
            onReady: lecteurPret,
            onStateChange: changementLecteur
          }
        });
      }

      // Hauteur de la vidéo
      const hauteurVideo = $("#clip").height();
      // Position Y de la vidéo
      const posYVideo = $("#clip").offset().top;
      // Valeur declenchant la modification de l'affichage (choix "esthétique")
      const seuil = posYVideo + 0.75 * hauteurVideo;

      // Gestion du défilement
      $(window).scroll(function () {
        // Récupération de la valeur du défilement vertical
        const scroll = $(window).scrollTop();

        // Classe permettant l'exécution du CSS
        $("#clip").toggleClass(
          "scroll",
          etatLecteur === YT.PlayerState.PLAYING && scroll > seuil
        );
      });

// =================== CAROUSEL ================================

let index = 0;

    //gestion des évènements

$('span').click(function () {
    //recuperation index des span
    let indexB = $('span').index(this);


    //si on utilise la flèche de droite
    if (indexB == 1) {
    //changement d'image : on défile de la première vers la dernière
    $('#carousel>img').eq(index).insertAfter('#carousel>img:nth-of-type(4)').end()
    }

    //si on utilise la flèche de gauche
    if(indexB==0) {
        //changement d'image : on défile de la dernière vers la première
        $('#carousel>img').eq(index+3).insertBefore('#carousel>img:nth-of-type(1)').end()  
    }


});


 /*Nom des personnages*/

 let p = document.querySelectorAll('#personnage>p');
 console.log(p);

 $('span').click(function () {
 let img = document.querySelector('#carousel>img:nth-of-type(1)');
 console.log(img);

  for (let j = 0; j<p.length; j+=1){
    p[j].setAttribute("class", "");
  }

  match(p, img);



});

function match (p, img) {
  for (let i=0; i<p.length; i+=1) {
    let pId = p[i].id
    if ( pId == img.className) {
      p[i].setAttribute("class", "visible");
      return p[i]
    }
  }
}



//============================= Map ==================================

// Création de la carte, vide à ce stade
let carte = L.map('map', {
  center: [47.2608333, 2.4188888888888886], // Centre de la France
  zoom: 5,
  minZoom: 4,
  maxZoom: 19,
});

// Ajout des tuiles (ici OpenStreetMap)
// https://wiki.openstreetmap.org/wiki/Tiles#Servers
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(carte);

// Ajout de l'échelle
L.control.scale().addTo(carte);