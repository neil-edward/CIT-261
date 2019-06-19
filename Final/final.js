var header = document.querySelector('header');
    var section = document.querySelector('section');
    var requestURL = 'movies.json';

    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);

    function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);

    var myH2 = document.createElement('h2');
    myH2.textContent = 'Located in: ' + jsonObj['secretBase'];
    header.appendChild(myH2)

    }

function showHeroes(jsonObj) {
    var movies = jsonObj['members'];
      
    for (var i = 0; i < movies.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = movies[i].name;
        myPara1.textContent = 'Secret identity: ' + movies[i].secretIdentity;
        myPara2.textContent = 'Age: ' + movies[i].age;
        myPara3.textContent = 'Superpowers:';
            
        var superPowers = movies[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
        }
    }
}

function fillContentAction()
{
    document.getElementById("info").innerHTML = "HE"
}

function fillContentComedy()
{

}

function fillContentDrama()
{
}

function fillContentChildren()
{


}

function fillContentHorror()
{

}


function fillInfo(num)
{
    var id = num.id;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var person = JSON.parse(xhttp.response);
        document.getElementById("info").innerHTML;
        
    }
  }
  xhttp.open("GET", "movies.json", true);
  xhttp.send();
}

function getJSON(){

  
}