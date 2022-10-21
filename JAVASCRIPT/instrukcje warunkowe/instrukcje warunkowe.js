//Zadanie


let temperature = 23.5;
let rainingFlag = true;
let childrens = ["Ada", "Paul", "Adam", "Paola"];



const stayAtHome = () => {

    if (!rainingFlag) {
        console.log("Jedno dziecko:" + childrens[1] + " " + "zostaje w domu");
    } else if (temperature <= 0) {
        console.log(`${childrens[3]} zostaje w domu`)
    } else {
        console.log("Wszystkie dzieci: " + " " + childrens + " idą do szkoły");
    }

}
stayAtHome();

// Zadanie

let number = 0;

const checkNumber = () => {
    if (number > 0) {
        console.log("jest liczbą dodatnią")
    } else if (number < 0) {
        console.log("jest liczbą ujemną")
    } else {
        console.log("równa zero")
    }
}
checkNumber();

// Zadanie

let temperatureDay = -3;

if (temperatureDay > 15) {
    console.log("sunnyday")
} else if (temperatureDay == 0) {
    console.log("cold day");
} else {
    console.log("stay at home")
}

// Zadanie

let age = 18;
let weight = 40;

const bloodDonation = () => {
    if (age >= 18) {
        if (weight >= 50) {
            console.log("możesz oddać krew warunek 18 lat i 50 kg został spełniony")
        } else {
            console.log("za mała waga nie możesz oddać krwi min 50kg")
        }
    } else {
        console.log("nie masz 18 lat i nie możesz przystąpić do oddania krwi")
    }
}
bloodDonation();

// switch case

