

function getSettings(){
document.getElementById("settings").innerHTML = localStorage.color + "<br>" + localStorage.time + "<br>" + localStorage.birth;
}

function submit() {



    if (typeof(Storage) !== "undefined") {

        var color = document.forms['color']['input'].value;
        var time = document.forms['time']['input'].value;
        var birth = document.forms['birth']['input'].value;
        
    

        
        localStorage.setItem("color", color);
        localStorage.setItem("time", time);
        localStorage.birth = birth

        document.getElementById("settings").innerHTML = localStorage.getItem("color") + "<br>" + localStorage.time + "<br>" + localStorage.birth;
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