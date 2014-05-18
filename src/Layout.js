function Layout()
{   var  table;
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
        var trTdCode = "";
        for(var tr = 0; tr < verticalCount; tr++)
        {
            trTdCode += '<tr>';

            for (var td = 0; td < horizontalCount; td++)
            {
                trTdCode += '<td></td>';
            }

            trTdCode += "</tr>";
        }
        var tableCode = '<table  border="1">' + trTdCode + '</table>';
      // console.log(tableCode);
        return tableCode;
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

    this.addElement = function(element)
    {
        addElement(element);
    };
}