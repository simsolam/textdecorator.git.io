function clickMe() {
    let tArea=document.getElementById("textArea");
    let currentSize=parseInt(getComputedStyle(tArea).getPropertyValue('font-size'));
    currentSize+=2;
    tArea.style.fontSize=currentSize+"px";
}

function delayTask(){
    setInterval(clickMe,500);
}

function blingOp(){
    let isChecked=document.getElementById("checkBox");
    if(isChecked.checked){

        document.getElementById("textArea").style.fontWeight="bold";
        document.getElementById("textArea").style.color="green"
        document.getElementById("textArea").style.textDecoration="underline"
        document.body.style.background="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }
    else{
        document.getElementById("textArea").style.fontWeight="normal";
        document.getElementById("textArea").style.color="black"
        document.getElementById("textArea").style.textDecoration="none"
    }
}

function malkovitchTask() {

    let originalData=document.getElementById("textArea").value;
    let data=originalData.split(" ");

    for(let i of data){
        if(i.length>=5){
            originalData=originalData.replace(i,"Malkovitch");
        }
    }
    document.getElementById("textArea").value=originalData;
}

function pigLatin() {
    let originalData=document.getElementById("textArea").value;
    let data=originalData.split(" ");
    for(let i of data){
        var startLetter= i[0];
        if(startLetter==='a'||startLetter==='e'||startLetter==='i'||startLetter==='o'||startLetter==='u'){
            originalData=originalData.replace(i,i+"ay");
        }
        else{
            let temp="";
            for(let j=1;j<i.length;j++){
                temp+=i[j];
            }
            temp+=i[0]+"ay";
            originalData=originalData.replace(i,temp);
        }
    }
    document.getElementById("textArea").value=originalData;
}


