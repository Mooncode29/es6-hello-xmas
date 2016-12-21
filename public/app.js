'use strict';

var tab = [];
var rechercherInput = document.getElementById('trouverNom');

document.getElementById('btn').addEventListener('click', function () {
  var nom = document.getElementById('nom').value;
  document.getElementById('afficheNom').innerHTML = nom;
  var bonjour = 'Bonjour ' + nom;
  if (nom === "") {
    document.getElementById('afficheNom').innerHTML = "Père Noel!";
  } else {
    var ecriture = nom;
    tab.push(nom);
    var firstLetter = ecriture.charAt(0).toUpperCase();
    var majNom = firstLetter + nom.substr(1).toLowerCase();
    document.body.appendChild(document.createElement('li')).innerHTML = majNom;
    document.getElementById('afficheNom').innerHTML = majNom;
  }
});

var filter = function filter(array, value) {
  var filteredArray = [];
  var inputValue = rechercherInput.value;
  var afficheResult = document.getElementById('afficheResultat');
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    var indexOfElement = element.indexOf(value.toLowerCase());
    if (indexOfElement === 0) {
      filteredArray.push(element);
      afficheResult.innerHTML = filteredArray;
    }
  }
  return filteredArray;
};

document.getElementById('recherche').addEventListener('click', function () {

  var finalArray = filter(tab, rechercherInput.value);

  // console.log(finalArray);
});
