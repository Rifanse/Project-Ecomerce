//  Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector('#hamburger-menu');

//  ketika Hamburger menu di klik
hamburger.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

// klik di luar Sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const loaderWrap = document.getElementById('loaderWrap');
    const content = document.getElementsByClassName('wrapper');

    function showLoader() {
      if (!loaderWrap) return;
      loaderWrap.classList.remove('hidden');
    }

    function hideLoader() {
      if (!loaderWrap) return;
      // fade-out dulu, lalu display none setelah transisi selesai
      loaderWrap.classList.add('hidden');
      // tampilkan konten (jika sebelumnya disembunyikan)
      if (content) content.style.display = 'block';
      // setTimeout untuk benar-benar menghapus overlay dari flow jika mau
      setTimeout(() => {
        if (loaderWrap) loaderWrap.style.display = 'none';
      }, 350); // agak lebih lama dari durasi transition
    }

    // contoh pemakaian:
    showLoader();
    setTimeout(hideLoader, 1000);
