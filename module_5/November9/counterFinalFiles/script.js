

// when the add button clicked, increment counter by 1

// when the subtrct button clicked, decrement counter by 1

//if goal has been set, check the counter before updating number

//When set button is clicked, don't allow the goal amount to be changed

//alert when counter when counter === goal
$(function() {
  //document ready
let counter = 0;
let goal = 0;
console.log(counter);

const checkForGoal = function(){
    if(goal === counter){
        alert('You have reached your goal');
    }
};


  //event  listener  to increment
$('#add').on('click', function(){
//console.log('button is clicked');
counter++;
//console.log(counter);
$('.counter').text(counter);
checkForGoal();
})

//event listener to decrement
$('#subtract').on('click', function(){
    //console.log('subtract button has been clicked');
    counter--;
    //console.log(counter);
    $('.counter').text(counter);
    checkForGoal();
})

$('form.wrapper').on('submit', function(event){
    //console.log(event);
    event.preventDefault();
    $('#goal').addClass('set').attr('disabled', 'true');
    $('.submit-btn').addClass('submitted').attr('disabled', 'true');

    goal = parseInt($('#goal').val());
    checkForGoal();
})

});