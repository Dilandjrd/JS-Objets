function Carrousel(images, elementId) {
  this.images = images;
  this.elementId = elementId;
  this.indexActuel = 0;
  this.afficherImage = function() {
      let img = document.createElement("img");
      img.src = this.images[this.indexActuel];
      let element = document.getElementById("carrousel");
      element.innerHTML = "";
      element.appendChild(img);
  }
  this.suivant = function() {
      this.indexActuel++;
      if (this.indexActuel === this.images.length) {
        this.indexActuel = 0;
      }
      this.afficherImage();
  }
  this.precedent = function() {
      this.indexActuel--;
      if (this.indexActuel < 0) {
        this.indexActuel = this.images.length - 1;
      }
      this.afficherImage();
  }
  this.startAutoPlay = function() {
      setInterval(() => {
          this.suivant();
      }, 3000);
  }
}
let mesImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
let monCarrousel = new Carrousel(mesImages, "carrousel");
monCarrousel.afficherImage();
let prevId = document.getElementById("prevId");
let nextId = document.getElementById("nextId");
prevId.addEventListener("click", ()=>monCarrousel.precedent());
nextId.addEventListener("click", ()=>monCarrousel.suivant());
monCarrousel.startAutoPlay();
