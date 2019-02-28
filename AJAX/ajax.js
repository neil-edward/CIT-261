function getJSON(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var person = JSON.parse(xhttp.response);
        document.getElementById("json1").innerHTML = "There are 3 people!" + "<br>" + 
        person[0].name + ", " + person[0].gender +", Age " + person[0].age + "<br>" +
        person[1].name + ", " + person[1].gender +", Age " + person[1].age + "<br>" +
        person[2].name + ", " + person[2].gender +", Age " + person[2].age + "<br>";
    }
  }
  xhttp.open("GET", "ajax.json", true);
  xhttp.send();
  
}




