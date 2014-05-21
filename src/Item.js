function Item(param)
{
    var instance = this;
    var game;
    var item;
    var show = false;
    var interval;
    var timeOut;
    var startTime;
    var showCount = 0;
    var point = 0;


    var createItem = function()
    {


        var itemCode = '<div class="item">'+
            '<figure class="back"></figure>'+
            '<figure class="front item-type-'+param.type+'"></figure>'+
            '</div>';
        $( "img" ).attr( 'src', "image/Green.png");

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
        timeOut = setTimeout(this.hide, interval);
        show = true;
        startTime = new Date().getTime();
        showCount++;
    };

    this.hide = function()
    {
        show = false;
        item.removeClass('flipped');
        clearTimeout(timeOut);
    };

    this.done = function()
    {
        clearTimeout(timeOut);
        item.find('.front').addClass('item-done');
        //find('.front').css({'background': 'black'});
        var endTime = new Date().getTime();
        var timePoint = interval - (endTime - startTime);
        point = timePoint / showCount;
        console.log('timePoint [ '+timePoint+' ]  point [  '+point+'  ]');
    };

    this.getPoint = function()
    {
        return point;
    };

    this.setGame = function(gameInstance)
    {
        game = gameInstance;
    };
    this.setInterval = function(setInterval)
    {
        interval = setInterval;
    };


    this.getType = function()
    {
        return param.type;
    };

    this.isShow = function()
    {
        return show;
    };

    this.element = function()
    {
        return item;
    }
}