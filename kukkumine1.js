var x=280, y=30, y1=15, r=40, ysamm=1;
var suurus = document.getElementById("suurus");
var t, g;//tahvel, graafiline kontekst
//liigutab palli liigu funktsiooniga
//100 - tähendab 10 korda sekundis
function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 30);
}
//joonistab palli
function joonista(){

    g.clearRect(0, 0, t.width, t.height);
    g.fillStyle="blue";
    g.beginPath()
    g.arc(x, y, r, 0, 4*Math.PI, true);
    g.stroke()//joon
    g.fill()//taust

    g.fillStyle="red";
    g.beginPath()
    g.arc(260, y1, 5, 0, 4*Math.PI, true);
    g.stroke()//joon
    g.fill()//taust

    g.fillStyle="red";
    g.beginPath()
    g.arc(300, y1, 5, 0, 4*Math.PI, true);
    g.stroke()//joon
    g.fill()//taust
}
//kukkumine alla
function liigu(){
    y=y+ysamm;
    y1+=ysamm;
    joonista();
}