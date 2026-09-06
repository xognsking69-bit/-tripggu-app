document.getElementById("verify").addEventListener("click",()=>{
 const code=document.getElementById("code").value.trim();
 const msg=document.getElementById("msg");
 if(!code){msg.textContent="이용코드를 입력해 주세요.";return;}
 msg.textContent="현재는 인증 서버 연결 전 미리보기입니다.";
});