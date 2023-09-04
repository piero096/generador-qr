const contenedorQr = document.getElementById("contenedorQR");
const texto = document.getElementById("link");
const btGenerar = document.getElementById("btGenerar");
const QR = new QRCode(contenedorQr);


btGenerar.addEventListener("click", generarQr);

function generarQr(){
    event.preventDefault();
    QR.makeCode(texto.value);
    texto.value = ""
}