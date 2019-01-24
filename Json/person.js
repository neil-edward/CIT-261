
var person = {
    name  : "Jason", 
    gender: "Male" ,
    age   : 25, 
    siblings : ["John" , "Jannie"],
};

var list = [
    {
            "name"  : "David Bowie", 
            "gender": "Male" ,
            "age"   : 0
    
    },
    {
            "name"  : "Red Ranger", 
            "gender": "Male" ,
            "age"   : 88
    
    },
    {
            "name"  : "Rianna", 
            "gender": "Female" ,
            "age"   : 22
    
    }
]

var json = JSON.stringify(person);
document.getElementById("one").innerHTML = json;

var clonePerson = JSON.parse(json);
document.getElementById("two").innerHTML = clonePerson.name + ", " + clonePerson.age + ", second sibling: " + clonePerson.siblings[1];

var personList = JSON.stringify(list);
var nextPerson = JSON.parse(personList);
document.getElementById("three").innerHTML = nextPerson[0].name + ", " + nextPerson[1].name + ", " + nextPerson[2].name;