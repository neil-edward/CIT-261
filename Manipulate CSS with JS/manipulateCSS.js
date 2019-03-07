var count = 0 ;
var count2 = 0 ;


function changeCSS(){
    if (count == 0){
        document.getElementById("p").style.color = "blue";
        document.getElementById("p").style.fontFamily = "Arial";
        document.getElementById("p").style.fontSize = "14px";
        count++;
    }
    else if (count == 1){
        document.getElementById("p").style.color = "green";
        document.getElementById("p").style.fontFamily = "Arial";
        document.getElementById("p").style.fontSize = "16px";
        count++;
    }
    else if (count == 2){
        document.getElementById("p").style.color = "red";
        document.getElementById("p").style.fontFamily = "Arial";
        document.getElementById("p").style.fontSize = "18px";
        count = 0;
    }
}

function changeCSS2(){
    if (count2 == 0){
        document.getElementById("p").style.border = " 5px solid";
        count2++;
    }
    else if (count2 == 1){
        document.getElementById("p").style.border = "5px solid pink";
        count2++;
    }
    else if (count2 == 2){
        document.getElementById("p").style.border = "none";
        count2 = 0;
    }
}