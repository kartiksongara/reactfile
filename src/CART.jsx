import { useState } from "react"
import "./Style.css"
const Cart=()=>{
    const [text,settext]=useState("")
    const handle=(event)=>{
        settext(event.target.value)
    }
    const uppercase=()=>{
        settext(text.toUpperCase())
    }
    const lowercase=()=>{
        settext(text.toLowerCase())
    }
    const Copy=()=>{
        navigator.clipboard.writeText(text)
    }
    const Cut =()=>{
        navigator.clipboard.writeText(text);
        settext('');
    }
    const Past =()=>{

        navigator.clipboard.readText().then((text)=>{settext
        (text+text)})
    
    };
    const Space=()=>{
        settext(text.replace(/\s/g,''))
    }
    const Remove=()=>{
        settext('')
    }
    const RES=()=>{
        // settext(text.replace(/\s+/g,' '))
        let newText =text.split(/[]+/)
        settext(newText.join("0"))
    }
    let a=1;

    const Them=()=>{
        if(a%3===0){
            document.getElementById("text").style.background='red';
            document.getElementById("main").style.background='black'
            document.getElementById("main").style.fontSize="20px";

        }
        else if(a%3===1){
            document.getElementById('text').style.backgroundColor='black'
            document.getElementById("main").style.background='white';
            document.getElementById("text").style.Color='white'
    

             

        }
        else if(a%3===2){
            document.getElementById('text').style.backgroundColor="white"
            document.getElementById("main").style.background='yellow'
            document.getElementById("text").style.color='black'



        }
        a++;
    }
    return(
        <>
        <div id="main">
            <button onClick={Them} type="button" id="them" >Them</button>
        <textarea  onChange={handle} placeholder="type here..." value={text} name="" id="text" cols="30" rows="10"></textarea>
<div id="btn1">
<button onClick={uppercase} type="button" class="btnbtn-lg btn-dark" >toUpperCase</button>
<button onClick={lowercase} type="button"class="btnbtn-lg btn-dark">tolowerCase</button>
<button onClick={Copy} type="button" class="btnbtn-lg btn-dark">Copy</button>
</div>

<div id="btn2">
    <button onClick={Cut} type="button" class="btnbtn-lg btn-dark">Cut</button>
    <button onClick={Past}type="button" class="btnbtn-lg btn-dark" > Past</button>
    <button onClick={Space} type="button" class="btnbtn-lg btn-dark">Extra Space</button>
</div>

<div id="btn3">
    <button onClick={Remove} type="button" class="btnbtn-lg btn-dark" >Remove</button>
    {/* <button onClick={SelectAll} type="button" class="btnbtn-lg btn-dark" >SelectAll</button> */}
    <button  onClick={RES} type="button" class="btnbtn-lg btn-dark">Space</button>
</div>
        </div>
        </>

    )
}
export default Cart