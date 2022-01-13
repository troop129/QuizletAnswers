# Quizlet Explanations Unlocker

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?style=for-the-badge)](https://github.com/troop129/QuizletAnswers/blob/master/LICENSE)
![Size](https://img.shields.io/github/languages/code-size/troop129/QuizletAnswers?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)


Ever since Quizlet bought Slader and locked the community-made answers behind a paywall, thousands of high school students have been unable to access the files they need to complete their homework. In order to remedy this situation, I have created a simple Tampermonkey script that will bypass the paywall in an account that is not logged in.

This is purely for educational purposes (quite literally) and if you want me to take this down I shall. Please contact me through this [email](mailto://quizletscraper@gmail.com). 

## Installation

For now, this is a Tampermonkey script that will run in the browser. In order to install this script, download and add [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) to your web browser (script only tested on Chrome).

![Installation](https://i.imgur.com/53oY3vt.gif)

After installing Tampermonkey, a new tab will open. You can click out of that. 

The easiest way to install the script is to copy and paste the script from this repo into Tampermonkey. You can also drag and drop it if you download it directly from the repo, the file is named["Quizlet Answers.user.js"](https://github.com/troop129/QuizletAnswers/blob/main/Quizlet%20Editor.user.js). 

```javascript
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
```

Do this by opening the extensions menu, then clicking on "Create a new script". You can drag and drop here (after clearing the screen) or select all, delete, and copy-paste. 

Then press "Ctrl + S" to save and it should automatically be activated.


![Installation p2](https://i.imgur.com/XljMDto.gif)

## Usage
THIS SCRIPT WILL NOT WORK WITH A LOGGED IN ACCOUNT!! Use incognito mode or another chrome profile where you are not logged in. Quizlet does not show the preview for the answers when you are logged in, so we cannot scrape it. You can enable this extension in incognito by right-clicking > "Manage Extensions" > "Allow in Incognito". I would recommend pinning Tampermonkey for easy access.

![Enabling Incognito](https://i.imgur.com/h5FcT9p.gif)

In order to use this extension, just go to the page you would like the answers for and wait. In order to get the right `<div>` tags we have to wait for the page to fully load. 

![Free Answers](https://i.imgur.com/mXzytpp.gif)

## How?
If you look at the Chrome Console, the HTML for the Quizlet answers page has two interesting parts for us. `<div class="wugyavo">` and `<div class="hs7m9cv s1oluvjw">`.

![wugyyavo](https://i.imgur.com/Aph6fbf.png)
This div contains the paywall itself, which we can just delete with the following code:
```javascript
 var paywall = document.getElementsByClassName('wugyavo');
 paywall[0].remove();
```
What remains is the snippet of answer (now helpfully unblurred) but most likely cut off, as you can see in the snippet below. 

![hs7m9cv s1oluvjw](https://i.imgur.com/vDlbva8.png)

In order to solve this, we can add some styling to the `hs7m9cv s1oluvjw` tag, which contains the answer. This will allow it to scroll and although it is not visually pleasing, it is functional.
```javascript
document.getElementsByClassName('hs7m9cv s1oluvjw')[0].style.overflow="scroll";
```
As you can see, the script appends the `overflow:scroll` tag. What would be more pleasing to the eye and look better is to delete the `max-height` property, which would free the constraints of the box and not need the overflow.

![HTML after edit](https://i.imgur.com/064JBUU.png)

## Next Steps
I would like to implement the previously discussed `max-height` fix, as well as drop the Tampermonkey requirement in support of a fully custom chrome extension. If you would like to help with this, feel free to reach out. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://github.com/troop129/QuizletAnswers/blob/main/LICENSE)
