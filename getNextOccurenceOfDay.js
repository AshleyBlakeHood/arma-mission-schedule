
class Day {
    static Monday = new Day('monday', 1)
    static Tuesday = new Day('tuesday', 2)
    static Wednesday = new Day('wednesday', 3)
    static Thursday = new Day('thursday', 4)
    static Friday = new Day('friday', 5)
    static Saturday = new Day('saturday', 6)
    static Sunday = new Day('sunday', 7)


    constructor(day, modifier){
        this.day = day;
        this.modifier = modifier;
    }
}

function getNextOccurenceOfDay(day){
    var d = new Date();
    d.setDate(d.getDate() + ((7-d.getDay())%7+day.modifier) % 7);
    return d.toDateString();
}