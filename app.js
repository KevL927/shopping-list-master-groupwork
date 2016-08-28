<<<<<<< HEAD
// enter item in the text box
//
// click add item or hit return, a box with border line will be created, including the name of the item and two buttons (check and delete)

// when user click check button
// - the item should be strikethrough
// - the button should be renamed as ‘uncheck’

// when user clicks on uncheck button
// - the strikethrough should be gone
// - the button should be renamed as ‘check’
=======
'use strict'
var checkButton,
    deletedItems = [];
>>>>>>> 6c10a726025d8774ab1683a6326cb214c9d60d43

$(document).ready(function() {
  var $itemTemplate = $('<li><span class="shopping-item"></span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></li>');
  var $shoppingList = $('.shopping-list')

  // event handlers


<<<<<<< HEAD
'use strict'
var checkButton,
    deletedItems = [];

$(document).ready(function() {
  var $itemTemplate = $('<li><span class="shopping-item"></span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></li>');
  var $shoppingList = $('.shopping-list')

  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
      if (!$('#shopping-list-entry').val()) {
        return;
      }

    var $currentItem = $itemTemplate.clone(),
        $currentShoppingItem = $currentItem.find('.shopping-item');

    $currentShoppingItem.text($('#shopping-list-entry').val());
      initializeItem($currentItem);
      initializeFilterItem($currentItem);
  });

    function initializeItem ($currentItem) {
      var $currentShoppingItem = $currentItem.find('.shopping-item'),
          $checkButton = $currentItem.find('.shopping-item-toggle .button-label');

      function toggleItem (event) {
        $currentShoppingItem.toggleClass('.shopping-item shopping-item__checked');
        ($checkButton.text() === 'check') ? $checkButton.text('uncheck'): $checkButton.text('check');
      }

      function deleteItem(event) {
        $currentItem.remove();
        $deletedItems.push($currentItem);
      }

      $shoppingList.append($currentItem);

      $('.shopping-item-toggle', $currentItem).on('click', toggleItem);
      $('.shopping-item-delete', $currentItem).on('click', deleteItem);

      $('#shopping-list-entry').val('');

      $(".filter").change(function() {
        var filterSelect = $(this).val();

        function hideUncheckedItem() {
          $checkButton.filter(function() {
            return $(this).text() === "uncheck"; }).closest('li').show();
          $checkButton.filter(function() {
            return $(this).text() === "check"; }).closest('li').hide();
        }

       function showCheckedItem() {
         $checkButton.filter(function() {
           return $(this).text() === "check"; }).closest('li').show();
         $checkButton.filter(function() {
           return $(this).text() === "uncheck"; }).closest('li').hide();
       }

      function showAllItem() {
         $checkButton.filter(function() {
           return $(this).text() === "uncheck"; }).closest('li').show();
         $checkButton.filter(function() {
           return $(this).text() === "check"; }).closest('li').show();
      }

      if (filterSelect === "Checked Items") {
          hideUncheckedItem();
      } else if (filterSelect === "Unchecked Items") {
          showCheckedItem();
      } else {
          showAllItem();
      }
=======
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        if (!$('#shopping-list-entry').val()) {
          return;
        }

        var $currentItem = $itemTemplate.clone(),
            $currentShoppingItem = $currentItem.find('.shopping-item');

        $currentShoppingItem.text($('#shopping-list-entry').val());
        initializeItem($currentItem);
        initializeFilterItem($currentItem);
    });

    function initializeItem ($currentItem) {
      var $currentShoppingItem = $currentItem.find('.shopping-item');
      var $checkButton = $currentItem.find('.shopping-item-toggle .button-label');

      function toggleItem (event, $currentItem) {
          $currentShoppingItem.toggleClass('.shopping-item shopping-item__checked');
          (checkButton.text() === 'check') ? checkButton.text('uncheck'): checkButton.text('check');
      }
      function deleteItem(event) {
          $currentItem.remove();
          $deletedItems.push($currentItem);
      }


      $shoppingList.append($currentItem);


      $('.shopping-item-toggle', $currentItem).on('click', toggleItem);
      $('.shopping-item-delete', $currentItem).on('click', deleteItem);


      $('#shopping-list-entry').val('');

      $(".filter").change(function() {
          var filterSelect = $(this).val();

          function hideUncheckedItem() {
            $checkButton.filter(function() {
                return $(this).text() === "uncheck"; }).closest('li').show();
            $checkButton.filter(function() {
                return $(this).text() === "check"; }).closest('li').hide();
          }

          function showCheckedItem() {
            $checkButton.filter(function() {
                return $(this).text() === "check"; }).closest('li').show();
            $checkButton.filter(function() {
                return $(this).text() === "uncheck"; }).closest('li').hide();
          }

          function showAllItem() {
            $checkButton.filter(function() {
                return $(this).text() === "uncheck"; }).closest('li').show();
            $checkButton.filter(function() {
                return $(this).text() === "check"; }).closest('li').show();
          }

          if (filterSelect === "Checked Items") {
              hideUncheckedItem();
          } else if (filterSelect === "Unchecked Items") {
              showCheckedItem();
          } else {
              showAllItem();
          }
      })
    }

    $('li').each(function () {
      initializeItem($(this));
>>>>>>> 6c10a726025d8774ab1683a6326cb214c9d60d43
    })
  }

  $('li').each(function () {
    initializeItem($(this));
  });

});
