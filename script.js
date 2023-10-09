const target = document.querySelector('.welcome-text');

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both;">${letter}</span>`;
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
    text
        .split('')
        .map(flickerLetter)
        .map(colorLetter)
        .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);

neonGlory(target);
target.onclick = () =>  neonGlory(target);

function openPopup() {
    document.getElementById("signupPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("signupPopup").style.display = "none";
}

function redirectToSignup() {
    var role = document.querySelector('input[name="role"]:checked').value;
    
    if (role === "supplier") {
        window.location.href = "Signup_supplier.html";
    }
    if(role=="manufacturer"){
        window.location.href = "manufacturer_signup.html";
    }
}