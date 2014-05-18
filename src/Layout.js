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

    var generateTable = function()
    {
        var table = '<table id="layout" border="1">';

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
}