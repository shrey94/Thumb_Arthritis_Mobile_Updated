

var exercise_difficulty_option= [];
var submitbtn = document.getElementById('Submit_Answer');
var x = document.getElementsByClassName('options');
var count_ed = 0;
// var count_ed2 = 0;

var count_ec1 = 0;
var count_ec2 = 0;
var count_ec3 = 0;
var count_ec4 = 0;




//SELECTING OPTIONS
for (var i = 0; i < x.length; i++) {

    x[i].addEventListener("click", function(){

    (($(this).find('div')[2]).click());
    submitbtn.style.backgroundColor = '#007DAC';
    var selectedEl = document.querySelector(".selected");
    // console.log(selectedEl.find[3])


    if(selectedEl){
        selectedEl.classList.remove("selected");
    }
    
    this.classList.add("selected");
     
    });
}

document.getElementById('Submit_Answer').addEventListener('click',function(){
    
    var selectedEl = document.querySelector(".selected");
    if(selectedEl){
        //alert("You have selected " + selectedEl.innerText); 
        // document.body.style.backgroundColor = 'blue';
    }
    else{
        alert('please choose an option')
    }
});



function exercisedifficult(id){
    count_ed = count_ed+1
    var div_select = document.getElementById(id);
    // console.log(id);
    // console.log(div_select.id);
    if (div_select.id =='exercise_easy_selection'){

        // if (count_ed%2!=0){
            div_select.classList.add("difficult");
            // var checkbox = (div_select.childNodes[5]);
            // (checkbox.remove());
            ($('#'+id).find('i').removeClass());
            ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
            document.getElementById('exercise_difficult_selection').classList.remove('difficult');
            ($('#'+'exercise_difficult_selection').find('i').removeClass());
            if(exercise_difficulty_option.length>0){
                exercise_difficulty_option.pop()
                exercise_difficulty_option.push(div_select.id);
                console.log(exercise_difficulty_option);
            }
            else{
                exercise_difficulty_option.push(div_select.id);
                console.log(exercise_difficulty_option);
            }
            
    
    }
    else if (div_select.id =='exercise_difficult_selection'){
        // if (count_ed%2!=0){
            div_select.classList.add("difficult");
            // var checkbox = (div_select.childNodes[5]);
            // (checkbox.remove());
            ($('#'+id).find('i').removeClass());
            ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
            document.getElementById('exercise_easy_selection').classList.remove('difficult');
            console.log($('#'+'exercise_easy_selection').find('i').removeClass());
            if(exercise_difficulty_option.length>0){
                exercise_difficulty_option.pop()
                exercise_difficulty_option.push(div_select.id);
                console.log(exercise_difficulty_option);
            }
            else{
                exercise_difficulty_option.push(div_select.id);
                console.log(exercise_difficulty_option);
            }
  
    }





};

function Exercise_option(id){
    var page_name = window.location.href;
    if(exercise_difficulty_option[0]=='exercise_easy_selection'){
        page_name_array = (page_name.split('/')).at(-1).split('_').at(-1).split('.');
        if (page_name_array[0]=='PFE'){
            window.location.href = 'Pointer_Finger_Exercise_Easy.html'
        }
        else{
            window.location.href = 'C-Position-Hold-Easy-Intro.html'

        }

    }
    else if (exercise_difficulty_option[0]=='exercise_difficult_selection'){
        page_name_array = (page_name.split('/')).at(-1).split('_').at(-1).split('.');
        if (page_name_array[0]=='PFE'){
            window.location.href = 'Pointer_Finger_Exercise_Difficult_Intro.html'
        }
        else{
            window.location.href = 'C-Position-Hold-Top-Intro.html'

        }

    }
    else{
        alert('Please select a difficulty level!!');
    }
    console.log(window.location.href);
}










$('#checkbox_right').click(function() {
  $('#checkbox_right').find('i').removeClass()
  $(this).find('i').addClass('fa-regular fa-circle-check')
  $('#checkbox_left').find('i').removeClass()
  $('#checkbox_both').find('i').removeClass()
  $('#checkbox_both').find('i').addClass('fa-regular fa-circle')
  $('#checkbox_left').find('i').addClass('fa-regular fa-circle')


});

$('#checkbox_left').click(function() {
  $('#checkbox_left').find('i').removeClass()
  $(this).find('i').addClass('fa-regular fa-circle-check')
  $('#checkbox_right').find('i').removeClass()
  $('#checkbox_both').find('i').removeClass()
  $('#checkbox_both').find('i').addClass('fa-regular fa-circle')
  $('#checkbox_right').find('i').addClass('fa-regular fa-circle')


});

$('#checkbox_both').click(function() {
  $('#checkbox_both').find('i').removeClass()
  $(this).find('i').addClass('fa-regular fa-circle-check')
  $("#checkbox_right").find('i').removeClass();
  $("#checkbox_left").find('i').removeClass();


  // $('#checkbox_right').find('i').removeClass('fa-regular fa-circle')
  $('#checkbox_right').find('i').addClass('fa-regular fa-circle')
  // $('#checkbox_left').find('i').removeClass('fa-regular fa-circle')
  $('#checkbox_left').find('i').addClass('fa-regular fa-circle')


});

