// tks: https://dev.to/sbodi10/download-images-using-javascript-51a9
// tks: https://image-charts.com/

let qrCodePNG = document.getElementById("qr");
let urlName;

document.getElementById("tuto1").classList.toggle("emptyValue"); userQRvalue.classList.toggle("emptyValue");

async function baixarQR_CODE() {
    const QR_URL = qrCodePNG.src;

    const img = await fetch(QR_URL);
    const imgBlob = await img.blob();

    const objectURL = URL.createObjectURL(imgBlob);

    const link = document.createElement('a');
    link.href = objectURL;
    link.download = ("QR_" + urlName + ".png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(objectURL);
};

function qr_personalizado() {
    let textoUser = document.getElementById("userQRvalue").value;

    if (textoUser != "") {
        qrCodePNG.setAttribute("src", "https://image-charts.com/chart?chs=250x250&cht=qr&chl=" + textoUser);
    } else {
        qrCodePNG.setAttribute("src", "scr/inicio/inicio2.png");
        document.getElementById("tuto1").classList.toggle("emptyValue"); userQRvalue.classList.toggle("emptyValue");
    }
    urlName = textoUser;
};