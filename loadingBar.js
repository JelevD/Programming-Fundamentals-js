
function loadingBar(num) {
    if (num === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
    if (num === 90) {
        console.log("90% [%%%%%%%%%.]");
        console.log("Still loading...");
    }
    if (num === 80) {
        console.log("80% [%%%%%%%%..]");
        console.log("Still loading...");
    }
    if (num === 70) {
        console.log("70% [%%%%%%%...]");
        console.log("Still loading...");
    }
    if (num === 60) {
        console.log("60% [%%%%%%....]");
        console.log("Still loading...");
    }
    if (num === 50) {
        console.log("50% [%%%%%.....]");
        console.log("Still loading...");
    }
    if (num === 40) {
        console.log("40% [%%%%......]");
        console.log("Still loading...");
    }
    if (num === 30) {
        console.log("30% [%%%.......]");
        console.log("Still loading...");
    }
    if (num === 20) {
        console.log("20% [%%........]");
        console.log("Still loading...");
    }
    if (num === 10) {
        console.log("10% [%.........]");
        console.log("Still loading...");
    }
    if (num === 0) {
        console.log("0% [..........]");
        console.log("Still loading...");
    }
    
}



loadingBar(20);