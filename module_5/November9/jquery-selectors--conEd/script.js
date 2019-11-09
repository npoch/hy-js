$(document).ready(function() {
    // Using jQuery
    /*
        1. Select the elements in the comments and save it in a variable
        2. Log each jQuery object to the console
    */

    // EXAMPLE:
    // the body
    const $body = $('body');
    console.log("body: ", $body);

    // all paragraphs
    const $p = $('p');
    console.log("p:", $p);

    // log how many paragraphs there are on the page
    console.log($p.length);

    // all the links in the nav
    const $a = $('.nav-flex a');
    console.log("a:", $a);
    // all 6 features in the features section
    const $features = $('section.features ul li');
    console.log($features);

    // the feature section and the contact section (using 1 selector)
    $features.addClass('cheating');

    // the email input (using attribute selector)
    const $email = $('[type="email"]');
    // the checked radio input (using attribute selector)

    // the submit input (using attribute selector)

}); // end of document ready