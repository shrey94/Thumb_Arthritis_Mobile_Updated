const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();

document.getElementById("Date_Info").innerHTML = monthNames[d.getMonth()] + '&nbsp' + d.getDate()+ '<br>'+ 'EXERCISES';

var count_ec1 = 0;
var count_ec2 = 0;
var count_ec3 = 0;
var count_ec4 = 0;

function exerciseselectioncomplete1(id){
    count_ec1 = count_ec1+1
    var div_select = document.getElementById(id);
    if (count_ec1%2!=0){
        console.log(document.getElementById(id).style.backgroundColor ='#002664');
        console.log(document.getElementById(id).style.color ='#FCD901');

        // div_select.classList.add("complete");
        // var checkbox = (div_select.childNodes[5]);
        // (checkbox.remove());
        ($('#'+id).find('i').removeClass());
        ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
        // console.log($('#'+id).find('i').addClass('fa-regular fa-circle-check'));

        
    }
    else if (count_ec1%2==0) {
        console.log(document.getElementById(id).style.backgroundColor ='#FCD901');
        console.log(document.getElementById(id).style.color ='#002664');
        // console.log($('#'+id).find('i').removeClass();
        ($('#'+id).find('i').addClass('fa-regular fa-circle'));


    }

};

function exerciseselectioncomplete2(id){
    count_ec2 = count_ec2+1
    var div_select = document.getElementById(id);
    if (count_ec2%2!=0){
        console.log(document.getElementById(id).style.backgroundColor ='#002664');
        console.log(document.getElementById(id).style.color ='#FCD901');

        // div_select.classList.add("complete");
        // var checkbox = (div_select.childNodes[5]);
        // (checkbox.remove());
        ($('#'+id).find('i').removeClass());
        ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
        // console.log($('#'+id).find('i').addClass('fa-regular fa-circle-check'));

        
    }
    else if (count_ec2%2==0) {
        console.log(document.getElementById(id).style.backgroundColor ='#FCD901');
        console.log(document.getElementById(id).style.color ='#002664');
        // console.log($('#'+id).find('i').removeClass();
        ($('#'+id).find('i').addClass('fa-regular fa-circle'));


    }





};

function exerciseselectioncomplete3(id){
    count_ec3 = count_ec3+1
    var div_select = document.getElementById(id);
    if (count_ec3%2!=0){
        console.log(document.getElementById(id).style.backgroundColor ='#002664');
        console.log(document.getElementById(id).style.color ='#FCD901');

        // div_select.classList.add("complete");
        // var checkbox = (div_select.childNodes[5]);
        // (checkbox.remove());
        ($('#'+id).find('i').removeClass());
        ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
        // console.log($('#'+id).find('i').addClass('fa-regular fa-circle-check'));

        
    }
    else if (count_ec3%2==0) {
        console.log(document.getElementById(id).style.backgroundColor ='#FCD901');
        console.log(document.getElementById(id).style.color ='#002664');
        // console.log($('#'+id).find('i').removeClass();
        ($('#'+id).find('i').addClass('fa-regular fa-circle'));


    }

};

function exerciseselectioncomplete4(id){
    count_ec4 = count_ec4+1
    var div_select = document.getElementById(id);
    if (count_ec4%2!=0){
        console.log(document.getElementById(id).style.backgroundColor ='#002664');
        console.log(document.getElementById(id).style.color ='#FCD901');

        // div_select.classList.add("complete");
        // var checkbox = (div_select.childNodes[5]);
        // (checkbox.remove());
        ($('#'+id).find('i').removeClass());
        ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
        // console.log($('#'+id).find('i').addClass('fa-regular fa-circle-check'));

        
    }
    else if (count_ec4%2==0) {
        console.log(document.getElementById(id).style.backgroundColor ='#FCD901');
        console.log(document.getElementById(id).style.color ='#002664');
        // console.log($('#'+id).find('i').removeClass();
        ($('#'+id).find('i').addClass('fa-regular fa-circle'));


    }



};