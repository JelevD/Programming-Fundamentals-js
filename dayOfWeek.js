function dayOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    if (day < 1 || day > 7) {
        console.log("Invalid day!");
    }else {
    let index = day - 1;
    console.log(days[index]);
    }
    
}
dayOfWeek(3);