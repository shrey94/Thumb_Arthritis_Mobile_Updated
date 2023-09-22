//REPS FOR EXERCISES
var seconds_rev = 31;
var el = document.getElementById('counter_rev');
console.log(document.getElementById('Exercise_video_TEE').childNodes[1]);
// var ispaused = false;

function incrementSecondsRev() {
  seconds_rev =seconds_rev - 1;
  el.innerText =  "Timer: " + seconds_rev;
  // console.log(seconds);
  if (seconds_rev <1){
    // window.location.href = 'Completion_PFE_Page.html';
    var page_name_array = ((window.location.href).split('/'));
    var page_index = (page_name_array[page_name_array.length-1]);
    console.log(page_index);
    if (page_index =='C-Position-Hold-Easy1.html'){

      window.location.href = 'TimerPage_C_position_1_easy.html';
    }
    if (page_index =='C-Position-Hold-Easy2.html'){

      window.location.href = 'TimerPage_C_position_2_easy.html';
    }
    if (page_index =='C-Position-Hold-Easy3.html'){

      window.location.href = 'Completion_CPH_Beginner_Page.html';
    }
    if (page_index =='C-Position-Hold-Top1.html'){

      window.location.href = 'TimerPage_C_position_1_top.html';
    }
    if (page_index =='C-Position-Hold-Top2.html'){

      window.location.href = 'TimerPage_C_position_2_top.html';
    }
    if (page_index =='C-Position-Hold-Top3.html'){

      window.location.href = 'Completion_CPHT_Page.html';
    }
    if (page_index =='C-Position-Hold-Bottom1.html'){

      window.location.href = 'TimerPage_C_position_1_bottom.html';
    }
    if (page_index =='C-Position-Hold-Bottom2.html'){

      window.location.href = 'TimerPage_C_position_2_bottom.html';
    }
    if (page_index =='C-Position-Hold-Bottom3.html'){

      window.location.href = 'Completion_CPHB_Page.html';
    }
    if (page_index =='C-Position-Hold-Side1.html'){

      window.location.href = 'TimerPage_C_position_1_side.html';
    }
    if (page_index =='C-Position-Hold-Side2.html'){

      window.location.href = 'TimerPage_C_position_2_side.html';
    }
    if (page_index =='C-Position-Hold-Side3.html'){

      window.location.href = 'Completion_CPHS_Page.html';
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


