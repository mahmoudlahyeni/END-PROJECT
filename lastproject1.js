
var b1=document.getElementById('x1');
var b2=document.getElementById('x2');


function num(){
    var z = 145.00*parseInt(document.getElementById('z3').value) + 72.00*parseInt(document.getElementById('z2').value) + 79.00*parseInt(document.getElementById('z1').value) + 129.00*parseInt(document.getElementById('z4').value) + 239.00*parseInt(document.getElementById('z5').value) + 100.00*parseInt(document.getElementById('z6').value) + 39.00*parseInt(document.getElementById('z7').value) + 179.00*parseInt(document.getElementById('z8').value) + 59.00*parseInt(document.getElementById('z9').value);

    b2.innerHTML=z;

var x = parseInt(document.getElementById('z3').value) + parseInt(document.getElementById('z2').value) + parseInt(document.getElementById('z1').value) + parseInt(document.getElementById('z4').value) + parseInt(document.getElementById('z5').value) + parseInt(document.getElementById('z6').value) + parseInt(document.getElementById('z7').value) + parseInt(document.getElementById('z8').value) + parseInt(document.getElementById('z9').value);
b1.innerHTML= x;



};

