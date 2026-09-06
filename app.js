const AUTH_SERVER = "https://tripggu-auth.xognsking69.workers.dev";

document.getElementById("verify").addEventListener("click", async () => {
  const code = document.getElementById("code").value.trim();
  const msg = document.getElementById("msg");

  if (!code) {
    msg.textContent = "이용코드를 입력해 주세요.";
    return;
  }

  msg.textContent = "이용코드를 확인하고 있습니다...";

  try {
    const response = await fetch(AUTH_SERVER + "/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
      }),
    });

    const data = await response.json();

    if (response.ok && data.valid) {
      msg.textContent = "인증되었습니다. Tripggu를 이용할 수 있습니다.";
      localStorage.setItem("tripggu_auth", "true");

      setTimeout(() => {
        window.location.href = "./main.html";
      }, 1000);
    } else {
      msg.textContent =
        data.message || "유효하지 않은 이용코드입니다.";
    }
  } catch (error) {
    console.error(error);
    msg.textContent =
      "인증 서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.";
  }
});
