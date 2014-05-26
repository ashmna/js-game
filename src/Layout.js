function Layout()
{
    var layout;

    var horizontalCount = 0;
    var verticalCount = 0;

    var currHorizontalIndex = 0;
    var currVerticalIndex = 0;

    var newLayout = function()
    {
        $('#container').find('#layout').remove();
        currHorizontalIndex = currVerticalIndex = 0;
        generateTable();
        $('#container').append(layout);
    };
    this.createSettingIcon = function()
    {
        var  iconCode = "<img src = 'image/ui/setting.png' id = 'icon-img'>";
        var settingsWindow = '<span class = "settingsWindow">' + '</span>';
        var code = "<img src = 'image/ui/sound.png' class = 'icone sound'>"+"</img>";

        $('#icon-div').append(settingsWindow);
        $('#icon-div').append(iconCode);
        $('.settingsWindow').append(code);


        $('#icon-img').click(function() {
            $(".settingsWindow").toggleClass("click");

        });
    $('.icone').click(function()
    {
        if($(this).hasClass('sound'))
        {
            $(this).removeClass('sound');
            $(this).addClass('nosound');
            $(this).attr('src', 'image/ui/nosound.png' );
            $('source').attr("src",null);
        }
        else
        {
            $(this).removeClass('nosound');
            $(this).addClass('sound');
            $(this).attr('src', 'image/ui/sound.png' );
            $('source').attr("src","sound/flip.mp3");
        }


    });
    };
    var generateTable = function()
    {
        var table = '<table id="layout">';

        for(var i = 0; i < verticalCount; i++)
        {
            table += '<tr>';
            for (var j = 0; j < horizontalCount; j++)
            {
                table += '<td></td>';
            }
            table += '</tr>';
        }
        table += '</table>';
        layout = $(table);
    };

    var addElement = function(element)
    {
        layout.find('tr:eq('+currVerticalIndex+')')
            .find('td:eq('+currHorizontalIndex+')')
            .append(element);
        currHorizontalIndex ++;
        if(currHorizontalIndex == horizontalCount)
        {
            currHorizontalIndex = 0;
            currVerticalIndex ++;
        }
    };

    this.newLayout = function(horizontal, vertical)
    {
        horizontalCount = horizontal;
        verticalCount = vertical;
        newLayout();
        //layout =
    };

    this.addElement = function(element)
    {
        addElement(element);
    };

    this.createSettingIcon();
}