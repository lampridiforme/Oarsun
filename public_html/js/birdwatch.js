/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var runningTotal = 0;
var clickmeUpcount = 1;
var autoUpcount = 0;

var item1cost = 10;

// placeholder for dynamic upcounting
function displayTotal() {
    $(".totalcount").html(runningTotal);
}

function displayRate() {
    $(".rate").html(autoUpcount + " birds seen per second.");
}

function displayNewCost(item) {
    // TODO: figure out how to save original text and then use it
    //$(item).html()
}

function calcNewCost(originalcost) {
    var newcost = originalcost * 1.5;
    return newcost;
}

$(document).ready(function() {
    
    // when the main clickable element is clicked
    $(".mainclick").click(function() {
        runningTotal += clickmeUpcount;
        displayTotal();
    });
    
    // when shop item is clicked
    $(".shopitem1title").click(function() {
        if(runningTotal-item1cost >= 0) {
            runningTotal -= item1cost;
            var newCost = calcNewCost(item1cost);
            // display here
            //debug
            $(".shopitem1desc").html("new price is " + item1cost);
        }
    });
});

