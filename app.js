new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 35,
  breakpoints: {
    600: { perView: 1 },
    1000: { perView: 2 },
    1400: { perView: 3 },
  },
}).mount();

new Glide(".glide-2", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 35,
  breakpoints: {
    600: { perView: 1 },
    1000: { perView: 2 },
    1400: { perView: 3 },
  },
}).mount();

new Glide(".glide-3", {
  type: "carousel",
  startAt: 0,
  perView: 5,
  gap: 35,
  breakpoints: {
    330: { perView: 1 },
    500: { perView: 2 },
    1000: { perView: 3 },
    1400: { perView: 5 },
  },
}).mount();
