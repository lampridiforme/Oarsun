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

// biome colors
const UNIDENTIFIED_COLOR = "#ff0026";
const UNVISITED_COLOR = "#bababa";
const FORESTEASY_COLOR = "#38ff4b";
const FORESTMED_COLOR = "#299734";
const FORESTHARD_COLOR = "#013800";
const PLAINSEASY_COLOR = "#e2f90e";
const PLAINSHARD_COLOR = "#d8890a";
const RIVER_COLOR = "#00b2ff";
const SWAMPEASY_COLOR = "#cc4cff";
const SWAMPHARD_COLOR = "#510ca0";
const WASTES_COLOR = "#aef9f4";
const HOME_COLOR = "#62c43e";
const EGGNEST_COLOR = "#62c43e";
const OTHERNEST_COLOR = "#62c43e";

// biome descriptions
const FORESTEASY_DESC = "You are in the western forests. The flora gets denser and thicker to the south and west, and thins out considerably to the north.";
const FORESTMED_DESC = "You are in the northern forests. The plants are thinner here than those in the southern forests. You see an open plain to the southeast and a deep gorge to the north and west. ";
const FORESTHARD_DESC = "You are in the eastern forests. The plants are thickest here and form an impenetrable wall to the east and south.";
const PLAINSEASY_DESC= "You are in the southern plains. Thin grass stretches to the north and east.";
const PLAINSHARD_DESC = "You are in the northern plains. White dunes are visible in the northeast.";
const RIVER_DESC = "You wade through the river.";
const SWAMPEASY_DESC = "You are in a swamp.";
const SWAMPHARD_DESC = "You are in a swamp. It's harder to traverse compared to the southern and western swamps.";
const WASTES_DESC = "You are in the wastes. A desert of fine, white sand stretches indefinitely to the north and east. To the south and west you see the sunbaked flats of the eastern plains.";
const HOME_DESC = "You are currently standing in a nest. Is anyone home?";
const EGGNEST_DESC = "You are currently standing in a nest. Is anyone home?";
const OTHERNEST_DESC = "You are currently standing in a nest. Is anyone home?";

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

// for displaying color bars
const LOWPERCENT = 40;
const HIGHPERCENT = 90;

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

// enemy descriptions
// NOTE: these are vars because apparently consts aren't globally scoped???
var MILLIPEDE_DESC = "a millipede crawling in the dirt";
var BEETLE_DESC = "a beetle";
var DRAGONFLY_DESC = "a perched dragonfly";
var SCORPION_DESC = "a scorpion hiding under a rock";

// enemies
// format: new Enemy({"name":"", "danger":});
// insects
const MILLIPEDE = new Enemy({"name":"Millipede", "danger":.5, "agilityModifier":.6});
const BEETLE = new Enemy({"name":"Beetle", "danger":.2, "agilityModifier":.9});
const DRAGONFLY = new Enemy({"name":"Dragonfly", "danger":1, "agilityModifier":1.8});
const SCORPION = new Enemy({"name":"Scorpion", "danger":20, "energyModifier":.2});

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
const FORESTEASY_GENERATOR = [{"enemy":BEETLE, "probability":50}, {"enemy":DRAGONFLY, "probability":50}, {"enemy":MILLIPEDE, "probability":50}, {"enemy":SCORPION, "probability":300}];
const FORESTMED_GENERATOR = [{"enemy":BEETLE, "probability":50}];
const FORESTHARD_GENERATOR = [{"enemy":BEETLE, "probability":50}];
const PLAINSEASY_GENERATOR = [{"enemy":BEETLE, "probability":50}];
const PLAINSHARD_GENERATOR = [{"enemy":BEETLE, "probability":50}];
const RIVER_GENERATOR = [];
const SWAMPEASY_GENERATOR = [{"enemy":BEETLE, "probability":50}];
const SWAMPHARD_GENERATOR = [{"enemy":BEETLE, "probability":50}];
const WASTES_GENERATOR = [{"enemy":BEETLE, "probability":50}];
const HOME_GENERATOR = [{"enemy":BEETLE, "probability":50}];
const EGGNEST_GENERATOR = [{"enemy":BEETLE, "probability":50}];
const OTHERNEST_GENERATOR = [{"enemy":BEETLE, "probability":50}];

const pb = new ParagraphBuffer();

// egg nest egg count. Start at 3.
var eggsSouthCount = 3;
var eggsNorthCount = 3;

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
var currentWeight = 3;
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
        console.log("Error: Invalid direction (move)");
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
   
   console.log("Moving to " + newLocation.index + ", " + newLocation.row + " from " + currentLocation.index + ", " + currentLocation.row + " (move)");
   
   if(validatePosition(newLocation.index, newLocation.row) === true) {
       // index
       currentLocation.index = newLocation.index;
       currentLocation.row = newLocation.row;
       // biome
       currentLocation.biome = MAP[newLocation.row][newLocation.index];
       
       // starve on valid move
       starve();
       
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
    
    // exit if enemy runs away
    if(enemyFlee(agility) === true) {
        writeFlee(enemy);
        console.log("Enemy fled (attack)");
        starve();
        
        return;
    }
    
    // incur damage on player during attack
    currentHealth = currentHealth - damage;
    
    // dead?
    if(currentHealth <= 0) {
        gameOver(false);
        // TODO: push damage message
        return;
    }
    
    // gain energy and grow
    currentEnergy = currentEnergy + energy;
    currentWeight = currentWeight + energy/3;
    
    if(currentEnergy > 100) {
        currentEnergy = 100;
    }
    
    writeAttack(enemy, damage);
    
    console.log("Attacked " + enemy.name + ". Health: " + currentHealth + " Energy: " + currentEnergy + "Size: " + currentWeight + " (attack)");
    
    
    
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
    
    console.log("You starve a little. Current energy at: " + currentEnergy + " (starve)");
    
    if(currentEnergy <= 0) {
        gameOver(false);
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
    
    console.log(enemy.name + " danger: " + damage + " (calculateEnemyDamage)");
    
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
    var agility = (1 - enemy.danger/currentWeight) * currentWeight;
    
    if(agility < 0) {
        agility = 0;
    }
    if(agility > 100) {
        agility = 100;
    }
    
    if(enemy.agilityModifier) {
        agility = agility * enemy.agilityModifier;
    }
    
    console.log(enemy.name + " agility: " + agility + " (calculateEnemyAgility)");
    
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
    
    console.log(enemy.name + " energy: " + energy + " (calculateEnemyEnergy)");
    
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
 * Helper method for generateEnemies. Actually performs the generation and sets the enemy slots.
 * chanceOfNothing should be between 0 and 100.
 * 
 * @param {type} chanceOfNothing
 * @param {type} generator
 * @returns {undefined}
 */
function generateEnemiesHelper(chanceOfNothing, generator) {
    var enemiesToDisplay = Array();
    
    // One for each of the enemy slots
    for(var i = 0; i < 4; i++) {   
        if(getRandomNum(0, 100) < chanceOfNothing) { 
            enemiesToDisplay[i] = null;
        }
        else {
            var newEnemy = randomEnemyGenerator(generator);
            // only add unique enemies
            var j = 0;
            for(j; j < enemiesToDisplay.length; j++) {
                // NOTE: I knoe NB complains about this, but using != instead of !== for null is better since it also accounts for "undefined"
                if(enemiesToDisplay[j] != null && enemiesToDisplay[j].name === newEnemy.name) {
                    break;
                }
            }
            if(j === enemiesToDisplay.length) {
                enemiesToDisplay[i] = newEnemy;
            }
        }
    }
    
    enemy1 = enemiesToDisplay[0];
    enemy2 = enemiesToDisplay[1];
    enemy3 = enemiesToDisplay[2];
    enemy4 = enemiesToDisplay[3];
    
    return enemiesToDisplay;
}

function generateEnemies(row, index) {  // TODO: maybe turn this into switch instead
    var enemiesToDisplay = Array();
    
    if(MAP[row][index] === FORESTEASY) {
        enemiesToDisplay = generateEnemiesHelper(40, FORESTEASY_GENERATOR);
    }
    else if(MAP[row][index] === FORESTMED) {
        enemiesToDisplay = generateEnemiesHelper(50, FORESTMED_GENERATOR);
        displayEnemies(enemiesToDisplay);
    }
    else if(MAP[row][index] === FORESTHARD) {
        enemiesToDisplay = generateEnemiesHelper(50, FORESTHARD_GENERATOR);
    }
    else if(MAP[row][index] === PLAINSEASY) {
        enemiesToDisplay = generateEnemiesHelper(60, PLAINSEASY_GENERATOR);
    }
    else if(MAP[row][index] === PLAINSHARD) {
        enemiesToDisplay = generateEnemiesHelper(90, PLAINSHARD_GENERATOR);
        displayEnemies(enemiesToDisplay);
    }
    else if(MAP[row][index] === RIVER) {
        enemiesToDisplay = generateEnemiesHelper(100, RIVER_GENERATOR);
    }
    else if(MAP[row][index] === SWAMPEASY) {
        enemiesToDisplay = generateEnemiesHelper(20, SWAMPEASY_GENERATOR);
    }
    else if(MAP[row][index] === SWAMPHARD) {
        enemiesToDisplay = generateEnemiesHelper(40, SWAMPHARD_GENERATOR);
    }
    else if(MAP[row][index] === WASTES) {
        enemiesToDisplay = generateEnemiesHelper(80, WASTES_GENERATOR);
    }
    else if(MAP[row][index] === HOME) {
        enemiesToDisplay = generateEnemiesHelper(70, HOME_GENERATOR);
    }
    else if(MAP[row][index] === EGGNEST) {
        enemiesToDisplay = generateEnemiesHelper(70, EGGNEST_GENERATOR);
    }
    else if(MAP[row][index] === OTHERNEST) {
        enemiesToDisplay = generateEnemiesHelper(90, OTHERNEST_GENERATOR);
    }
    else {
        console.log("Error: unidentified biome. Check if -1 or some other number (generateEnemies)");
        enemiesToDisplay = [null, null, null, null];
    }
    
    if(enemiesToDisplay.length !== 0) {
       displayEnemies(enemiesToDisplay);
    }
    else {
        console.log("Warning: No enemies (generateEnemies).");
    }

    // eh, needed for reloadEnemies
    if(enemiesToDisplay.length !== 0) {
        return enemiesToDisplay;
    }
    
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
        alert("You win!");
    }
    else {
        alert("You lose!");
    }
}

/***** UI Stuff *****/

function moveMapMarker(newRow, newIndex) {
    console.log("Moving display to here: " + newIndex + ", " + newRow + " (moveMapMarker)");
    
    // clear current position's marker
    $("#placemark").remove();
    
    // I hate the way jQuery selects indices; might just use JS in the future
    var newCoords = newRow*14 + newIndex;
    
    // change the location as you go to reveal the minimap
    changeLocationColor(newRow, newIndex);
    
    // display new position's marker
    $("#minimaptable td").eq(newCoords).html("<div id='placemark'></div>");
}

function changeLocationColor(row, index) {
    var coords = row*14 + index;
    var newColor = "";
    
    if(MAP[row][index] === FORESTEASY) {
        newColor = FORESTEASY_COLOR;
    }
    else if(MAP[row][index] === FORESTMED) {
        newColor = FORESTMED_COLOR;
    }
    else if(MAP[row][index] === FORESTHARD) {
        newColor = FORESTHARD_COLOR;
    }
    else if(MAP[row][index] === PLAINSEASY) {
        newColor = PLAINSEASY_COLOR;
    }
    else if(MAP[row][index] === PLAINSHARD) {
        newColor = PLAINSHARD_COLOR;
    }
    else if(MAP[row][index] === RIVER) {
        newColor = RIVER_COLOR;
    }
    else if(MAP[row][index] === SWAMPEASY) {
        newColor = SWAMPEASY_COLOR;
    }
    else if(MAP[row][index] === SWAMPHARD) {
        newColor = SWAMPHARD_COLOR;
    }
    else if(MAP[row][index] === WASTES) {
        newColor = WASTES_COLOR;
    }
    else if(MAP[row][index] === HOME) {
        newColor = HOME_COLOR;
    }
    else if(MAP[row][index] === EGGNEST) {
        newColor = EGGNEST_COLOR;
    }
    else if(MAP[row][index] === OTHERNEST) {
        newColor = OTHERNEST_COLOR;
    }
    else {
        console.log("Error: unidentified biome. Check if -1 or some other number (changeLocationColor)");
        newColor = UNIDENTIFIED_COLOR;
    }
    
    $("#minimaptable td").eq(coords).css("background-color", newColor);
}

/*
 * Set an enemy's info (name, bars) in the gui.
 * 
 * @param {type} location
 * @param {type} enemy
 * @returns {undefined}
 */
function displayEnemyBars(location, enemy) {    
    var dangerPercent = calculateEnemyDamage(enemy)/1;
    var agilityPercent = calculateEnemyAgility(enemy)/1;
    var energyPercent = calculateEnemyEnergy(enemy)/1;
    
    console.log("Sizebar percentage: " + dangerPercent + " (displayEnemyBars)");
    
    // sizebar color
    if(dangerPercent <= LOWPERCENT) {
        $(location + ">.stats>.enemysize>.sizebar").css("background-color", "lime");
    }
    else if(dangerPercent < LOWPERCENT && dangerPercent >= HIGHPERCENT) {
        $(location + ">.stats>.enemysize>.sizebar").css("background-color", "yellow");
    }
    else {
        $(location + ">.stats>.enemysize>.sizebar").css("background-color", "red");
    }
    
    console.log("Agility percentage: " + agilityPercent + " (displayEnemyBars)");
    
    // agilitybar color
    $(location + ">.stats>.enemyagility>.agilitybar").css("background-color", "lime");
    
    console.log("Energybar percentage: " + energyPercent + " (displayEnemyBars)");
    
    // energybar color
    $(location + ">.stats>.enemyenergy>.energybar").css("background-color", "lime");
    
    if(dangerPercent > 100) {
        dangerPercent = 100;
    }
    if(agilityPercent > 100) {
        agilityPercent = 100;
    }
    if(energyPercent > 100) {
        energyPercent = 100;
    }
    
    var nameLocation = location + ">.enemyname";
    var dangerLocation = location + ">.stats>.enemysize>.sizebar";
    var agilityLocation = location + ">.stats>.enemyagility>.agilitybar";
    var energyLocation = location + ">.stats>.enemyenergy>.energybar";
    
    
    
    $(nameLocation).html(enemy.name);
    $(dangerLocation).css("width", dangerPercent);
    $(agilityLocation).css("width", agilityPercent);
    $(energyLocation).css("width", energyPercent);
}

function displayEnemies(enemies) {
    
    console.log("Enemies to display: ");
    for(var i = 0; i < 4; i++) {
        if(enemies[i] != null) {
            console.log("\t" + enemies[i].name);
        }
        else {
            console.log("\t" + "null");
        }
    }
    
    var toDisplay = Array();
    var enemyCounter = 1;

    for(var i = 0; i < 4; i++) {
        var enemyVar = "enemy" + (enemyCounter);
        if(enemies[i]) {
            window[enemyVar] = enemies[i];
            console.log("enemyVar: " + enemyVar);
            toDisplay.push(enemies[i]);
            enemyCounter++;
        }
    }
    
    console.log("toDisplay's length: " + toDisplay.length + " (displayEnemies)");
    
    // fill up remaining space with nulls (necessary??)
    for(var i = toDisplay.length; i < 4; i++) {
        var enemyVar = "enemy" + (enemyCounter);
        console.log("null enemyVar: " + enemyVar);
        window[enemyVar] = null;
        toDisplay.push(null);
        enemyCounter++;
    }
    
    
    if(toDisplay[0] !== null) {
        displayEnemyBars("#enemy1>.desc", toDisplay[0]);
        $("#enemy1").css("display", "inline-block");
    }
    else {
        $("#enemy1").css("display", "none");
    }
    
    if(toDisplay[1] !== null) {
        displayEnemyBars("#enemy2>.desc", toDisplay[1]);
        $("#enemy2").css("display", "inline-block");
    }
    else {
        $("#enemy2").css("display", "none");
    }
    
    if(toDisplay[2] !== null) {
        displayEnemyBars("#enemy3>.desc", toDisplay[2]);
        $("#enemy3").css("display", "inline-block");
    }
    else {
        $("#enemy3").css("display", "none");
    }
    
    if(toDisplay[3] !== null) {
        displayEnemyBars("#enemy4>.desc", toDisplay[3]);
        $("#enemy4").css("display", "inline-block");
    }
    else {
        $("#enemy4").css("display", "none");
    }
    
}

$(document).ready(function() { 
    
    // display home
    changeLocationColor(currentLocation.row, currentLocation.index);
    
    /*
     * Compass click
     */
    $(".direction").click(function() {
        console.log("Compass click: " + this.id);
        var newPos = move(this.id);
        moveMapMarker(currentLocation.row, currentLocation.index);
        generateEnemies(currentLocation.row, currentLocation.index);
        
        // Prints a description to top div
        createDescription();
        pb.flushBuffer();
    });
    
    /*
     * Attack click
     */
    $(".attack").click(function() {
        writeLocationDescription(currentLocation.row, currentLocation.index);

        console.log("Attacking " + this.parentNode.parentNode.id);
        attack(window[this.parentNode.parentNode.id]);
        
        // TODO: make it so some enemies remain?
        writeReloadDescription(window[this.parentNode.parentNode.id], enemies);
        
        pb.flushBuffer();
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
    
    $(document).keypress(function(e) {
    if(e.keyCode === 38) {
        console.log("Keypress: up");
    }
    if(e.keyCode === 40) {
        console.log("Keypress: down");
    }
    if(e.keyCode === 37) {
        console.log("Keypress: left");
    }
    if(e.keyCode === 39) {
        console.log("Keypress: right");
    }
});
    
});

/***** Strings *****/

function ParagraphBuffer() {
    // Strings that make up the paragraph. Deliminated by <br><br> tags.
    this.cache = Array();
    
    // flush the buffer and print to 
    this.flushBuffer = function flushBuffer() {
        var newDescString = "";
        for(var i = 0; i < (this.cache.length - 1); i++) {
            newDescString = newDescString + this.cache[i] + "<br><br>";
        }
        // once more to prevent extra <br><br>
        newDescString = newDescString + this.cache[i];
        
        // print
        console.log("Flushing: wrote this: " + newDescString);
        $("#locationdesc").html(newDescString);
        
        // remove everything if necessary
        this.cache.length = 0;
    };
    
    // write a string to the buffer
    this.writeBuffer = function writeBuffer(newString) {
        console.log("Wrote to buffer: " + newString + " (ParagraphBuffer.writeBuffer)");
        this.cache.push(newString);
    };
}

function createDescription() {
    writeLocationDescription(currentLocation.row, currentLocation.index);
    
    if(currentLocation.biome !== RIVER) {
        writeRiverBorder();
    }
    
    writeEnemyDescription();
    
    writeEggDescription(currentLocation.row, currentLocation.index);
}

function writeLocationDescription(row, index) {
    var description = "";
    
    switch(MAP[row][index]) {   // TODO
        case FORESTEASY: description = FORESTEASY_DESC;
            break;
        case FORESTMED: description = FORESTMED_DESC;
            break;
        case FORESTHARD: description = FORESTHARD_DESC;
            break;
        case PLAINSEASY: description = PLAINSEASY_DESC;
            break;
        case PLAINSHARD: description = PLAINSHARD_DESC;
            break;
        case RIVER: description = RIVER_DESC;
            break;    
        case SWAMPEASY: description = SWAMPEASY_DESC;
            break;
        case SWAMPHARD: description = SWAMPHARD_DESC;
            break;
        case WASTES: description = WASTES_DESC;
            break;
        case HOME: description = HOME_DESC;
            break;
        case EGGNEST: description = EGGNEST_DESC;
            break;
        case OTHERNEST: description = OTHERNEST_DESC;
            break;
        default:
            console.log("Error: no description available for biome (writeLocationDescription)");
    }
    
    pb.writeBuffer(description);
}

/**
 * NOTE: Assumes that generateEnemies has been called prior to this
 * Puts "another" in front of an enemy that was just eaten.
 * 
 * @param {type} lastEnemy
 * @param {type} enemyList
 * @returns {undefined}
 */
function writeReloadDescription(lastEnemy) {
    // the index at which the lastEnemy is present; -1 if none are the same
    var sameIndex = -1;
    
    // bottom is nearly identical to writeEnemyDescription
    var description = "You see ";
    
    var enemyList = Array();
    
    // remove null enemies
    if(enemy1) {
        enemyList.push(enemy1);
    }
    if (enemy2) {
        enemyList.push(enemy2);
    }
    if (enemy3) {
        enemyList.push(enemy3);
    }
    if(enemy4) {
        enemyList.push(enemy4);
    }
    
    // loop through the array of new enemies to see if any are the same as the old
    for(var i = 0; i < enemyList.length; i++) {
        console.log("Currently at enemy " + i + ": " + enemyList[i]);
        if(lastEnemy != null && enemyList[i] != null && lastEnemy.name === enemyList[i].name) {
            sameIndex = i;
        }
    }
    
    if(enemyList.length === 0) {
        description = "You see nothing of interest.";
    }
    else if(enemyList.length === 1) {
        if(sameIndex === 0) {
            description = description + "another " + window[enemyList[0].name.toUpperCase()].name + ".";
        }
        else {
            description = description + window[enemyList[0].name.toUpperCase()].name + ".";
        }   
    }
    else if(enemyList.length === 2) {
        if(sameIndex === 0) {
            description = description + "another " + window[enemyList[0].name.toUpperCase() + "_DESC"] + " and " + window[enemyList[1].name.toUpperCase() + "_DESC"] + ".";
        }
        else if(sameIndex === 1) {
            description = description + window[enemyList[0].name.toUpperCase() + "_DESC"] + " and another " + window[enemyList[1].name.toUpperCase() + "_DESC"] + ".";    
        }
        else {
            description = description + window[enemyList[0].name.toUpperCase() + "_DESC"] + " and " + window[enemyList[1].name.toUpperCase() + "_DESC"] + "."; 
        }
    }
    else {
        for(var i = 0; i < (enemyList.length - 1); i++) {
            console.log(enemyList[i].name.toUpperCase() + "_DESC");
            
            // add the "another"
            if(sameIndex === i) {
                description = description + "another ";
            }
            
            description = description + window[enemyList[i].name.toUpperCase() + "_DESC"] + ", ";
        }
        // ... and ....
        console.log(enemyList[enemyList.length - 1].name.toUpperCase() + "_DESC");
        if(sameIndex === enemyList.length - 1) {
            description = description + "another ";
        }
        description = description + "and " + window[enemyList[enemyList.length - 1].name.toUpperCase() + "_DESC"] + ".";
    }
    
    console.log("Write: wrote to buffer: " + description);
    pb.writeBuffer(description);
}

function writeEnemyDescription() {
    var description = "You see ";
    
    var enemyList = Array();  // TODO: ... replace with code block from enemy generator
    
    if(enemy1) {
        enemyList.push(enemy1);
    }
    if (enemy2) {
        enemyList.push(enemy2);
    }
    if (enemy3) {
        enemyList.push(enemy3);
    }
    if(enemy4) {
        enemyList.push(enemy4);
    }
    
    if(enemyList.length === 0) {
        description = "You see nothing of interest.";
    }
    else if(enemyList.length === 1) {
        description = description + window[enemyList[0].name.toUpperCase() + "_DESC"] + ".";
    }
    else if(enemyList.length === 2) {
        description = description + window[enemyList[0].name.toUpperCase() + "_DESC"] + " and " + window[enemyList[1].name.toUpperCase() + "_DESC"] + "."; 
    }
    else {
        for(var i = 0; i < (enemyList.length - 1); i++) {
            console.log(enemyList[i].name.toUpperCase() + "_DESC");
            description = description + window[enemyList[i].name.toUpperCase() + "_DESC"] + ", ";
        }
        // ... and ....
        console.log(enemyList[enemyList.length - 1].name.toUpperCase() + "_DESC");
        description = description + "and " + window[enemyList[enemyList.length - 1].name.toUpperCase() + "_DESC"] + ".";
    }
    
    console.log("Write: wrote to buffer: " + description);
    pb.writeBuffer(description);
}

function writeEggDescription(row, index) {
    if(row === 4 && index === 0) {   // TODO: make specific to each nest
        pb.writeBuffer("You see " + eggsNorthCount + " eggs in the nest. Eat one?");
    }
    if(row === 13 && index === 7) {
        pb.writeBuffer("You see " + eggsSouthCount + " eggs in the nest. Eat one?");
    }
}

function writeRiverBorder() {
    var borders = isBorderingRiver(currentLocation.row, currentLocation.index);
    var description = "You hear rushing water to the ";
    
    if(borders.length > 2) {
        for(var i = 0; i < (borders.length - 1); i++) {
            description = description + borders[i] + ", ";
        }
        description = description + "and " + borders[borders.length - 1] + ".";
        pb.writeBuffer(description);
    }
    else if(borders.length === 1) {
        description = description + borders[0];
        pb.writeBuffer(description + ".");
    }
    else if(borders.length === 2) {
        description = description + borders[0] + " and " + borders[1] + ".";
        pb.writeBuffer(description);
    }
    else {
        console.log("No bordering rivers (writeRiverBorder)");
    }
    
}

function writeFlee(enemy) {
    var fleeMessage = "The " + enemy.name.toLowerCase() + " flees.";
    
    pb.writeBuffer(fleeMessage);
}

function writeAttack(enemy, damage) {
    var struggle = "There is a struggle and you are injured.";
    var attackMessage = "You attack and eat the " + enemy.name.toLowerCase() + ".";
    
    if(damage > 0) {
        attackMessage = attackMessage + " " + struggle;
    }
    
    pb.writeBuffer(attackMessage);
}
/***** Tests *****/

function testAttack() {
    
}

function testIsBorderingRiver() {    
    console.log(isBorderingRiver(0, 1)); // E
    console.log(isBorderingRiver(1, 0)); // none
    console.log(isBorderingRiver(2, 3)); // S, W
    console.log(isBorderingRiver(6, 10)); // N, S, E
}

// should display BEETLE and MILLIPEDE at a roughly 50:50 rate.
function testRandomEnemyGenerator() {
    var testList = [{"enemy":BEETLE, "probability":50}, {"enemy":MILLIPEDE, "probability":50}];
    console.log("Enemy returned:" + randomEnemyGenerator(testList).name);
}

function testWriteEnemyDescription() {
    var list = [BEETLE, MILLIPEDE, SCORPION, DRAGONFLY];
    writeEnemyDescription(list);
    pb.flushBuffer();
}

function testWriteRiverBorder() {
    writeRiverBorder();
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
            console.log("Enemy returned: " + list[i].enemy.name);
            return list[i].enemy;
        }
    }
    console.log("Error: Hit end of list before making decision, returning final enemy instead (randomEnemyGenerator)");
    return list[list.length - 1].enemy;   // emergency return last element
}

