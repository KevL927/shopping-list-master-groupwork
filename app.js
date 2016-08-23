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
