
$(document).ready(function () {

    // each character is an object in an array, Luke is 0, Vader is 1, Han is 2, Boba is 3
    var charArray = [
        {
            name: "Luke Skywalker",
            player: false,
            enemy: false,
            defender: false,
            baseAttack: 10,
            counter: 13,
            health: 150,
            Sel: "skywalker",

        },
        {
            name: "Darth Vader",
            player: false,
            enemy: false,
            defender: false,
            baseAttack: 11,
            counter: 20,
            health: 160,
            Sel: "vader",

        },
        {
            name: "Han Solo",
            player: false,
            enemy: false,
            defender: false,
            baseAttack: 8,
            counter: 14,
            health: 140,
            Sel: "solo",

        },
        {
            name: "Boba Fette",
            player: false,
            enemy: false,
            defender: false,
            baseAttack: 7,
            counter: 12,
            health: 180,
            Sel: "boba",

        },
    ];

    var isDef = function () {
        var isDef = 0;
        for (i = 0; i < charArray.length; i++) {
            if (charArray[i].defender === true) {
                isDef++;
            };
        };
        if (isDef > 0) {
            return true;
        } else {
            return false
        };
    };
    var isDefender = isDef();
    var defSel;
    var newPlayerHealth;
    var newDefHealth;
    var atkPower;
    var newAtkPower;
    var defCounter;
    var newPlayerName;
    var newDefName;

    function reset() {
        for (i = 0; i < charArray.length; i++) {
            charArray[i].player = false;
            charArray[i].enemy = false;
            charArray[i].defender = false;
            $(`#${charArray[i].Sel}Sel`).show();
            $(`#${charArray[i].Sel}Player`).hide();
            $(`#${charArray[i].Sel}Enemy`).hide();
            $(`#${charArray[i].Sel}Def`).hide();
        };
        $(".skywalker").text(charArray[0].health);
        $(".vader").text(charArray[1].health);
        $(".solo").text(charArray[2].health);
        $(".boba").text(charArray[3].health);
        $("#playCharDmg").text("");
        $("#defDmg").text("");
    };
    reset();

    function setAtkVar() {
        for (i = 0; i < charArray.length; i++) {
            if (charArray[i].player === true) {
                atkPower = charArray[i].baseAttack;
                newAtkPower = atkPower;
                newPlayerHealth = charArray[i].health;
                newPlayerName = charArray[i].name;
            };
        };
    };


    function setDVar() {
        for (i = 0; i < charArray.length; i++) {
            if (charArray[i].defender === true) {
                defCounter = charArray[i].counter;
                newDefHealth = charArray[i].health;
                newDefName = charArray[i].name;
                $(`.${charArray[i].Sel}`).text(charArray[i].health)
            };
        };
    };




    //setting the health displays
    function displayHealth() {
        for (i = 0; i < charArray.length; i++) {
            if (charArray[i].player === true) {
                $(`.${charArray[i].Sel}`).text(newPlayerHealth);
            };
            if (charArray[i].defender === true) {
                $(`.${charArray[i].Sel}`).text(newDefHealth);
            };
        };
    };
    displayHealth();
    //Function to determine player and hide/show appropriate portraits
    function isPlayer() {
        for (i = 0; i < charArray.length; i++) {
            if (charArray[i].player === false) {
                $(`#${charArray[i].Sel}Sel`).hide();
                $(`#${charArray[i].Sel}Player`).hide();
                $(`#${charArray[i].Sel}Enemy`).show();
                charArray[i].enemy = true;
            } else {
                $(`#${charArray[i].Sel}Sel`).hide();
                $(`#${charArray[i].Sel}Player`).show();
            };
        };
    };
    // Character Select: click on the portrait to choose your player.  
    // Displays other characters in enemies section. 
    $("#skywalkerSel").on("click", function () {
        charArray[0].player = true;
        isPlayer();
        displayHealth();
        setAtkVar();
    });

    $("#vaderSel").on("click", function () {
        charArray[1].player = true;
        isPlayer();
        displayHealth();
        setAtkVar();
    });

    $("#soloSel").on("click", function () {
        charArray[2].player = true;
        isPlayer();
        displayHealth();
        setAtkVar();
    });

    $("#bobaSel").on("click", function () {
        charArray[3].player = true;
        isPlayer();
        displayHealth();
        setAtkVar();
    });

    // A function to determine player and defender


    // Setting Defender and assign variables for #atk-button function
    $("#skywalkerEnemy").on("click", function () {
        if (isDefender === false) {
            charArray[0].defender = true;
            defSel = charArray[0].Sel;
            isDefender = true;
            $("#skywalkerEnemy").hide();
            $("#skywalkerDef").show();
            displayHealth();
            setDVar();
        } else {
            alert("An enemy prepares his counter attack.");
        };
    });

    $("#vaderEnemy").on("click", function () {
        if (isDefender === false) {
            charArray[1].defender = true;
            defSel = charArray[1].Sel;
            isDefender = true;
            $("#vaderEnemy").hide();
            $("#vaderDef").show()
            displayHealth();
            setDVar();
        } else {
            alert("An enemy prepares his counter attack.");
        };
    });

    $("#soloEnemy").on("click", function () {
        if (isDefender === false) {
            charArray[2].defender = true;
            defSel = charArray[2].Sel;
            isDefender = true;
            $("#soloEnemy").hide();
            $("#soloDef").show();
            displayHealth();
            setDVar();
        } else {
            alert("An enemy prepares his counter attack.");
        };
    });

    $("#bobaEnemy").on("click", function () {
        if (isDefender === false) {
            charArray[3].defender = true;
            defSel = charArray[3].Sel;
            isDefender = true;
            $("#bobaEnemy").hide();
            $("#bobaDef").show();
            displayHealth();
            setDVar();
        } else {
            alert("An enemy prepares his counter attack.");
        };
    });

    $("#atk-button").on("click", function () {
        newDefHealth -= newAtkPower;
        newPlayerHealth -= defCounter;
        displayHealth();
        $("#playCharDmg").text(`${newPlayerName} deals ${newAtkPower} damage to ${newDefName}!`);
        $("#defDmg").text(`${newDefName} counterattacks for ${defCounter}!`);
        newAtkPower += atkPower;
        if (newDefHealth <= 0) {
            $(`#${defSel}Def`).hide();
            for (i = 0; i < charArray.length; i++) {
                if (charArray[i].defender === true) {
                    charArray[i].defender = false;
                    charArray[i].enemy = false;
                    $("#defDmg").text(`${charArray[i].name} has been defeated!`)
                };
            };
            var enemies = 4;
            for (i = 0; i < charArray.length; i++) {
                if (charArray[i].enemy === false) {
                    enemies--;
                    if (enemies === 0) {
                        alert(`${newPlayerName} is victorious!`);
                        reset();
                    };
                };
            };

            isDefender = isDef();
        };
        if (newPlayerHealth <= 0) {
            reset();
            isDefender = isDef();
            setTimeout(alert("Game Over!"),1000);
        };


    })

})



