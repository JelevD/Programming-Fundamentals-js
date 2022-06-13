function fuelMoney(distance, passenger, price) {
    let totalFuel = passenger * 0.100;
    let fuel = (distance / 100) * ( 7 + totalFuel);
    let money = price * fuel;
    console.log(`Needed money for that trip is ${money.toFixed(2)}lv.`);
}
fuelMoney(260, 9, 2.49)