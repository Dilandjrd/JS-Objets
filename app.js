// Exercice 1

// Etape 1 : Créer un objet "voiture" avec les propriétés "marque", "modèle" et "année"
function Voiture(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }
  // Etape 2 : Ajouter une méthode "conduire" à l'objet "voiture"
  Voiture.conduire = function() {
    console.log(`La voiture de marque ${this.marque} modèle ${this.modele} de l'année ${this.annee} roule sur la route.`);
  }
  
  // Etape 3 : Créer une instance de l'objet "voiture" en utilisant les propriétés "Toyota", "Camry" et "2020"
  let maVoiture = new Voiture("Toyota", "Camry", 2020);
  
  // Etape 4 : Appeler la méthode "conduire" sur l'instance de l'objet "voiture" pour afficher le message "La voiture de marque Toyota modèle Camry de l'année 2020 roule sur la route."
  maVoiture.conduire();


// Exercice 2 


// Etape 1 : Créer un tableau "garage" qui contient des instances de l'objet "voiture" créé dans l'exercice précédent
let garage = [new Voiture("Toyota", "Camry", 2020), new Voiture("Tesla", "Model 3", 2017), new Voiture("Bugatti", "Chiron", 2016)];

// Etape 2 : Ajouter une méthode "afficherVoitures" à l'objet "garage" qui affiche les propriétés de chaque voiture dans le tableau
  garage.afficherVoitures = function() { 
    garage.forEach(voiture => {
    console.log(`Marque: ${voiture.marque}, Modèle: ${voiture.modele}, Année: ${voiture.annee}`);
  });
}

// Etape 3 : Appeler la méthode "afficherVoitures" sur l'objet "garage" pour afficher les propriétés de chaque voiture dans le tableau
garage.afficherVoitures();


//Exercice 3

// Etape 1 : Créer une fonction constructeur "Personne" qui prend en paramètres "nom" et "âge"

function Personne(nom, age) {
// Etape 2 : Ajouter les propriétés "nom" et "âge" à l'objet créé par la fonction constructeur    
    this.nom = nom;
    this.age = age;
  

// Etape 3 : Ajouter une méthode "sePresenter" à l'objet créé par la fonction constructeur qui affiche un message "Bonjour, je m'appelle [nom] et j'ai [âge] ans."    
this.sePresenter = function()  {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

// Etape 4 : Utiliser la fonction constructeur pour créer une instance de l'objet "Personne" en utilisant les valeurs "John" et "30"
let maPersonne = new Personne("John", 30);
maPersonne.sePresenter();
  
// Exercice 4 

//Etape 1 : Créer une fonction constructeur "Etudiant" qui hérite des propriétés et méthodes de la fonction constructeur "Personne"

function Etudiant(nom, age, matricule) {
    Personne.call(this, nom, age);
    

//Etape 2 : Ajouter une propriété "matricule" à l'objet créé par la fonction constructeur "Etudiant"  
    this.matricule = matricule;


//Etape 3 : Ajouter une méthode "etudier" à l'objet créé par la fonction constructeur "Etudiant" qui affiche un message "L'étudiant [nom] avec le matricule [matricule] étudie pour son examen."
    this.etudier = function() {
      console.log(`L'étudiant ${this.nom} avec le matricule ${this.matricule} étudie pour son examen.`);
};
}

//Etape 4 : Utiliser la fonction constructeur "Etudiant" pour créer une instance de l'objet "Etudiant" en utilisant les valeurs "Jane" et "22" pour les propriétés "nom" et "âge", et "123456" pour la propriété "matricule"
let firstEtudiant = new Etudiant("Jane", 22, "123456");

//Etape 5 : Appeler la méthode "sePresenter" sur l'instance de l'objet "Etudiant" pour afficher le message "Bonjour, je m'appelle Jane et j'ai 22 ans."
firstEtudiant.sePresenter();


//Etape 6 : Appeler la méthode "etudier" sur l'instance de l'objet "Etudiant" pour afficher le message "L'étudiant Jane avec le matricule 123456 étudie pour son examen."
firstEtudiant.etudier();

  
