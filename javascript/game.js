$(document).ready(function(){

// each character is an object


 var skywalker ={
    name: "Luke Skywalker",
    player: false,
    defender: false,
    enemy: false,
    baseAttack: 6,
    counter: 12,
    health: 120,
};
var vader = {
    name: "Darth Vader",
    player: false,
    defender: false,
    enemy: false,
    baseAttack: 8,
    counter: 16,
    health: 160,
};
var solo = {
    name: "Han Solo",
    player: false,
    defender: false,
    enemy: false,
    baseAttack: 7,
    counter: 14,
    heath: 140,
};
var boba ={
    name: "Boba Fette",
    player: false,
    defender: false,
    enemy: false,
    baseAttack: 9,
    counter: 18,
    health: 180,
};

// Character Select: click on the portrait to choose your player
$("#skywalkerSel").on("click", function() {
    skywalker.player = true;
    $("#skywalkerSel").hide();
    $("#skywalkerPlayer").show();
    $("#vaderSel").hide();
    $("#soloSel").hide();
    $("#bobaSel").hide();
    $("#vaderEnemy").show();
    $("#soloEnemy").show();
    $("#bobaEnemy").show();
});

$("#vaderSel").on("click", function() {
    vader.player = true;
    $("#vaderSel").hide();
    $("#vaderPlayer").show();
    $("#skywalkerSel").hide();
    $("#soloSel").hide();
    $("#bobaSel").hide();
    $("#skywalkerEnemy").show();
    $("#soloEnemy").show();
    $("#bobaEnemy").show();
});

$("#soloSel").on("click", function() {
    solo.player = true;
    $("#soloSel").hide();
    $("#soloPlayer").show();
    $("#skywalkerSel").hide();
    $("#vaderSel").hide();
    $("#bobaSel").hide();
    $("#skywalkerEnemy").show();
    $("#vaderEnemy").show();
    $("#bobaEnemy").show();
});

$("#bobaSel").on("click", function() {
    boba.player = true;
    $("#bobaSel").hide();
    $("#bobaPlayer").show();
    $("#skywalkerSel").hide();
    $("#vaderSel").hide();
    $("#soloSel").hide();
    $("#skywalkerEnemy").show();
    $("#vaderEnemy").show();
    $("#soloEnemy").show();
});


})