const handId = document.getElementById("hand-id")

function setGaugeValue(gauge) {
    handId.style.transform = `rotate(${gauge}deg)`
}
// 0% = -135deg
// 100% = 45deg
setGaugeValue(45)