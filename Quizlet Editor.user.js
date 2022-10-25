// ==UserScript==
// @name         Quizlet Editor
// @match        http*://www.quizlet.com/explanations/textbook-solutions/*
// @match        http*://quizlet.com/explanations/textbook-solutions/*
// @version      0.2
// @description  Remove paywall for Quizlet answers
// @author       troop129 + josephyooo
// @grant        none
// @run-at  document-end
// ==/UserScript==
window.addEventListener('load', function() {
    'use strict';
    var paywall = document.getElementsByClassName('wugyavo');
    if(paywall.length != 0){
        paywall[0].remove();
        document.getElementsByClassName('ExplanationSolutionsContainer hnqbbas s1oluvjw')[0].style.overflow="visible";
        let newHeight = document.getElementsByClassName('ExplanationsSolutionCard c5ngj6s')[0].offsetHeight;
        document.getElementsByClassName('mv7e89c')[0].style.minHeight=newHeight+"px";
    }
}, false);
