ocument.getElementById("lefteye").style.backgroundColor = "darkblue";
document.getElementById("head").style.transform = "rotate(15deg)";
// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px blacksolid";
// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "#0c020c";
// Change the text color.
document.getElementById("body").style.color = "#f30d0d";
// Give Douglas hair.
document.getElementById("head").style.borderTop = "15px black solid";

// var rightEye = document.getElementById("righteye");
// rightEye.addEventListener("click", moveUpDown);

// function moveUpDown(e) {
//     var robotPart = e.target;0
//     var top = 0;
//     var id = setInterval(frame, 10) // draw every 10ms

//     function frame() {
//         robotPart.style.top = top + '%';
//         top++;
//         if (top === 20) {
//             clearInterval(id);
//         }
//     }
// }

// var leftArm = document.getElementById("leftarm");
// leftArm.addEventListener("click", moveRightLeft);

// function moveRightLeft(e) {
//     var robotPart = e.target;
//     var left = 0;
//     var id = setInterval(frame, 10) // draw every 10ms
//     function frame() {
//         robotPart.style.left = left + '%';
//         left++;
//         if (left === 70) {
//             clearInterval(id);
//         }
//     }
// }