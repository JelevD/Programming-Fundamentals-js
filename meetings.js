function meetings(input) {
let meeting = {};
for(let line of input) {
    let [weekday, name] = line.split(" ");
    if (meeting.hasOwnProperty(weekday)) {
    console.log(`Conflict on ${weekday}!`);
}else {
    meeting[weekday] = name;
    console.log(`Scheduled for ${weekday}`);
}
}
}
meetings(
['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']

)