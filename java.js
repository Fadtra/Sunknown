// Mengambil elemen dari HTML
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
const loginButton = document.getElementById("loginButton");


// Ketika form dikirim
form.addEventListener("submit", function(event) {

    // Mencegah halaman melakukan reload
    event.preventDefault();

    // Mengambil nilai input
    const usernameValue = username.value.trim();
    const passwordValue = password.value;

    // Validasi username
    if (usernameValue === "") {

        message.textContent = "Username atau email harus diisi.";
        message.style.color = "red";

        username.focus();

        return;
    }

    // Validasi password
    if (passwordValue === "") {

        message.textContent = "Password harus diisi.";
        message.style.color = "red";

        password.focus();

        return;
    }

    // Validasi panjang password
    if (passwordValue.length < 6) {

        message.textContent =
            "Password minimal 6 karakter.";

        message.style.color = "red";

        password.focus();

        return;
    }

    // Mengubah status tombol
    loginButton.disabled = true;
    loginButton.textContent = "Memproses...";

    /*
        Demo saja.

        Data login TIDAK dikirim ke Instagram
        dan TIDAK dikirim ke server mana pun.
    */

    setTimeout(function() {

        message.textContent =
            "Demo login berhasil. Tidak ada data yang dikirim.";

        message.style.color = "green";

        loginButton.disabled = false;
        loginButton.textContent = "Log in";

    }, 1000);

});

