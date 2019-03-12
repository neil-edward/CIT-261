function Settings(color,time, birth) {
    this.color = color;
    this.time = time;
    this.birth = birth;

  }

function getSettings(){
    var storedObject = JSON.parse(localStorage.getItem('object'));
document.getElementById("settings").innerHTML = localStorage.color + "<br>" + localStorage.time + "<br>" + localStorage.birth + "<br>" + storedObject.one;
}

function submit() {
    if (typeof(Storage) !== "undefined") {

        var user1 = new Settings();
        user1.color = document.forms['color']['input'].value;
        user1.time = document.forms['time']['input'].value;
        user1.birth = document.forms['birth']['input'].value;



        
    

        
        localStorage.setItem("color", user1.color);
        localStorage.setItem("time", user1.time);
        localStorage.birth = user1.birth


        //This is the object
        var object = { 'one': 1, 'two': 2, 'three': 3 };
        localStorage.setItem('object', JSON.stringify(object));
        var storedObject = JSON.parse(localStorage.getItem('object'));

        document.getElementById("settings").innerHTML = localStorage.getItem("color") + "<br>" + localStorage.time + "<br>" + localStorage.birth + "<br>" + storedObject.one;
    }
    else {
        document.getElementById("settings").innerHTML = "Could not getting settings data";
    }
}



function clearSettings(){
    localStorage.removeItem("color");
    localStorage.removeItem("time");
    localStorage.removeItem("birth");
    document.getElementById("settings").innerHTML = localStorage.getItem("color") + "<br>" + localStorage.time + "<br>" + localStorage.birth;
}