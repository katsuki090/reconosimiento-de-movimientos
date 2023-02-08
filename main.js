m1 = 0;
m2 = 0;
n1 = 0;
n2 = 0;
r1 = 0;
function setup() {
 camara= createCapture(VIDEO);
 camara.size(560,475);
 canvas= createCanvas(560, 475);
 canvas.position(700, 100);
 dm = ml5.poseNet(camara, g);
    dm.on('pose', me);
}
function draw() {
    background("mediumpurple");
    stroke("#9e92e6");
    fill("#9e92e6");
    square(n1, n2, r1);
    document.getElementById("ggff").innerHTML = "el tamaño es " +r1+ "px";
}
function g() {
    console.log("El modelo a cargado");
}
function me(resultados) {
    if (resultados.length>0) {
        console.log(resultados);
        m1 = resultados[0].pose.rightWrist.x;
        m2 = resultados[0].pose.leftWrist.x;
        n1 = resultados[0].pose.nose.x;
        n2 = resultados[0].pose.nose.y;
        r1 = floor(m2-m1);
    }
}