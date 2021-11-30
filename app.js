const billamount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noofNotes=document.querySelectorAll(".no-ofnotes");

const validNotes=[2000,500,100,20,10,5,1];

checkButton.addEventListener("click",function billandCash()
{
    hidemsg();
if(billamount.value>0)
{   
    if(cashGiven.value>=billamount.value)
    {
        const amtreturn=cashGiven.value-billamount.value;
        calchange(amtreturn);

    }
    else
    {
        showmsg("cash provided should be atleast be equal to the bill amount ")
    }


}else{
    showmsg("invalid Bill Amt")
}




})

function calchange(amtreturn)
{
    for(let i=0;i<validNotes.length;i++)
    {
        const noNote=Math.trunc(amtreturn/validNotes[i]);
     
        amtreturn=amtreturn%validNotes[i];
        noofNotes[i].innerText=noNote;
    }
}

function hidemsg()
{
    message.style.display="none";
}

function showmsg(msg)
{
    message.style.display="block";
    message.innerText=msg;
}
