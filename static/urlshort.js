window.onload=()=>{
    const inputVal=document.querySelector("input");
    const button=document.querySelector(".btn");
    const copyBtn=document.querySelector(".copy-btn");
    const table=document.querySelector('table');
    const secondbtn=document.querySelector('#list-btn');

    
    
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

        fetch('https://shortlyyy.onrender.com/',options)
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
            secondbtn.addEventListener("click",()=>{
                let valRow=document.createElement('tr');
                let valCell=document.createElement('td');
                let cellText=document.createTextNode("cell in row ");
                table.appendChild(valRow);
                valRow.appendChild(valCell);
                valCell.appendChild(cellText);
            });
        });
    });
    

}