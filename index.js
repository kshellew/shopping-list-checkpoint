function shoppingList(){
    //adds item to list and also removes text from input field
    $('#js-shopping-list-form').on('submit', function(event){
        event.preventDefault();
        let item = $('#shopping-list-entry').val();
        $('.shopping-list').append(`<li>
            <span class="shopping-item"> ${item} </span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`)
        $('#shopping-list-entry').val(' ')
    });
    //deletes item from list
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

   //crossess item off when check button is pressed 
   $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    //$(this).closest('li').children('.shopping-item').toggleClass('shopping-item_checked');
});
}
$(shoppingList);