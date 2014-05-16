function Item()
{
    var item;
    var createItem = function(obj)
    {
        var itemCode = '<div class="item">'+
            '<figure class="back">2</figure>'+
            '<figure class="front">1</figure>'+
        '</div>';
        item = $(itemCode);
    };

    this.createItem = function (obj)
    {
        createItem(obj);
        return item;
    };

    this.show = function (obj)
    {
        item.addClass('flipped');
    };

    this.hide = function (obj)
    {
        item.removeClass('flipped');
    }

}