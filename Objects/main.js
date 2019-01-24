var outfit = { owner:"Edward", top: "T-Shirt" , bottom: "Jeans", topColor: "Red", bottomColor: "Blue",
    descTop: function() { 
        return  this.topColor + " " + this.top;
    }
};

document.getElementById("name").innerHTML = outfit.owner;

document.getElementById("wearingTop").addEventListener("click", getTop);

document.getElementById("wearingBottom").addEventListener("click", getBottom);


function getTop() {
    document.getElementById("answer").innerHTML = "A " + outfit.descTop();
  }

  function getBottom() {
    document.getElementById("answer").innerHTML = outfit.bottom;
  }