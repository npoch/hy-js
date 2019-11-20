

let ideas = ['movie',
'dinner',
'snuggle',
'coffee',
'axe throwing',
'holiday market',
'workout',
'new bakery',
'new bar'];

$(function() {
//create list on load
ideas.forEach(idea => {
    $('[data-idea-list]').append(`<li>${idea}</li>`); 
});

    //add item to list (done)
$('[data-idea-form]').on('submit', function(e){
    e.preventDefault();
   //console.log('idea submitted');
    let idea = $('#item').val();
    if(idea == ''){
        alert('Give me some ideas!');
    } else {ideas.push(`${idea}`);
    $('[data-idea-list]').append(`<li>${idea}</li>`);
    }
    
    $('#item').val('');
    
})

//reset generate after 10 s
const reset = function(){
   // console.log('reset happened');
    
    $('li').removeClass('selected');
    $('.generate-result').val(`Your date will be:`);
}

//generate a random item
$('[data-generate]').on('click', function(e){
    e.preventDefault();
    // if($('li').hasClass('selected')){
    //     $('li.selected')removeClass('selected');
    // };
    //console.log('item generated');
    i = Math.floor(Math.random()* ideas.length);
    //console.log(ideas[i]);
    $('.generate-result').val(`Your date will be: ${ideas[i]}`);
    let selected = `li:nth-child(${i+1})`;
    $(selected).toggleClass('selected');
    setTimeout(reset, 3000);
    //console.log('timeout happened');
    
})

});