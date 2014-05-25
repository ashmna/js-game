function Player()
{
    var level = 0;
    var points = 0;

    this.getLevel = function()
    {
        level++;
        alert("level = " + level);
        $("#levelS").text(level);
        return level;

    };

    this.points = function()
    {
        var code = "<div id='point-div'>" + "<span id='levelS'>" + level + "</span>" + "<span id='s'>" + points + "</span> " + "</div>";
        $('#icon-div').append(code);

    };

    this.addPoint = function(point)
    {
        points += point;
        $("#s").text(points);

        //console.clear();
        //console.log(points);
    };

    this.points();
}