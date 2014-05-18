function Item(param)
{
    var instance = this;
    var game;
    var item;
    var show = false;
    var createItem = function()
    {
        var itemCode = '<div class="item">'+
            '<figure class="back">B</figure>'+
            '<figure class="front">'+param.type+'</figure>'+
        '</div>';
        item = $(itemCode);
        item.on("click", $.proxy(itemClick, instance));
    };
    var itemClick = function()
    {
        game.itemSelect(this);
    };



    this.createItem = function ()
    {
        createItem();
        return item;
    };

    this.show = function()
    {
        item.addClass('flipped');
        show = true;
    };

    this.hide = function()
    {
        show = false;
        item.removeClass('flipped');
    };
    this.setGame = function(gameInstance)
    {
        game = gameInstance;
    };
    this.getType = function()
    {
        return param.type;
    };
    this.isShow = function()
    {
        return show;
    };
}