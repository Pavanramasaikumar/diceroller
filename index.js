function roll(){
    let sum=0;
    const num=document.getElementById("num").value;
    const result=document.getElementById("disresult");
    const dices=document.getElementById("disimages");
    const values=[];
    const image=[];
    
    for (i=0;i<num;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        image.push(`<img src="/sources/images/${value}.png">`);
    }
    for(i=0;i<values.length;i++){
        sum=sum+values[i];
    }
    result.textContent=`dice: ${values.join(",")} and sum of dices is ${sum}`;
    dices.innerHTML=image.join("");
}