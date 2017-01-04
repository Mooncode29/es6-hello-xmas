let tab =[]
const rechercherInput = document.getElementById('trouverNom')

document.getElementById('btn').addEventListener('click', () => {
  let nom = document.getElementById('nom').value
  document.getElementById('afficheNom').innerHTML = nom;
  let bonjour = `Bonjour ${nom}`
  if (nom === ""){    	
  	document.getElementById('afficheNom').innerHTML = "Père Noel!";
  }else{
    let ecriture = nom
    tab.push(nom);
    let firstLetter = ecriture.charAt(0).toUpperCase();
    let majNom = firstLetter + nom.substr(1).toLowerCase();
    document.getElementById('listNom').appendChild(document.createElement('li')).innerHTML = majNom
  	document.getElementById('afficheNom').innerHTML = majNom

  } 
  document.getElementById('nom').value = "";   
});

let filter =  (array, value) => {
  let filteredArray = [];
  let inputValue = rechercherInput.value
  let afficheResult = document.getElementById('afficheResultat');
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    let indexOfElement = element.indexOf(value.toLowerCase());  
    if(indexOfElement=== 0){
      filteredArray.push(element);
      afficheResult.innerHTML = filteredArray;
    }
  }
    return filteredArray;
}

document.getElementById('recherche').addEventListener('click', () => { 
  let finalArray = filter(tab, rechercherInput.value);  
});

