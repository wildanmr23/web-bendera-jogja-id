document
  .getElementById("formPemesanan")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah submit form secara default

    // Mengambil nilai input dari form
    var nama = document.getElementById("nama").value;
    var telepon = document.getElementById("telepon").value;
    var deskripsi = document.getElementById("deskripsi").value;

    // Mengganti karakter spasi dengan %20 untuk format URL
    nama = encodeURIComponent(nama);
    telepon = encodeURIComponent(telepon);
    deskripsi = encodeURIComponent(deskripsi);

    // Membuat pesan yang akan dikirim ke WhatsApp
    var message = `Halo, saya ingin memesan bendera.%0ANama: ${nama}%0ANomor Telepon: ${telepon}%0ADeskripsi Pemesanan: ${deskripsi}`;

    // Nomor WhatsApp tujuan
    var whatsappNumber = "6285863968033"; // Ganti dengan nomor WhatsApp Anda (tanpa tanda +)

    // URL WhatsApp API untuk mengirim pesan
    var whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Redirect ke WhatsApp
    window.open(whatsappURL, "_blank");
  });
