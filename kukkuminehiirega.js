var x=50, y=20, r=40;
var ysamm=1, ykiirendus=0.4;
var t, g; //tahvel, graafiline kontekst
function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 100);
}
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="green";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke()
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