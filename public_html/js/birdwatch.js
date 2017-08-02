/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// total number of units I have currently
var runningTotal = 0;
// total number of unique elements seen
var uniqueRunningTotal = 0;
// increment for each click
var clickmeUpcount = 1;
// increment per second from the autotools
var autoUpcount = 0;
// how much item1 costs currently
var item1cost = 10;
// rate of increase by item1
var item1rate = .5;

// placeholder for dynamic upcounting
function displayTotal() {
    $(".totalcount").text("About " + Math.round(runningTotal) + " birds attracted (" + uniqueRunningTotal + " unique)");
}

function displayRate() {
    if(autoUpcount <= 1) {
        $(".rate").text("Attracting about " + Math.round(autoUpcount) + " bird per second.");
    }
    else {
        $(".rate").text("Attracting " + autoUpcount + " birds per second.");   
    }
}

function displayNewCostItem1() {
    // TODO: figure out how to save original text and then use it
    $(".shopitem1price").text("Costs " + Math.round(item1cost));
}

function calcNewCost(originalcost) {
    var newcost = originalcost * 1.5;
    return newcost;
}

function autoUpdate() {
    runningTotal = runningTotal+(autoUpcount/100);
    displayTotal();
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
        displayTotal();
    });
    
    // when shop item is clicked
    $(".shopitem1").click(function() {
        if(runningTotal-item1cost >= 0) {
            runningTotal -= item1cost;
            item1cost = calcNewCost(item1cost);
            autoUpcount += item1rate;
            displayRate();
            displayTotal();
            displayNewCostItem1();
        }
    });
    
});

