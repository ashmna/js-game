function Player()
{
    var level = 1;
    var points = 0;

    this.getLevel = function()
    {
        return level;
    };

    this.addPoint = function(point)
    {
        points += point;
        console.clear();
        console.log(points);
    };
}