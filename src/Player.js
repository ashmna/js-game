function Player()
{
    var level = 1;
    var points = 0;

    this.getLevel = function()
    {
        return level;
    };

    this.points = function()
    {

        var code = "<div id='pointDiv'>" + level + "<span id='s'>" + points + "</span> " + "</div>";
        $('#iconeDiv').append(code);

    }
    this.addPoint = function(point)
    {    points += point;
        $("#s").text(points);

        console.clear();
        console.log(points);
    };
}