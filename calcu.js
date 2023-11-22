var oldval;
var lastv;
var result;
function bclick(val) 
{
    lastv=document.getElementById("result").value
    console.log(val)
    document.getElementById("result").value+=val;
    
}
function back()
{
    document.getElementById("result").value=lastv
    console.log(lastv)
    
}

function clearall() {
    document.getElementById("result").value="";
    document.getElementById("recent").value="";
}
function cleardisplay() {
    document.getElementById("result").value="";
    
}
function operation(op)
{
    console.log(op)
    var recentval=document.getElementById("recent").value
    console.log(recentval)
    if (recentval) {
        oldval=document.getElementById("recent").value = recentval+op;
        // document.getElementById("recent").value=result;
    }else{
      oldval=document.getElementById("result").value+op;
    document.getElementById("recent").value=oldval;
    console.log(oldval)
    cleardisplay();  
    }
    
    
}

function equalclick()
{

    console.log(oldval)
    var text=oldval+document.getElementById("result").value
    console.log(text)
    var result=eval(text)
    document.getElementById("result").value=""
    document.getElementById("recent").value=result;


}