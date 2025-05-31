// Bu funksiyani, API kaliti to'g'ri ishlashi uchun callback sifatida ishlatamiz
function initMap() {
  // Markaziy nuqtani belgilash
  const markaz = { lat: 38.0, lng: 67.5 };

  // Google Map ob'ektini yaratish
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: markaz
  });

  // Sanatoriyalar ro'yxati
  const sanatoriyalar = [
    {
      nomi: "Omonxona",
      koordinata: { lat: 38.2374, lng: 67.3140 },
      malumot: "Surxondaryo viloyati, Baysun tumani, Inkobod qishlog‘i"
    },
    {
      nomi: "Jayronxona",
      koordinata: { lat: 37.3319, lng: 67.4019 },
      malumot: "Termiz tumani, Yangiariq QFY, Qoraxon mahallasi"
    },
    {
      nomi: "Xo‘jaipok (buloq)",
      koordinata: { lat: 38.2638, lng: 67.5047 },
      malumot: "Xo‘jaipok mineral bulog‘i"
    },
    {
      nomi: "Xo‘jaipok sanatoriyasi",
      koordinata: { lat: 38.1855, lng: 67.7276 },
      malumot: "Oltinsoy tumani, Jobu MFY"
    },
    {
      nomi: "Termiz Marvaridi",
      koordinata: { lat: 37.3538, lng: 67.2446 },
      malumot: "Termiz tumani, Uchqizil MFY"
    }
  ];

  // Sanatoriyalarni xaritaga qo'shish
  sanatoriyalar.forEach((joy) => {
    const marker = new google.maps.Marker({
      position: joy.koordinata,
      map: map,
      title: joy.nomi
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<b>${joy.nomi}</b><br>${joy.malumot}`
    });

    // Markerga bosilsa, infoWindow ochiladi
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });

  // Xarita ustiga bosilsa, koordinatalar ko'rsatiladi
  map.addListener("click", (e) => {
    const lat = e.latLng.lat().toFixed(6);
    const lng = e.latLng.lng().toFixed(6);
    alert("Koordinatalar: " + lat + ", " + lng);
  });
}
