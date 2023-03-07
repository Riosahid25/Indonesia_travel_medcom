// For Scroll-animate star
// event pada saay link di klik
$(".page-scroll").on("click", function (e) {
  // ambil isi atribut href-nya dulu
  var hrefnya = $(this).attr("href");

  // lalu tankap elemen href yang bersangkutan dari "this"(elemen tertentu)
  var elementHref = $(hrefnya);

  // lalu pindahkan scro  llnya
  $("html").animate(
    {
      scrollTop: elementHref.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  // penghenti atribut href e agar tidak jalan
  e.preventDefault();
});
//
