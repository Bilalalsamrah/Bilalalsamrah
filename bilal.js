const frm=document.getElementById('form');
const cont = document.getElementById("con");
const txt = document.getElementById('txt');
frm.addEventListener('submit',(e) => {

  if(txt.value.length ===0)
    e.preventDefault()
    else
    alert("Your message was sens");

}
)











