function digitalclk() {
    const time = document.getElementById("time");
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    time.textContent = `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${sec < 10 ? '0' + sec : sec} ${ampm}`;
    document.getElementsByClassName("box").innerHTML = time;
    setInterval(digitalclk, 1000);
}
digitalclk();