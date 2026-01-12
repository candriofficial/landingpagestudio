const templateData = {
  template1: {
    title: "Template High-Conversion",
    images: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    ],
    waLink:
      "https://wa.me/6282166983566?text=Halo%20Candri,%20saya%20mau%20beli%20Template%20High%20Conversion",
  },
  template2: {
    title: "Template Personal Branding",
    images: [
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=800&q=80",
    ],
    waLink:
      "https://wa.me/6282166983566?text=Halo%20Candri,%20saya%20mau%20beli%20Template%20Personal%20Branding",
  },
};

function openModal(id) {
  const modal = document.getElementById("previewModal");
  const track = document.getElementById("sliderTrack");
  const title = document.getElementById("modalTitle");
  const orderBtn = document.getElementById("orderBtn");

  const data = templateData[id];
  title.innerText = data.title;
  orderBtn.href = data.waLink;

  track.innerHTML = "";
  data.images.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    track.appendChild(img);
  });

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("previewModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.onclick = function (event) {
  const modal = document.getElementById("previewModal");
  if (event.target == modal) {
    closeModal();
  }
};
