var x=50, y=20, r=30;
var ysamm=1, ykiirendus=0.4;
var t, g; //tahvel, graafiline kontekst
function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 100);
}
function joonista() {
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle = "blue";
    g.fillStyle = "blue";
    g.beginPath()
    g.fillRect(0, 650, 300, 200);
    g.stroke();
    g.fill();

    g.strokeStyle = "green";
    g.fillStyle = "green";
    g.beginPath()
    g.arc(x, y, r, 0, 2 * Math.PI, true);
    g.stroke();
    g.fill();
}
function liigu(){
    ysamm=ysamm+ykiirendus;
    y=y+ysamm;
    joonista();
}
function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    r-=1;
    ysamm=0;
}