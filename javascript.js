<script>
let cerceve = document.querySelector(".cerceve");
let kaydirma = 0;  // ilk başlangıç

document.querySelector(".button2").onclick = function(){

    if (kaydirma > - (cerceve.scrollWidth - 1200)) {
        kaydirma -= 300;        // her tıklamada 300px kay
        cerceve.style.left = kaydirma + "px";
    }
}

document.querySelector(".button1").onclick = function(){

    if (kaydirma < 0) {
        kaydirma += 300;
        cerceve.style.left = kaydirma + "px";
    }
}
</script>