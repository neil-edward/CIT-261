
function sum(){
    var numA = parseFloat(a.value);
    var numB = parseFloat(b.value);

    if (numA >= 0 && numB >= 0) {
        document.getElementById("sum").innerHTML= numA + numB;
    }
    else
    document.getElementById("sum").innerHTML= "Please enter valid numbers";
   
}

function array(){
    var shoppingList = ["Milk", "Eggs","Flour","Butter"];
    var index = parseFloat(itemCheck.value);
    if (index > 4 || index < 1)
    document.getElementById("list").innerHTML= "Choose a number on the list";
    else
    document.getElementById("list").innerHTML= shoppingList[index-1];
}

function countdown() {
    var num = parseFloat(count.value);
    var a = -1;
    for (var i = 0; i <= num ;i++){
        if (i % 5 == 0)
        a++;
        document.getElementById("countdown").innerHTML = a;
    }
}