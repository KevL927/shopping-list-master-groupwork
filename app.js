// enter item in the text box

// click add item or hit return, a box with border line will be created, including the name of the item and two buttons (check and delete)

// when user click check button
// - the item should be strikethrough
// - the button should be renamed as ‘uncheck’

// when user clicks on uncheck button
// - the strikethrough should be gone
// - the button should be renamed as ‘check’

// when user clicks on delete button:
//  - the whole entire box for the item (including the buttons) will be removed from the list

<<<<<<< HEAD
// Shopping List Extension Tasks

// If you are looking for a further challenge, then try add some of the following features to your shopping list application:

// Buttons which act as a filter, allowing you to only display the items which need checking off, or have already been checked off.
// A text input which lets you search for items which match a specific string.
// A list of your most frequently entered items, so you can quickly select from your favorites.
// Use the Web Storage API to keep track of the items in your list.

'use strict'
var checkButton;

$(document).ready(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();

        var item = $('#shopping-list-entry').val();

        if (item.length > 0) {
            $('.shopping-list').append('<li>' +
                '<span class="shopping-item">' + item + '</span>' +
                '<div class="shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
                '</button>' +
                '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
                '</button>' +
                '</li>');
            $('#shopping-list-entry').val('');
        }

    });

$( ".filter" ).change(function() {
  var filterSelector = $(this).val();

  if(filterSelector === "Checked Items") {

    $('')


  } /*else if(filterSelector === "Unchecked Item") {

  } else {

  }
*/

});
// $( ".filter" )
//   .change(function() {
//     $( ".filter option:selected" ).each(function() {
  
//     });
//     $( "div" ).text( str );
//   })
//   .trigger( "change" );



    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item shopping-item__checked');

        $(this).closest('.shopping-item-toggle').find('.button-label').toggleClass('.button-label unchecked');
        // (checkButton.text() === 'check') ? checkButton.text('uncheck'): checkButton.text('check');


    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });


=======
$(document).ready(function(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var item = $('#shopping-list-entry').val();

    $('.shopping-list')
            .append('<li>' +
              '<span class="shopping-item">' + item + '</span>' +
              '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
              '<span class="button-label">check</span>' +
              '</button>' +
              '<button class="shopping-item-delete">' +
              '<span class="button-label">delete</span>' +
              '</button>' +
              '</div>' +
              '</li>')

      $('#shopping-list-entry').val('');
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item shopping-item__checked');
    $(this).closest('.shopping-item-toggle').find('.button-label').toggleClass('.button-label_uncheck');
  })
>>>>>>> 1ff74a5186537e3d5848f56f99ed9462c9530937
});
