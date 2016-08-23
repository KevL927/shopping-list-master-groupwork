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
// Shopping List Extension Tasks

// If you are looking for a further challenge, then try add some of the following features to your shopping list application:

// Buttons which act as a filter, allowing you to only display the items which need checking off, or have already been checked off.
// A text input which lets you search for items which match a specific string.
// A list of your most frequently entered items, so you can quickly select from your favorites.
// Use the Web Storage API to keep track of the items in your list.

'use strict'
var checkButton,
    deletedItems = [];

$(document).ready(function() {
  var itemTemplate = $('<li><span class="shopping-item"></span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></li>');
  var shoppingList = $('.shopping-list')

  // event handlers


    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        if (!$('#shopping-list-entry').val()) {
          return;
        }

        var currentItem = itemTemplate.clone(),
            currentShoppingItem = currentItem.find('.shopping-item');

        currentShoppingItem.text($('#shopping-list-entry').val());
        initializeItem(currentItem);
    });

    function initializeItem(currentItem) {
      var currentShoppingItem = currentItem.find('.shopping-item');
      var checkButton = currentItem.find('.shopping-item-toggle .button-label');

      function toggleItem (event, currentItem) {
          currentShoppingItem.toggleClass('.shopping-item shopping-item__checked');
          (checkButton.text() === 'check') ? checkButton.text('uncheck'): checkButton.text('check');
      }
      function deleteItem(event) {
          currentItem.remove();
          deletedItems.push(currentItem);
      }


      shoppingList.append(currentItem);


      $('.shopping-item-toggle', currentItem).on('click', toggleItem);
      $('.shopping-item-delete', currentItem).on('click', deleteItem);


      $('#shopping-list-entry').val('');
    }

    $('li').each(function () {
      initializeItem($(this));
    })

    $(".filter").change(function() {
        var filterSelector = $(this).val();

        if (filterSelector === "Checked Items") {
            $('.shopping-item-toggle .button-label').filter(function() {
                return $(this).text() === "check"; }).closest('li').hide();
            $('.shopping-item-toggle .button-label').filter(function() {
                return $(this).text() === "uncheck"; }).closest('li').show();

        } else if (filterSelector === "Unchecked Items") {
            $('.shopping-item-toggle .button-label').filter(function() {
                return $(this).text() === "uncheck"; }).closest('li').hide();
            $('.shopping-item-toggle .button-label').filter(function() {
                return $(this).text() === "check"; }).closest('li').show();

        } else {
            $('.shopping-item-toggle .button-label').filter(function() {
                return $(this).text() === "uncheck"; }).closest('li').show();
            $('.shopping-item-toggle .button-label').filter(function() {
                return $(this).text() === "check"; }).closest('li').show();
        }
    })

});
