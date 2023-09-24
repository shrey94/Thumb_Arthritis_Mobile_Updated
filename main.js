

//REPS FOR EXERCISES
var seconds = 0;
var el = document.getElementById('counter');
// var ispaused = false;

function incrementSeconds() {
  var page_name_array = ((window.location.href).split('/'));
  var page_index = (page_name_array[page_name_array.length-1]);
  console.log(page_index);
  seconds += 1;
  el.innerText = "Reps: " + seconds + " /30";
  // console.log(seconds);
  if (seconds >29.5){
    if(page_index =='Pointer_Finger_Exercise_Easy.html'){
      window.location.href = 'Completion_PFE_Page.html';

      clearInterval(timer);
    }
    if (page_index =='Pointer_Finger_Exercise_Difficult.html'){

      window.location.href = 'Completion_PFE_Page.html';
      clearInterval(timer);
    }
    if (page_index=='Thumb_Extension_Exercise.html') {
    window.location.href = 'Completion_TEE_Page.html';
    clearInterval(timer);

    }
  }
}
var timer = setInterval(incrementSeconds, 2400);

// if (ispaused==false){
//     setInterval(incrementSeconds, 2500);
// }
//MODAL HIDE SHOW
var pfe_video = document.getElementById('PF_Ex');


var modal = document.getElementById("myModal");
console.log(modal);
// Get the button that opens the modal
var PB = document.getElementById("Pause_Button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var cont_exercise =  document.getElementById("Cont_Ex");


// function ContinueExercise(event){
//     console.log(event.target);
//     modal.style.display="none";
//     pfe_video.load();
//   timer = setInterval(incrementSeconds, 2500);
//   console.log(event);

// }
// When the user clicks the button, open the modal 
PB.onclick = function(){
  modal.style.display = "block";
  pfe_video.pause();

  // ispaused=true;
  clearInterval(timer);
  console.log(seconds);
  console.log(event);
}

// When the user clicks on <span> (x), close the modal
// span.onclick = ContinueExercise;
// window.onclick = ContinueExercise;

// function(event) {
//   modal.style.display = "none";
//   pfe_video.load();
//   timer = setInterval(incrementSeconds, 2500);
//   console.log(event);

//   // ispaused=false;
//   console.log(seconds);
// }

span.onclick = function() {
  modal.style.display = "none";
  pfe_video.load();
  timer = setInterval(incrementSeconds, 2400);
  console.log(event);

  // ispaused=false;
  console.log(seconds);
}

cont_exercise.onclick = function() {
  modal.style.display = "none";
  pfe_video.load();
  timer = setInterval(incrementSeconds, 2400);
  console.log(event);

  // ispaused=false;
  console.log(seconds);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    pfe_video.load();
    timer = setInterval(incrementSeconds, 2400);
    // ispaused=false;
    console.log(seconds);
  }
}










