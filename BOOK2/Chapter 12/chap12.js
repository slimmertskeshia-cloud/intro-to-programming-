var trainSpeed = 250;
var trainPosition = 20;
var animation;

var train = document.getElementById("bus");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopBus);

function speedUp() {
    if (busSpeed > 50) {
        busSpeed -= 50;
    }
    console.log("bus speed: " + busSpeed);

    clearInterval(animation);
    animation = setInterval(frame, busSpeed);


    function frame() {
        busPosition += 2;
        bus.style.left = busPosition + 'px';
        console.log(busPosition);
        checkPosition(busPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 260) {
        alert("OOOOO!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
     if (busPosition < 260) {
        clearInterval(animation);
    }
}