function Layout()
{
    var layout;
    var horizontalCount = 0;
    var verticalCount = 0;

    var currHorizontalIndex = 0;
    var currVerticalIndex = 0;

    var newLayout = function()
    {
        $(document.body).find('#layout').remove();
        currHorizontalIndex = currVerticalIndex = 0;
        var table = generateTable();
        layout = $(table);
        $(document.body).appendChild(layout);
    };

    var generateTable = function()
    {
        //TODO Marine Iraknacra
        //
    };
    var addElement = function(element)
    {
        layout.find('tr:eq('+currVerticalIndex+')')
            .find('td:eq('+currHorizontalIndex+')')
            .appendChild(element);
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
    this.newLayout = addElement(element)
    {
        addElement(element);
    };
}