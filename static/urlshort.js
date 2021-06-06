window.onload=()=>{
    const inputVal=document.querySelector("input");
    const button=document.querySelector(".btn");
    const copyBtn=document.querySelector(".copy-btn");
    
    const form=document.querySelector(".form");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const formData = encodeURIComponent(inputVal.name)+'='+encodeURIComponent(inputVal.value);

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body : formData
        }

        fetch('http://shortly-tech.herokuapp.com/',options)
        .then(response=>response.json())
        .then(data=>{
            inputVal.value=data.shortUrl;
            button.disabled=true;
            copyBtn.addEventListener("click",()=>{
                copyBtn.textContent="Copied";
                inputVal.select();
                document.execCommand('copy');

            });
            inputVal.addEventListener("input",()=>{
                button.disabled=false;
                copyBtn.textContent="Copy URL";
            });
        });
    });
    

}