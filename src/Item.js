function Item(param)
{
    var item;
    var createItem = function()
    {
        var itemCode = '<div class="item">'+
            '<figure class="back">B</figure>'+
            '<figure class="front">'+param.type+'</figure>'+
        '</div>';
        item = $(itemCode);
    };

    this.createItem = function ()
    {
        createItem();
        return item;
    };

    this.show = function()
    {
        item.addClass('flipped');
    };

    this.hide = function()
    {
        item.removeClass('flipped');
    };

}