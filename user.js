// ==UserScript==
// @name         TYT CLAN SCRIPT HOTKEYS
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Sets show mass and dark theme to true, provides a tricksplit with Z, triplesplit with T, doublesplit with G or 2, faster feeding with Q, and split with 1
// @author       ReaperYT
// @match        http://abs0rb.me/*
// @match        http://agar.io/*
// @match        http://agarabi.com/*
// @match        http://agarly.com/*
// @match        http://en.agar.bio/*
// @match        http://agar.pro/*
// @match        http://agar.biz/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
var Feed = false;
var Dingus = false;
var imlost = 25;
document.getElementById("instructions").innerHTML += "<center><span class='text-muted'><span data-itr='instructions_e'> Press <b>Z</b> to split into 16</span></span></center>";
document.getElementById("instructions").innerHTML += "<center><span class='text-muted'><span data-itr='instructions_3'> Press <b>T</b> to split into 8</span></span></center>";
document.getElementById("instructions").innerHTML += "<center><span class='text-muted'><span data-itr='instructions_d'> Press <b>G</b> to split 4</span></span></center>";
document.getElementById("instructions").innerHTML += "<center><span class='text-muted'><span data-itr='instructions_q'> Press and hold <b>Q</b> for macro feed</span></span></center>";
load();
function load() {
    if (document.getElementById("overlays").style.display!="none") {
        document.getElementById("settings").style.display = "block";
        if (document.getElementById('showMass').checked) {document.getElementById('showMass').click();}
        document.getElementById('showMass').click();
        if (document.getElementById('darkTheme').checked) {document.getElementById('darkTheme').click();}
        document.getElementById('darkTheme').click();
        // I changed the above because now agario 'remembers' your preferences, but doesn't actually work, so if they're already set to be true, you need to undo it, then re click to true
    } else {
        setTimeout(load, 100);
    }
} 
function keydown(event) {
    if (event.keyCode == 81) {
        Feed = true;
        setTimeout(fukherriteindapussie, imlost);
    } // Tricksplit
    if (event.keyCode == 90 || event.keyCode == 90) { //( ͡° ͜ʖ ͡°)
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
        setTimeout(ilikedick, imlost*4);
        setTimeout(ilikedick, imlost*5);
        setTimeout(ilikedick, imlost*6);
    } // Triplesplit
    if (event.keyCode == 84 || event.keyCode == 84) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
        setTimeout(ilikedick, imlost*4);
    } // Doublesplit
    if (event.keyCode == 71 || event.keyCode == 71) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
    } // Split
    if (event.keyCode == 49) {
        ilikedick();
    }
} // When Player Lets Go Of Q, It Stops Feeding
function keyup(event) {
    if (event.keyCode == 81) {
        Feed = false;
    }
    if (event.keyCode == 79) {
        Dingus = false;
    }
}
// Feed Macro With Q
function fukherriteindapussie() {
    if (Feed) {
        window.onkeydown({keyCode: 87});
        window.onkeyup({keyCode: 87});
        setTimeout(fukherriteindapussie, imlost);
    }
}
function ilikedick() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
//Looking through the code now are we? ( ͡° ͜ʖ ͡°)