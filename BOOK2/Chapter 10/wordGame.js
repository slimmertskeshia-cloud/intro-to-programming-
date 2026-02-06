let replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener('click', replaceIt);
function replaceIt() {
    let storyDiv = document.getElementById("story");
    let adj1 = "<span class='replacement'>" + document.getElementById('adj1').value + '</span>';
    let verbING = "<span class='replacement'>" + document.getElementById('verbIng').value + '</span>';
    let roomInHouse = "<span class='replacement'>" + document.getElementById('roomInHouse').value + '</span>';
    let color = "<span class='replacement'>" + document.getElementById('color').value + '</span>';
    let nounPlural = "<span class='replacement'>" + document.getElementById('nounPlural').value + '</span>';
    let pastVerb = "<span class='replacement'>" + document.getElementById('pastVerb').value + '</span>';
    let beverage = "<span class='replacement'>" + document.getElementById('beverage').value + '</span>';
    let musicType = "<span class='replacement'>" + document.getElementById('musicType').value + '</span>';
    let diffRoom = "<span class='replacement'>" + document.getElementById('diffRoom').value + '</span>';
    let exclamation = "<span class='replacement'>" + document.getElementById('exclamation').value + '</span>';
    let pastVerb2 = "<span class='replacement'>" + document.getElementById('pastVerb2').value + '</span>';
    let adjDance = "<span class='replacement'>" + document.getElementById('adjDance').value + '</span>';
    let animal = "<span class='replacement'>" + document.getElementById('animal').value + '</span>';
    let home = "<span class='replacement'>" + document.getElementById('home').value + '</span>';
    let verb = "<span class='replacement'>" + document.getElementById('verb').value + '</span>';
    /* Insert more variable definitions here */
    
    let theStory = "<h1>keishas house warming Party</h1> ";
    theStory += 'One ' + adj1 + ' day, ';
    theStory += 'keisha moved out  ' + verbING;
    theStory += ' of her  ' + roomInHouse;
    theStory += ', parents house ' + color + ' ' + nounPlural + '.<br></br>';
    theStory += ' As she ' + pastVerb + ' and here' + beverage + ', ';
    theStory += 'big girl money' + musicType + ' bought her new home. <br></br>';
    theStory += 'she had all her friends over ' + diffRoom + '.<br></br> ';
    theStory += exclamation + '! they brought gifts, ';
    theStory += 'she was  ' + pastVerb2 + ' so happy to see them.<br></br>';
    theStory += adjDance + ' party.<br></br>';
    theStory += 'kiesha danced ' + animal + ' all night, ';
    theStory += 'celebrated and' + home  + 'got drunk,';
    theStory += 'thanked all here friends for joining her ' + verb + '.';

    /* Put the rest of the story here, using the += operator */
    storyDiv.innerHTML = theStory;
}