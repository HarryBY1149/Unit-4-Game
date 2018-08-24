
$(document).ready(function(){
    
// each character is an object in an array, Luke is 0, Vader is 1, Han is 2, Boba is 3
var charArray = [
    {
    name: "Luke Skywalker",
    player: false,
    defender: false,
    baseAttack: 6,
    counter: 10,
    health: 120,
},
{
    name: "Darth Vader",
    player: false,
    defender: false,
    baseAttack: 8,
    counter: 18,
    health: 160,
},
{
    name: "Han Solo",
    player: false,
    defender: false,
    baseAttack: 7,
    counter: 14,
    health: 140,
},
{
    name: "Boba Fette",
    player: false,
    defender: false,
    baseAttack: 9,
    counter: 8,
    health: 180,
},
];

var isDefender = false;
var newPlayerHealth;
var newDefHealth;
var newAtkPower;

function reset(){
    $("#skywalkerEnemy").hide()
    $("#vaderEnemy").hide();
    $("#soloEnemy").hide();
    $("#bobaEnemy").hide();
    $("#skywalkerPlayer").hide();
    $("#vaderPlayer").hide();
    $("#soloPlayer").hide();
    $("#bobaPlayer").hide();
    $("#skywalkerDef").hide();
    $("#vaderDef").hide();
    $("#soloDef").hide();
    $("#bobaDef").hide();
    charArray.forEach(function(){
        player = false;
        defender = false;
    });
};

reset()

//setting the health displays
function displayHealth() {
$(".skywalker").text(charArray[0].health);
$(".vader").text(charArray[1].health);
$(".solo").text(charArray[2].health);
$(".boba").text(charArray[3].health);
};
displayHealth();
// Character Select: click on the portrait to choose your player.  
// Displays other characters in enemies section. 
$("#skywalkerSel").on("click", function() {
    charArray[0].player = true;
    $("#skywalkerSel").hide();
    $("#skywalkerPlayer").show();
    $("#vaderSel").hide();
    $("#soloSel").hide();
    $("#bobaSel").hide();
    $("#vaderEnemy").show();
    $("#soloEnemy").show();
    $("#bobaEnemy").show();
    displayHealth();
});

$("#vaderSel").on("click", function() {
    charArray[1].player = true;
    $("#vaderSel").hide();
    $("#vaderPlayer").show();
    $("#skywalkerSel").hide();
    $("#soloSel").hide();
    $("#bobaSel").hide();
    $("#skywalkerEnemy").show();
    $("#soloEnemy").show();
    $("#bobaEnemy").show();
    displayHealth();
});

$("#soloSel").on("click", function() {
    charArray[2].player = true;
    $("#soloSel").hide();
    $("#soloPlayer").show();
    $("#skywalkerSel").hide();
    $("#vaderSel").hide();
    $("#bobaSel").hide();
    $("#skywalkerEnemy").show();
    $("#vaderEnemy").show();
    $("#bobaEnemy").show();
    displayHealth();
});

$("#bobaSel").on("click", function() {
    charArray[3].player = true;
    $("#bobaSel").hide();
    $("#bobaPlayer").show();
    $("#skywalkerSel").hide();
    $("#vaderSel").hide();
    $("#soloSel").hide();
    $("#skywalkerEnemy").show();
    $("#vaderEnemy").show();
    $("#soloEnemy").show();
    displayHealth();
});
// choosing enemy to attack and function to determine if there is all ready a defender



$("#skywalkerEnemy").on("click", function() {
    
    if(isDefender === false) {
    charArray[0].defender = true;
    isDefender = true;
    $("#skywalkerEnemy").hide();
    $("#skywalkerDef").show();
    displayHealth();
    } else {
        alert("An enemy prepares his counter attack.");
    };
});

$("#vaderEnemy").on("click", function() {
   if(isDefender === false) {
    charArray[1].defender = true;
    isDefender = true;
    $("#vaderEnemy").hide();
    $("#vaderDef").show()
    displayHealth();
    } else {
        alert("An enemy prepares his counter attack.");
    };
});

$("#soloEnemy").on("click", function() {
    if(isDefender === false){
        charArray[2].defender = true;
        isDefender = true;
        $("#soloEnemy").hide();
        $("#soloDef").show();
        displayHealth();
    } else {
        alert("An enemy prepares his counter attack.");
    };
});

$("#bobaEnemy").on("click", function() {
    if (isDefender === false){
        charArray[3].defender = true;
        isDefender = true;
        $("#bobaEnemy").hide();
        $("#bobaDef").show();
        displayHealth();
    } else {
        alert("An enemy prepares his counter attack.");
    };
});

})


