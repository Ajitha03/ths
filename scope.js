var teacher="tom"
function otherclass(){
    teacher='plant';
    topic='react';
    console.log(teacher,'weleome !');
}
otherclass();


function foo(a){
    var b=a*2;
    function  bar(c){
        console.log(a,b,c);
    }
    bar (b*3);
}
foo(2)
function diff(x,y){
    if(x>y){
        x=y
        y=tmp;
    }
    return y-x;
}