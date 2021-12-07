var x=20, y=20, r=10;
var ysamm=1, ykiirendus=0.4;
var t, g; //tahvel, graafiline kontekst
function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 100);
}
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="red";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke()
}
function liigu(){
    ysamm=ysamm+ykiirendus;
    y=y+ysamm;
    joonista();
}
function InputSuurus(event){
    var suurus=document.getElementById('suurus').value;

    r=suurus;
    r1=(suurus*1.3) - suurus;
}
function InputyKiirus(event){
    var kiirus=document.getElementById('kiirus').value;

    setInterval('liigu()',kiirus);
}