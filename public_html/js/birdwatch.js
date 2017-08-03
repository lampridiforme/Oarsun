/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// total number of units I have currently
var runningTotal = 0;
// cumulative total for units
var cumulativeTotal = 0;
// total number of unique elements seen
var uniqueRunningTotal = 0;
// increment for each click
var clickmeUpcount = 1;
// number of clicks the user has made
var clickTotal = 0;
// increment per second from the autotools
var autoUpcount = 0;

// if total rewards have been unlocked
var unlockedtotal1 = false;
var unlockedtotal100 = false;

// if click rewards have been unlocked
var unlockedclick1 = false;

// how much item1 costs currently
var item1cost = 10;
// rate of increase by item1
var item1rate = .1;
// number of item1s
var item1quantity = 0;

// how much item2 costs currently
var item2cost = 150;
// rate of increase by item2
var item2rate = 1;
// number of item2s
var item2quantity = 0;

// how much item3 costs currently
var item3cost = 1200;
// rate of increase by item3
var item3rate = 5;
// number of item3s
var item3quantity = 0;

function displayTotal() {
    $(".totalcount").text(Math.floor(runningTotal) + " birds attracted (" 
        + uniqueRunningTotal + " unique)");
}

function displayRate() {
    if(autoUpcount == 1) {
        $(".rate").text("Attracting " + autoUpcount + " bird per second");
    }
    else {
        $(".rate").text("Attracting " + Math.round(autoUpcount*10)/10 
            + " birds per second");   
    }
}

function displayNewEntry() {
    
}

function displayNewCostItem1() {
    // TODO: figure out how to save original text and then use it
    $("#shopitem1price").text("Costs " + Math.round(item1cost));
}

function displayItem1Quantity() {
    $("#shopitem1quantity").text("You have " + item1quantity + ", attracting " 
        + Math.round(item1quantity*item1rate*10)/10 + " bps.");
}

function displayNewCostItem2() {
    // TODO: figure out how to save original text and then use it
    $("#shopitem2price").text("Costs " + Math.round(item2cost));
}

function displayItem2Quantity() {
    $("#shopitem2quantity").text("You have " + item2quantity + ", attracting " 
        + Math.round(item2quantity*item2rate*10)/10 + " bps.");
}

function displayNewCostItem3() {
    // TODO: figure out how to save original text and then use it
    $("#shopitem3price").text("Costs " + Math.round(item3cost));
}

function displayItem3Quantity() {
    $("#shopitem3quantity").text("You have " + item3quantity + ", summoning " 
        + Math.round(item3quantity*item3rate*10)/10 + " bps.");
}

function calcNewCost(originalcost) {
    var newcost = originalcost * 1.5;
    return newcost;
}

function autoUpdate() {
    runningTotal = runningTotal+(autoUpcount/100);
    cumulativeTotal = runningTotal;
    achievementChecker(runningTotal, clickTotal, item1quantity, item2quantity, 
        item3quantity);
    displayTotal();
}

function clearAttractAnnounce(bird) {
    var snip = $(".announcement").text();
    snip = snip.substring(25, (snip.length-1));
    if(snip == bird) {
        $(".announcement").html("");
    }
}

function achievementChecker(total, clicks, item1, item2, item3) {
    switch(true) {
        case (total >= 1000000):
            //$("#entry10").html("").css("cursor", "pointer");
            break;
        case (total >= 50000):
            //$("#entry9").html("").css("cursor", "pointer");
            break; 
        case (total >= 25000):
            //$("#entry8").html("").css("cursor", "pointer");
            break;
        case (total >= 10000):
            //$("#entry7").html("").css("cursor", "pointer");
            break; 
        case (total >= 5000):
            //$("#entry6").html("").css("cursor", "pointer");
            break;
        case (total >= 2000):
            //$("#entry5").html("").css("cursor", "pointer");
            break;
        case (total >= 700):
            //$("#entry4").html("").css("cursor", "pointer");
            break;
        case (total >= 500):
            //$("#entry3").html("").css("cursor", "pointer");
            break;
        case (total >= 100 && !unlockedtotal100):
            $("#entry2").html("Potoo").css("cursor", "pointer");
            $(".announcement").text("You attracted your first potoo!");
            unlockedtotal100 = true;
            uniqueRunningTotal++;
            break;
        case (total >= 1 && !unlockedtotal1):
            $("#entry1").html("Pigeon").css("cursor", "pointer");
            $(".announcement").text("You attracted your first pigeon!");
            unlockedtotal1 = true;
            uniqueRunningTotal++;
            break;    
        default:
            // nothing
    }
    
    switch(true) {
        case (item1 >= 1):
            // TODO
            // uniqueRunningTotal++;
            break;
    }
}

// seconds elapsed since page load
/*
var time = 0;
function debugTimer() {
    time++;
    $(".shoptitle").text(time);
}
*/

// for our intents and purposes, the main function
$(document).ready(function() {
    
    setInterval(autoUpdate, 10); // TODO: 3rd party script allows tab out to be accurate
    //setInterval(debugTimer, 1000);
    
    // when the main clickable element is clicked
    $(".mainclick").click(function() {
        runningTotal += clickmeUpcount;
        cumulativeTotal += clickmeUpcount;
        clickTotal++;
        $(".mainclick>img").fadeTo(50, .7);
        $(".mainclick>img").fadeTo(50, 1.0);
        //var rand = Math.floor(Math.random() * 360);
        achievementChecker(runningTotal, clickTotal, item1quantity, 
            item2quantity, item3quantity);
        displayTotal();
    });
    
    // bird feeder
    $("#shopitem1").click(function() {
        if(runningTotal-item1cost >= 0) {
            runningTotal -= item1cost;
            item1cost = calcNewCost(item1cost);
            autoUpcount += item1rate;
            item1quantity++;
            displayItem1Quantity();
            displayRate();
            displayTotal();
            displayNewCostItem1();
        }
    });
    
    // birdbath
    $("#shopitem2").click(function() {
        if(runningTotal-item2cost >= 0) {
            runningTotal -= item2cost;
            item2cost = calcNewCost(item2cost);
            autoUpcount += item2rate;
            item2quantity++;
            displayItem2Quantity();
            displayRate();
            displayTotal();
            displayNewCostItem2();
        }
    });
    
    // magician
    $("#shopitem3").click(function() {
        if(runningTotal-item3cost >= 0) {
            runningTotal -= item3cost;
            item3cost = calcNewCost(item3cost);
            autoUpcount += item3rate;
            item3quantity++;
            displayItem3Quantity();
            displayRate();
            displayTotal();
            displayNewCostItem3();
        }
    });
    
    $(".entryclose").click(function() {
        $(".entryimage, .entryinfo, .entryclose").fadeOut(200); 
    });
    
    $("li").click(function() {
       //$(".entryimage, .entryinfo, .entryclose").css("display", "block"); 
       var species = $(this).text().toLowerCase().trim();
       // image source
       var img = "img/birdwatch/" + species + ".png";
       // text entry
       var text = $('.' + species).text();
       $(".entryimage>img").attr("src", img);
       $(".entryinfo").text(text);
       $(".entryimage, .entryinfo, .entryclose").fadeIn(200);
       clearAttractAnnounce(species);
    });
    
});

