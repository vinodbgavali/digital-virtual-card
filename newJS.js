const form = document.querySelector('#newform');
const fullname = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');


newform.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInput();
});


const checkInput = () => {
    const nameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    console.log(nameValue,emailValue,subjectValue,messageValue);
    if(nameValue === "" ){
        setError(fullname,"Name cannot be Blank");
    }
   
    else{
        setSuccess(fullname)
    }

    if(emailValue === "" ){
        setError(email,"email cannot be Blank");
    }
   
    else if(!isEmail(emailValue)){
        setError(email,"email not valid");
    }

    else{
        setSuccess(email);
    }

    if(subjectValue === "" ){
        setError(subject,"subject cannot be Blank");
    }
   
    else{
        setSuccess(subject)
    }

    if(messageValue === "" ){
        setError(message,"Message cannot be Blank");
    }
   
    else{
        setSuccess(message)
    }
    
}

const clearForm = () =>
{
  const form_group = document.querySelectorAll(".form_group");
  form_group.forEach(e => {
      e.classList = "form_group";
  });
}



const setError = (labelFor, errMsg) =>{
    const form_input = labelFor.parentElement;
    const errorSpan = form_input.querySelector('.errorMsg');
    const icon = form_input.querySelector('.fa-exclamation-circle');
    form_input.className = "form_group error";
    errorSpan.innerText = errMsg;
}

const setSuccess = (labelFor) =>{
    const form_input = labelFor.parentElement;
    form_input.className = "form_group success ";

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



// gallery display image in banner  

function expandImage(imgs) {
    var expandImg = document.getElementById("expandedImg");

    expandImg.src = imgs.src;
  
 
  }


 


  document.querySelector(".whatsppBtn").addEventListener("click",function(e){
    
    const mobNumner = document.querySelector('#whatsppNumber').value;
    console.log(mobNumner);
    if(mobNumner.length<9){
        e.preventDefault();
      
        alert("Mobile Number not valid");
        
    }
    else{
       const whatsAppAnchor = document.querySelector(".whatsppBtn");
       console.log(whatsAppAnchor);
       whatsAppAnchor.href = "https://wa.me/"+mobNumner+"?text=hi there";
    }
    

});


var footerBtn = document.getElementsByClassName("footer_item");
console.log(footerBtn);
for (var i = 0; i < footerBtn.length; i++) {
    footerBtn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
  }




