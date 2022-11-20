
  var nb = 0;
  var jeu = true;

    function Byid(id){
      return document.getElementById(id);
    }

    function valeur(id){
      return Byid(id).value;
    }

    function flam(id, id2, id3){
      var elmtfeu = Byid(id);
      var error1  = Byid("error1");
      nb = valeur(id3);
      
      if (nb<=3 || isNaN(nb)){
        error1.innerHTML = "Entrer un chiffre supérieur à 3";
      } else {
        error1.innerHTML = "";
        elmtfeu.innerHTML = "";
        for (var i = 0; i < nb; i++) {
          insereimg(id);
        }
        ElmtJoueur = Byid("joueur");
        joueur.textContent="Le joueur 1 joue";
        jeu = true;
        insereButton(id2);
        document.getElementById("nb").value="";
      }
    }

    function insereimg(id) {
      var elmt = Byid(id);
      var createtd = document.createElement("td");
      var i = document.createElement("IMG");
      i.setAttribute("src", "img/baton.png");
      i.setAttribute("alt","allumette");
      createtd.appendChild(i);
      elmt.appendChild(createtd);
    }

    function insereButton(idb) {
      var elmt = Byid(idb);
      elmt.innerHTML="<p><button type='button' onclick='enlever(nbAllumEnlev)'>Enlever</button> <input type='text' id='nbAllumEnlev' name='nbAllumEnlev' size='5' value=''/><label> allumette(s)</label><span id='error2'></span></p><p id='reste'></p>"
    }

    function enlever(nb2) {
      var elmtfeu = Byid("trfeu");
      var nbAllumEnlev = parseInt(valeur("nbAllumEnlev"));
            
      if (nbAllumEnlev > 3 || nbAllumEnlev <= 0 || isNaN(nbAllumEnlev)) {
        error2 = Byid("error2");
        error2.textContent = "chiffre entre 0 et 3 et inférieur au nombre batons restantes : " + nb;
      } else if (nbAllumEnlev > nb) {
        error2.textContent = "chiffre inférieur au nombre batons restantes : " + nb;
      } else {
        error2.textContent = "";
        jeu =! jeu;
          if (jeu == true) {
            joueur.textContent = "Le joueur 1 joue";
          } else {
            joueur.textContent = "Le joueur 2 joue";
          }
          for (var i = nbAllumEnlev-1; i >= 0; i--) {
            elmtfeu.removeChild(elmtfeu.childNodes[i]);
          } 
          nb = nb-nbAllumEnlev;
      }

      if (nb === 0) { 
        joueur.textContent = "";
        jeu =! jeu;
        if (jeu == true) {
            joueur.textContent = "Le joueur 1 gagne";
          } else {
            joueur.textContent = "Le joueur 2 gagne";
          }
      }

    }