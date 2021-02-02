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
   
    else{
        setSuccess(email)
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


const setError = (labelFor, errMsg) =>{
    const form_group = labelFor.parentElement;
    const errorSpan = form_group.querySelector('.errorMsg');
    const icon = form_group.querySelector('.fa-exclamation-circle');
    form_group.className = "form_group error";
    errorSpan.innerText = errMsg;
}

const setSuccess = (labelFor) =>{
    const form_group = labelFor.parentElement;
    form_group.className = "form_group success";

}