 [document.getElementById("reveal-header"), document.getElementById("reveal-palette"), document.getElementById("reveal-footer")].forEach(item => {
 item.addEventListener("click", event => {
    document.getElementById("secondImg").classList.add("visible");
 })
});