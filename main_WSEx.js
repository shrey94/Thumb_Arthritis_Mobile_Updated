//REPS FOR EXERCISES
var seconds_rev = 31;
var el = document.getElementById('counter_rev');
console.log(document.getElementById('Exercise_video_TEE').childNodes[1]);
// var ispaused = false;

function incrementSecondsRev() {
  seconds_rev =seconds_rev - 1;
  el.innerText =  "Reps: " + seconds_rev;
  // console.log(seconds);
  if (seconds_rev <1){
    // window.location.href = 'Completion_PFE_Page.html';
    var page_name_array = ((window.location.href).split('/'));
    var page_index = (page_name_array[page_name_array.length-1]);
    console.log(page_index);
    if (page_index =='Thumb_Extension_Exercise.html'){

      window.location.href = 'Completion_TEE_Page.html';
    }
    if (page_index =='Pointer_Finger_Exercise_Difficult.html'){

      window.location.href = 'Completion_PFE_Page.html';
    }
    if (page_index =='Wrist_Strengthening_Exercise_1.html'){

      window.location.href = 'Completion_WEx_1_Page.html';
    }
    if (page_index =='Wrist_Strengthening_Exercise_2.html'){

      window.location.href = 'Completion_WEx_2_Page.html';
    }
    if (page_index =='Wrist_Strengthening_Exercise_3.html'){

      window.location.href = 'Completion_WEx_3_Page.html';
    }
    if (page_index =='Wrist_Strengthening_Exercise_4.html'){

      window.location.href = 'Completion_WEx_4_Page.html';
    }
    console.log("Done");
    clearInterval(timer_rev);
  }
}
var timer_rev = setInterval(incrementSecondsRev, 1000);

// if (ispaused==false){
//     setInterval(incrementSeconds, 2500);
// }
//MODAL HIDE SHOW
var wrist_image = document.getElementById('Exercise_video_TEE').childNodes[1];
console.log(wrist_image);




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
  // pfe_video.pause();

  // ispaused=true;
  clearInterval(timer_rev);
  // console.log(seconds);
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
  // pfe_video.load();
  timer_rev = setInterval(incrementSecondsRev, 1000);
  console.log(event);

  // ispaused=false;
  // console.log(seconds);
}

cont_exercise.onclick = function() {
  modal.style.display = "none";
  // pfe_video.load();
  timer_rev = setInterval(incrementSecondsRev, 1000);
  console.log(event);

  // ispaused=false;
  console.log(seconds_rev);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // pfe_video.load();
    timer_rev = setInterval(incrementSeconds, 1000);
    // ispaused=false;
    // console.log(seconds);
  }
}


