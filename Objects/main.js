function Outfit(owner, top, bottom, topColor, bottomColor) {
  this.owner = owner;
  this.top = top;
  this.bottom = bottom;
  this.topColor = topColor;
  this.bottomColor = bottomColor;
}

Outfit.prototype.desc = function() {
  return this.owner + " is wearing a " + this.topColor + " " + this.top + " and " + this.bottomColor + " " + this.bottom;
};

var myOutfit = new Outfit("Edward","T-Shirt","Jeans","Red","Blue")


document.getElementById("name").innerHTML = myOutfit.owner;

document.getElementById("wearingTop").addEventListener("click", getTop);

document.getElementById("wearingBottom").addEventListener("click", getBottom);

document.getElementById("outfitDesc").addEventListener("click", getOutfitDesc);

document.getElementById("newOutfit").addEventListener("click", newOutfit);


function getTop() {
    document.getElementById("answer").innerHTML = "A " + myOutfit.topColor + " " + myOutfit.top;
  }

  function getBottom() {
    document.getElementById("answer").innerHTML = myOutfit.bottomColor + " " + myOutfit.bottom;
  }

  function getOutfitDesc() {
    document.getElementById("answer").innerHTML = myOutfit.desc();
  }


  function newOutfit(){
    var thatOutfit = Object.create(Outfit.prototype);
    thatOutfit.owner = "Sally"
    thatOutfit.top =  "Sweater"
    thatOutfit.bottom = "Shorts"
    thatOutfit.topColor ="Green"
    thatOutfit.bottomColor = "Purple"

    document.getElementById("answer").innerHTML = thatOutfit.desc();
  }