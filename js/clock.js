let userName = prompt("Kullanıcı adını giriniz:");
let user = document.querySelector('#myName');
user.innerHTML = `${userName.toUpperCase()}`;


let time = document.querySelector('#myClock');
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = weekdays[today.getDay()];
    time.innerHTML = hour + ":" + minutes + ":" + seconds + " " + day;
}
setInterval(showTime, 1000);