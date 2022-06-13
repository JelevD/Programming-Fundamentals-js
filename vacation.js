function vacation (people, type, day) {
    let totalPrice;
    if (type == "Business" && people >= 100) {
        people -= 10;
    }
    switch (day) {
        case "Friday":
            if (type == "Students") {
                totalPrice = people * 8.45;
                break
            }else if (type == "Business") {
               totalPrice = people * 10.90;
              break
            }else if (type == "Regular") {
                totalPrice= people * 15;
                break;
            }
            case "Saturday":
            if (type == "Students") {
                totalPrice = people * 9.80;
               break
            }else if (type == "Business") {
               totalPrice = people * 15.60;
              break
            }else if (type == "Regular") {
                totalPrice= people * 20;
                break;
            }
            case "Sunday":
            if (type == "Students") {
                totalPrice = people * 10.46;
               break
            }else if (type == "Business") {
               totalPrice = people * 16;
              break
            }else if (type == "Regular") {
                totalPrice= people * 22.50;
                break;
            }
    }


    if (type == "Students" && people >= 30) {
        totalPrice = 0.85 * totalPrice;
    }else if (type == "Regular" && people >= 10 && people <= 20) {
        totalPrice = 0.95 * totalPrice;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation (40,
    "Regular",
    "Saturday"
    );