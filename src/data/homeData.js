// src/data/homeData.js
const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href;

export const cont = [
  { src: asset('img/Poster/1.png'), title: "Don't Look Up", rating: '4.5/5' },
  { src: asset('img/Poster/2.png'), title: 'The Batman', rating: '4.2/5' },
  { src: asset('img/Poster/3.png'), title: 'Blue Lock', rating: '4.6/5', badge: 'Episode Baru' },
  { src: asset('img/Poster/4.png'), title: 'A Man Called Otto', rating: '4.4/5' },
];

export const topToday = [
  { src: asset('img/Poster/Number=14.png'), badge: 'Episode Baru' },
  { src: asset('img/Poster/Number=25.png') },
  { src: asset('img/Poster/Number=29.png') },
  { src: asset('img/Poster/Number=9.png'), badge: 'Episode Baru' },
  { src: asset('img/Poster/Number=12.png') },
];

export const trending = [
  { src: asset('img/Poster/Number=7.png'), badge: 'Top\n10' },
  { src: asset('img/Poster/Number=16.png'), badge: 'Top\n10' },
  { src: asset('img/Poster/Number=30.png'), badge: 'Top\n10' },
  { src: asset('img/Poster/Number=10.png'), badge: 'Top\n10' },
  { src: asset('img/Poster/Number=6.png'), badge: 'Top\n10' },
];

export const newRelease = [
  { src: asset('img/Poster/Number=6.png'), badge: 'Top\n10' },
  { src: asset('img/Poster/Number=17.png'), badge: 'Episode Baru' },
  { src: asset('img/Poster/Number=12.png'), badge: 'Top\n10' },
  { src: asset('img/Poster/Number=9.png'), badge: 'Episode Baru' },
  { src: asset('img/Poster/Number=13.png') },
];
