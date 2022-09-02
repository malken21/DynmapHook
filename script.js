function Change() {
    const type = document.srv.add.value;
    const iframe = document.getElementById("map");
    iframe.src = type;
    console.log(type);
}