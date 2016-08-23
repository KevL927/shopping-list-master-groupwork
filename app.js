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
            .val('');
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item shopping-item__checked');
    $(this).closest('.shopping-item-toggle').find('.button-label').toggleClass('.button-label_uncheck');
  })
});
