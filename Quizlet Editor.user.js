// ==UserScript==
// @name         Quizlet Editor
// @match        http*://www.quizlet.com/explanations/textbook-solutions/*
// @match        http*://quizlet.com/explanations/textbook-solutions/*
// @version      0.1
// @description  Remove paywall for Quizlet answers
// @author       troop129
// @grant        none
// @run-at  document-end
// ==/UserScript==

window.addEventListener('load', function() {
    'use strict';
    var paywall = document.getElementsByClassName('wugyavo');
    if(paywall.length != 0){
        paywall[0].remove();
        document.getElementsByClassName('hs7m9cv s1oluvjw')[0].style.overflow="scroll";
    }
}, false);