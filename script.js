// GANTI dengan nomor WhatsApp bisnis klien: kode negara + nomor, tanpa tanda + atau spasi.
// Contoh format Indonesia: 62812XXXXXXXX
const WHATSAPP_NUMBER = "6280000000000";

document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });
}

const params = new URLSearchParams(location.search);
const vehicle = document.querySelector("#kendaraan");
if (vehicle && params.get("kendaraan")) vehicle.value = params.get("kendaraan");

const form = document.querySelector("#booking-form");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER) || WHATSAPP_NUMBER === "6280000000000") {
      alert("Nomor WhatsApp belum diatur. Edit WHATSAPP_NUMBER di file script.js terlebih dahulu.");
      return;
    }
    const d = new FormData(form);
    const msg = [
      "Halo, saya ingin bertanya tentang layanan rental mobil.",
      `Nama: ${d.get("nama") || "-"}`,
      `Nomor telepon: ${d.get("telepon") || "-"}`,
      `Kendaraan/layanan: ${d.get("kendaraan") || "-"}`,
      `Tanggal rencana sewa: ${d.get("tanggal") || "-"}`,
      `Pesan: ${d.get("pesan") || "-"}`
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  });
}


// D DRIVE RENTAL AUTO-HIDE NAVBAR
(() => {
  const header = document.querySelector(".header");
  if (!header) return;

  let previousY = window.scrollY;
  let ticking = false;
  const threshold = 8;

  function updateNavbar() {
    const currentY = Math.max(0, window.scrollY);
    const nav = header.querySelector(".nav");
    const menuOpen = nav && nav.classList.contains("open");

    if (currentY < 50 || menuOpen) {
      header.classList.remove("nav-hidden");
    } else if (currentY > previousY + threshold) {
      header.classList.add("nav-hidden");
    } else if (currentY < previousY - threshold) {
      header.classList.remove("nav-hidden");
    }

    previousY = currentY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    header.classList.remove("nav-hidden");
    previousY = window.scrollY;
  });

  header.addEventListener("mouseenter", () => {
    if (window.scrollY < 50) {
      header.classList.remove("nav-hidden");
    }
  });
})();
