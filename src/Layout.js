function Layout()
{   var  table;
    var layout;
    var tableTrTdArr=[];
    var tableTdArr = [];
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
    {   for(var t = 0; t < verticalCount; t++)
    {
        var trCode = '<tr>';
        tableTrTdArr[t].push(trCode);
        for (var td = 0; td < horizontalCount; td++)
        {
            var tdCode='<td></td>';
            tableTrTdArr[td].push(tableTdArr[td]);



        }

        tableTrTdArr[t]=tableTrTdArr+"</tr>";
    }
        var tableArrTdTrString = "";
        for (var i = 0 ; i < tableTrTdArr.lenght ;i++ )
        {

            tableArrTdTrString+=tableArrTdTrString[i];
        }

        var tableCode = '<table  border="1">' +

            tableArrTdTrString +
            '</table>';
        table=$(tableCode);



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