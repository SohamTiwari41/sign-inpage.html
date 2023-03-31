( function(){
    const fonts =["cursive","sans-serif","monospace"];
    let captchavalue = "";
    function generateCaptcha(){
        let value = btoa(Math.random()*100000000);
        value = value.substr(0,5+math.random()*5);
        captchavalue = value;
    }
    function setcaptcha(){
       let html = captchavalue.split("").map((char)=>{
          const rotate = -20 + math.trunc(math.random()*30);
          const font = math.trunc(math.random()*fonts.lenghth);
          return <span
          style="
          transform:rotate(${rotate}deg); 
          font-family:${fonts[font]}
          "
          >${char}</span>; 
        }).join("");
        document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click",function(){
            generateCaptcha();
            setcaptcha();
        });
        generateCaptcha();
        setcaptcha();
    
    }
     initcaptcha();
     document.querySelector(".login-form #login-btn").addEventListener("click",function(){
        let inputcaptchavalue =document.querySelector(".login-form.captcha-form.captcha-input").value;
        if(inputcaptchavalue === captchavalue){
        SVGFEDropShadowElement("", "Logging In!","success");
        }else{
            SVGFEDropShadowElement("invalid captcha")
        }

     });
    
})();
