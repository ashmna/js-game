function Game()
{
    var instance = this;
    var player = new Player();
    var layout = new Layout();
    var interval = 8000;

    var lastItem;
    var itemTypeCount = 0;

    var soundFlip = document.getElementById("flip");
        soundFlip.volume=0.1;

    var newGame = function ()
    {
        var level = player.getLevel();
        var seizes = getSeizes(level);
        itemTypeCount = (seizes.horizontal * seizes.vertical) / 2;
        layout.newLayout(seizes.horizontal, seizes.vertical);
        var scheme = getScheme(seizes.horizontal, seizes.vertical);
        for (var i = 0; i < scheme.length; i++) {
            for (var j = 0; j < scheme[i].length; j++) {
                var param = {
                    type: scheme[i][j]
                };
                var item = new Item(param);
                item.setGame(instance);
                item.setInterval(interval);
                var element = item.createItem();
                layout.addElement(element);
                scheme[i][j] = item;
            }
        }
    };

    var logic = function(item)
    {
        if(lastItem) {
            if(lastItem.getType() == item.getType() ) {
                lastItem.done();
                item.done();
                var point = 0;
                point += lastItem.getPoint();
                point += item.getPoint();
                point = Math.floor(point/2);
                player.addPoint(point);
                minusItemTypeCount();
            } else {
                lastItem.hide();
                item.hide();
            }
            lastItem = null;
        } else {
            lastItem = item;
        }
    };

    this.itemSelect = function(item)
    {
        if(!item.isShow())
        {
            item.show();
            soundFlip.load();
            soundFlip.play();
            (function(item){
                item.element().one('transitionend', function() {
                    logic(item);
                });
            })(item);

        }
    };

    this.itemHide = function(item)
    {
        if(lastItem && lastItem == item) {
            lastItem = null;
        }
    };

    var minusItemTypeCount = function()
    {
        itemTypeCount --;
        if(itemTypeCount == 0) {
            newGame();
        }
    };

    var getSeizes = function(level)
    {
        var horizontal = 0 , vertical = 0;
        switch (level)
        {
            case 1:
            case 2:
            case 3:
                horizontal = vertical = 4;
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                horizontal = vertical = 6;
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                horizontal = 8; vertical = 7;
                break;
            default:
                horizontal = vertical = 9;
                break;
        }
        return {
            horizontal: horizontal,
            vertical: vertical
        };
    };



    var getScheme = function(horizontal, vertical)
    {
        var count = (horizontal * vertical) / 2;
        var schemeList = [];
        for (var i = 1; i <= count; i++) {
            schemeList.push(i,i);
        }
        schemeList = shuffle(schemeList);
        schemeList = shuffle(schemeList);
        schemeList = shuffle(schemeList);
        var scheme = [];
        for (i = 0; i < vertical; i++) {
            var row = [];
            for (var j = 0; j < horizontal; j++) {
                var index = (i*horizontal) + j;
                row.push(schemeList[index]);
            }
            scheme.push(row);
        }
        console.table(scheme);
        return scheme;
    };

    var shuffle = function (array) {
        var currentIndex = array.length
            , temporaryValue
            , randomIndex
            ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    this.newGame = function()
    {
        newGame();
    };

}