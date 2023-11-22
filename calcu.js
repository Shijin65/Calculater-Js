var oldval;
var lastv;
var result;
var recentOP;
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
    
    var recentresult=document.getElementById("recent").value
    console.log(recentresult)
    if (recentresult) {
        
        
        var currentval =document.getElementById("result").value
        if (currentval) {

            equalclick()
            oldval = document.getElementById("recent").value =result+op
            
        }else{
            oldval=document.getElementById("recent").value = recentresult+op;

        }

    }else{
    oldval=document.getElementById("result").value+op;
    document.getElementById("recent").value=oldval;
    console.log(oldval)
    cleardisplay();  
    }
    
    
}

const equalclick =()=>
{

    console.log(oldval)
    var text=oldval+document.getElementById("result").value
    console.log(text)
     result=eval(text)
    document.getElementById("result").value=""
    document.getElementById("recent").value=result;


}