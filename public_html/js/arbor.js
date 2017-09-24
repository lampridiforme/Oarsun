/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// health and energy
const MAXHEALTH = 100;
const MAXENERGY = 100;

// health and energy loss
const STARVESLOW = 2;
const STARVEMED = 5;
const STARVEFAST = 7;
const HEALSLOW = 1;
const HEALMED = 3;
const HEALFAST = 5;

// biomes
const UNIDENTIFIED = -1;
const FORESTEASY = 0;
const FORESTMED = 1;
const FORESTHARD = 2;
const PLAINSEASY = 3;
const PLAINSHARD = 4;
const RIVER = 5;
const SWAMPEASY = 6;
const SWAMPHARD = 7;
const WASTES = 8;
const HOME = 9;
const EGGNEST = 10;
const OTHERNEST = 11;

// directions
const NORTH = "north";
const NORTHWEST = "northwest";
const WEST = "west";
const SOUTHWEST = "southwest";
const SOUTH = "south";
const SOUTHEAST = "southeast";
const EAST = "east";
const NORTHEAST = "northeast";
const WAIT = "wait";

// level caps
const FIRSTLEVEL = 100;
const SECONDLEVEL = 500;
const THIRDLEVEL = 1500;
const LEVELCAPLOW = 2200;
const LEVELCAPMED = 2500;
const LEVELCAPHIGH = 3000;

// world map
const MAP = [
    [FORESTMED, FORESTMED, RIVER, SWAMPHARD, SWAMPHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, WASTES, WASTES, WASTES, WASTES, WASTES],
    [FORESTMED, FORESTMED, RIVER, SWAMPHARD, SWAMPHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, WASTES, WASTES, WASTES, WASTES, WASTES],
    [FORESTMED, FORESTMED, RIVER, SWAMPHARD, SWAMPHARD, SWAMPHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, WASTES, WASTES, WASTES],
    [FORESTMED, FORESTMED, RIVER, RIVER, RIVER, SWAMPHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD, PLAINSHARD],
    [EGGNEST, FORESTMED, SWAMPEASY, SWAMPEASY, RIVER, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, SWAMPHARD, PLAINSHARD],
    [FORESTMED, FORESTMED, PLAINSEASY, SWAMPEASY, RIVER, RIVER, RIVER, RIVER, RIVER, RIVER, RIVER, RIVER, SWAMPHARD, PLAINSHARD],
    [FORESTEASY, FORESTEASY, PLAINSEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, SWAMPEASY, RIVER, SWAMPHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, SWAMPEASY, RIVER, RIVER, SWAMPHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, SWAMPEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, SWAMPEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, PLAINSEASY, RIVER, RIVER, FORESTHARD, OTHERNEST, FORESTHARD],
    [FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, HOME, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD, FORESTHARD],
    [FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, FORESTEASY, EGGNEST, FORESTEASY, RIVER, FORESTHARD, FORESTHARD, FORESTHARD, FORESTHARD]
];

// enemy names

// enemies
// format: new Enemy({"name":"", "danger":});
// insects
const MILLIPEDE = new Enemy({"name":"Millipede", "danger":1});
const BEETLE = new Enemy({"name":"Beetle", "danger":5});
const DRAGONFLY = new Enemy({"name":"Beetle", "danger":5, "agilityModifier":1.8});
const SCORPION = new Enemy({"name":"Scorpion", "danger":100, "energyModifier":.2});

// lizards
const LIZARD = new Enemy({"name":"Lizard", "danger":10});
const IGUANA = new Enemy({"name":"Iguana", "danger":20, "energyModifier":1.1});

// arborsaurs
const MOMMA = new Enemy({"name":"Adult Female Arborsaur", "danger":2200});
const J_ARBORSAUR_WEAK = new Enemy({"name":"Juvenile Arborsaur", "danger":100});
const J_ARBORSAUR_MED = new Enemy({"name":"Juvenile Arborsaur", "danger":200});
const J_ARBORSAUR_STRONG = new Enemy({"name":"Juvenile Arborsaur", "danger":350});
const F_ARBORSAUR_WEAK = new Enemy({"name":"Adult Female Arborsaur", "danger":2000});
const F_ARBORSAUR_MED = new Enemy({"name":"Adult Female Arborsaur", "danger":2200});
const F_ARBORSAUR_STRONG = new Enemy({"name":"Adult Female Arborsaur", "danger":2700});
const M_ARBORSAUR_WEAK = new Enemy({"name":"Adult Male Arborsaur", "danger":2300});
const M_ARBORSAUR_MED = new Enemy({"name":"Adult Male Arborsaur", "danger":2500});
const M_ARBORSAUR_STRONG = new Enemy({"name":"Adult Male Arborsaur", "danger":3000});

// lungs
const J_LUNG = new Enemy({"name":"Juvenile Lung", "danger":120});
const LUNG_WEAK = new Enemy({"name":"Adult Lung", "danger":450});
const LUNG_MED = new Enemy({"name":"Adult Lung", "danger":500});
const LUNG_STRONG = new Enemy({"name":"Adult Lung", "danger":670});

// biome enemy generation
const FORESTEASY_GENERATOR = [{"enemy":BEETLE, "probability":50}];


// pre-level choices
var mommaPresent = false; // choice1 is momma here?
var metabolismEnergy = STARVEMED;   // choice2 what is growth like?
var metabolismHealth = HEALMED;
var metabolismLevelCap = LEVELCAPMED;
var packHunter = false; // turn pack hunting on?

// level
var currentLevel = 0;
// offspring
var offspring = 0;

// starve rate
var starveRate = STARVEMED;
// heal rate 
var healRate = HEALMED;

// weight
var currentWeight = 1;
// energy
var currentEnergy = 100;
// health
var currentHealth = 100;

// player's current location
var currentLocation = new PlayerLocation();

// current enemies
var enemy1;
var enemy2;
var enemy3;
var enemy4;

/***** Objects *****/

/*
 * 
 * @param {type} info
 * @returns {Enemy}
 */
function Enemy(info) {
    
    if(info["name"]) {
        this.name = info["name"];
    }
    else {
        console.log("Error: No name (Enemy)");
    }

    if(info["danger"]) {
        this.danger = info["danger"];
    }
    else {
        console.log("Error: No danger (Enemy)");
    }
    
    if(info["agilityModifier"]) {
        this.agilityModifier = info["agilityModifier"];
    }
    else {
        console.log("Warning: No agility modifier (Enemy)");
    }
    
    if(info["energyModifier"]) {
        this.energyModifier = info["energyModifier"];
    }
    else {
        console.log("Warning: No energy modifier (Enemy)");
    }
}

/*
 * Location constructor
 * 
 * @returns {PlayerLocation}
 */
function PlayerLocation() {
    this.index = 2; // index
    this.row = 12; // row
    this.biome = HOME;
}

/***** Actual Game Methods *****/

/*
 * Use in move() to check if the player is still in the map.
 * 
 * @param {type} index
 * @param {type} row
 * @returns {Boolean}
 */
function validatePosition(index, row) {
    if(index < 0 || row < 0 || index > 13 || row > 13) {
        console.log("Invalid position");
        return false;
    }
    console.log("Valid position");
    return true;    //valid!
}

/*
 * 
 * @param {type} direction
 * @returns {PlayerLocation|currentLocation}
 */
function move(direction) {
    
    var newLocation = new PlayerLocation();
    
    if(direction === NORTH) {
        newLocation.row = currentLocation.row - 1;
        newLocation.index = currentLocation.index;
    }
    else if(direction === NORTHWEST) {
        newLocation.row = currentLocation.row - 1;
        newLocation.index = currentLocation.index - 1;
    }
    else if(direction === WEST) {
        newLocation.row = currentLocation.row;
        newLocation.index = currentLocation.index - 1;
    }
    else if(direction === SOUTHWEST) {
        newLocation.row = currentLocation.row + 1;
        newLocation.index = currentLocation.index - 1;
    }
    else if(direction === SOUTH) {
        newLocation.row = currentLocation.row + 1;
        newLocation.index = currentLocation.index;
    }
    else if(direction === SOUTHEAST) {
        newLocation.row = currentLocation.row + 1;
        newLocation.index = currentLocation.index + 1;
    }
    else if(direction === EAST) {
        newLocation.row = currentLocation.row;
        newLocation.index = currentLocation.index + 1;
    }
    else if(direction === NORTHEAST) {
        newLocation.row = currentLocation.row - 1;
        newLocation.index = currentLocation.index + 1;
    }
    else if(direction === WAIT) {
        newLocation.row = currentLocation.row;
        newLocation.index = currentLocation.index;
    }
    else {
        // I should really read some more about exception handling
        alert("Error: Invalid direction (move)");
    }
        
    /* A cool way to do it: 
        var map = {
            "N": function() {
                //do something...
            }
            ...
        };
        var func = map[direction];
        if(func) {
            func();
        }
    */
   
   if(validatePosition(newLocation.index, newLocation.row) === true) {
       currentLocation.index = newLocation.index;
       currentLocation.row = newLocation.row;
   }
   
   return currentLocation;
}

function generateEnemies(index, row) {
    
}

/*
 * Attack button functionality
 * 
 * @param {type} enemy
 * @returns {Boolean}
 */
function attack(enemy) {
    var energy = calculateEnemyEnergy(enemy);
    var damage = calculateEnemyDamage(enemy);
    var agility = calculateEnemyAgility(enemy);
    
    
}

/*
 * 
 * @returns {Boolean}
 */
function mate() {
    if(currentLevel === 3) {
        offspring = offspring + 1;
        return true;
    }
    return false;
}

/*
 * Return true if player starves to death
 * 
 * @returns {Boolean}
 */
function starve() {
    currentEnergy = currentEnergy - metabolismEnergy;
    if(currentEnergy <= 0) {
        return true;
    }
    return false;
}

/*
 * Heal player
 * 
 * @returns {undefined}
 */
function heal() {
    if(currentHealth < MAXHEALTH) {
        currentHealth = currentHealth + metabolismHealth;
    }
}

/*
 * Increase player size.
 * 
 * @param {type} energy
 * @returns {undefined}
 */
function grow(energy) {
    // only grow if less than level cap
    if(currentWeight < metabolismLevelCap) {
        currentWeight = currentWeight + energy;
    }
}

/*
 * Is the player dead?
 * 
 * @returns {Boolean}
 */
function validatePlayerLife() {
    if(currentHealth > 0 && currentHealth > 0) {
        return true;
    }
    else {
        return false;
    }
}

/*
 * Check if the player's position is bordering a river.
 * 
 * @param {type} index
 * @param {type} row
 * @returns {Array|isBorderingRiver.locations}
 */
function isBorderingRiver(row, index) {
    var locations = [];
    // north
    if(validatePosition(row-1, index) && MAP[row-1][index] === RIVER) {
        locations.push(NORTH);
    }
    // south
    if(validatePosition(row+1, index) && MAP[row+1][index] === RIVER) {
        locations.push(SOUTH);
    }
    // west
    if(validatePosition(row, index-1) && MAP[row][index-1] === RIVER) {
        locations.push(WEST);
    }
    // east
    if(validatePosition(row, index+1) && MAP[row][index+1] === RIVER) {
        locations.push(EAST);
    }
    return locations;
}

/*
 * Calculate the amount of damage the enemy should do
 * 
 * Inverse relationship to the player's weight.
 * 
 * @param {type} enemy
 * @returns {undefined}
 */
function calculateEnemyDamage(enemy) {
    var damage = enemy.danger/currentWeight * 100;
    
    // player can attack safely if enemy is significantly smaller
    if(enemy.danger < currentWeight/10) {
        return 0;
    }
    
    return damage;
}

/*
 * Will the enemy pounce?
 * Only happens after "wait" command and if the enemy is larger than the player.
 * 
 * @param {type} enemy
 * @returns {Boolean}
 */
function enemyPounce(enemy) {
    var aggression = (1 - currentWeight/enemy.danger) * 100;
    
    if(enemy.danger > currentWeight && getRandomNum(0, 100) < aggression) { // TODO: any problems when in same location after eating?
        return true;
    }
    
    return false;
}

/*
 * Calculate enemy agility
 * 
 * Direct relationship to player's weight
 * 
 * @param {type} enemy
 * @returns {Number}
 */
function calculateEnemyAgility(enemy) {
    var agility = (1 - enemy.danger/currentWeight) * 100;
    
    if(agility < 0) {
        agility = 0;
    }
    
    if(enemy.agilityModifier) {
        agility = agility * enemy.agilityModifier;
    }
    
    return agility;
}

/*
 * Calculate how much energy the player gains from eating
 * 
 * @param {type} enemy
 * @returns {Number}
 */
function calculateEnemyEnergy(enemy) {
    var energy = enemy.danger/currentWeight * 100;
    
    if(enemy.energyModifier) {
        energy = energy * enemy.energyModifier;
    }
    
    return energy;
}

/*
 * Did the enemy flee successfully?
 * 
 * @param {type} agility
 * @returns {Boolean}
 */
function enemyFlee(agility) {
    if(getRandomNum(0, 100) < agility) {
        return true;
    }
    return false;
}

/*
 * TODO
 * End game if player won or lose.
 * 
 * @param {type} wonGame
 * @returns {undefined}
 */
function gameOver(wonGame) {
    if(wonGame === true) {
        
    }
    else {
        
    }
}

/***** UI Stuff *****/

function moveMapMarker(newRow, newIndex) {
    console.log(newRow + ", " + newIndex);
    
    // clear current position's marker
    $("#placemark").remove();
    
    // I hate the way jQuery selects indices; might just use JS in the future
    var newCoords = newRow*14 + newIndex;
    
    // display new position's marker
    $("#minimaptable td").eq(newCoords).html("<div id='placemark'></div>");
}

/*
 * Set an enemy's info (name, bars) in the gui.
 * 
 * @param {type} location
 * @param {type} enemy
 * @returns {undefined}
 */
function displayEnemyBars(location, enemy) {
    var dangerPercent = calculateEnemyDamage(enemy)/100;
    var agilityPercent = calculateEnemyAgility(enemy)/100;
    var energyPercent = calculateEnemyEnergy(enemy)/100;
    
    var nameLocation = location + ">.enemyname";
    var dangerLocation = location + ">.stats>.enemysize>.sizebar";
    var agilityLocation = location + ">.stats>.enemyagility>.agilitybar";
    var energyLocation = location + ">.stats>.enemyenergy>.energybar";
    
    $(nameLocation).html(enemy.name);
    $(dangerLocation).css("width", dangerPercent);
    $(agilityLocation).css("width", agilityPercent);
    $(energyLocation).css("width", energyPercent);
    
    // sizebar color
    if(dangerPercent <= 25) {
        $(location + ">.stats>.enemysize>.sizebar").css("background-color", "red");
    }
    else if(dangerPercent < 25 && dangerPercent >= 75) {
        $(location + ">.stats>.enemysize>.sizebar").css("background-color", "yellow");
    }
    else {
        $(location + ">.stats>.enemysize>.sizebar").css("background-color", "green");
    }
    
    // agilitybar color
    if(agilityPercent <= 25) {
        $(location + ">.stats>.enemyagility>.agilitybar").css("background-color", "red");
    }
    else if(agilityPercent < 25 && agilityPercent >= 75) {
        $(location + ">.stats>.enemyagility>.agilitybar").css("background-color", "yellow");
    }
    else {
        $(location + ">.stats>.enemyagility>.agilitybar").css("background-color", "green");
    }
    
    // energybar color
    if(energyPercent <= 25) {
        $(location + ">.stats>.enemyenergy>.energybar").css("background-color", "red");
    }
    else if(energyPercent < 25 && energyPercent >= 75) {
        $(location + ">.stats>.enemyenergy>.energybar").css("background-color", "yellow");
    }
    else {
        $(location + ">.stats>.enemyenergy>.energybar").css("background-color", "green");
    }
}

function displayEnemies(enemies) {
    if(enemies["enemy1"]) {
        displayEnemyBars("#enemy1>.desc", enemies["enemy1"]);
    }
    else {
        $("#enemy1").css("display", "none");
    }
    
    if(enemies["enemy2"]) {
        displayEnemyBars("#enemy2>.desc", enemies["enemy2"]);
    }
    else {
        $("#enemy2").css("display", "none");
    }
    
    if(enemies["enemy3"]) {
        displayEnemyBars("#enemy3>.desc", enemies["enemy3"]);
    }
    else {
        $("#enemy3").css("display", "none");
    }
    
    if(enemies["enemy4"]) {
        displayEnemyBars("#enemy4>.desc", enemies["enemy4"]);
    }
    else {
        $("#enemy4").css("display", "none");
    }
    
}

$(document).ready(function() { 
    
    /*
     * Compass click
     */
    $(".direction").click(function() {
        console.log("Compass click: " + this.id);
        var newPos = move(this.id);
        console.log(newPos.row + ", " + newPos.index);
        moveMapMarker(currentLocation.row, currentLocation.index);
    });
    
    /*
     * Attack click
     */
    $(".attack").click(function() {
        console.log("Attacking");
    });
    
    /*
     * Mate click
     */
    $(".mate").click(function() {
        console.log("Mating");
    });
    
    /* 
     * Display infosheet
     */
    $(".info").click(function() {
        console.log("Infosheet");
    });
});

/***** Strings *****/

/***** Tests *****/

function testAttack() {
    
}

function testIsBorderingRiver() {    
    console.log(isBorderingRiver(0, 1)); // E
    console.log(isBorderingRiver(1, 0)); // none
    console.log(isBorderingRiver(2, 3)); // S, W
    console.log(isBorderingRiver(6, 10)); // N, S, E
}

function testRandomEnemyGenerator() {
    var testList = [{"enemy":BEETLE, "probability":50}, {"enemy":MILLIPEDE, "probability":50}];
    console.log("Enemy returned:" + randomEnemyGenerator(testList).name);
}

/***** Tools *****/

/*
 * Gets a random number
 * 
 * @param {type} lower
 * @param {type} upper
 * @returns {Number}
 */
function getRandomNum(lower, upper) {
    return (Math.random() * upper) + lower;
}

/*
 * Randomly generates an enemy from a list of enemy-probability pairs
 * 
 */
function randomEnemyGenerator(list) {
    var totalCount = 0;
    
    // TODO: maybe find way to ensure the type is an array
    
    for(var i = 0; i < list.length; i++) {
        console.log(list[i]);
        totalCount = totalCount + list[i].probability;
    }
    
    console.log("totalCount is: " + totalCount);
    
    var selector = getRandomNum(0, totalCount);
    
    console.log("selector is: " + selector);
    
    var runningTotal = 0;
    for(var i = 0; i < list.length; i++) {
        runningTotal = runningTotal + list[i].probability;
        console.log("runningTotal is: " + runningTotal + ", we are at list element " + i);
        if(runningTotal >= selector) {
            return list[i].enemy;
        }
    }
    console.log("Error: Hit end of list before making decision, returning final enemy instead (randomEnemyGenerator)");
    return list[list.length - 1].enemy;   // emergency return last element
}