const mulaiBtn = document.getElementById('mulaiBtn');
const selesaiBtn = document.getElementById('selesaiBtn');
const materi = document.getElementById('materi');
const bgMusic = document.getElementById('bgMusic');
const narasiPendahuluan = document.getElementById('narasiPendahuluan');
const narasiMateri = document.getElementById('narasiMateri');
const narasiPenutup = document.getElementById('narasiPenutup');

mulaiBtn.addEventListener('click', () => {
  mulaiBtn.classList.add('hidden');
  materi.classList.remove('hidden');
  bgMusic.play();
  narasiPendahuluan.play();

  narasiPendahuluan.onended = () => {
    narasiMateri.play();
  };
});

selesaiBtn.addEventListener('click', () => {
  materi.classList.add('hidden');
  narasiMateri.pause();
  narasiPenutup.play();
  alert("Petualangan selesai! Kamu hebat 🌟");
});