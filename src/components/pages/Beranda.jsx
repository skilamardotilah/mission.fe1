// src/pages/Beranda.jsx
import Navbar from '@/components/organisms/Navbar.jsx';
import CarouselRow from '@/components/organisms/CarouselRow.jsx';
import Footer from '@/components/organisms/Footer.jsx';
import HeroSection from '@/components/organisms/HeroSection.jsx';

import { cont, topToday, trending, newRelease } from '@/data/homeData.js';

const asset = (p) => new URL(`../../assets/${p}`, import.meta.url).href;

export default function Beranda() {
  return (
    <div className="bg-[#181A1C] text-white font-lato min-h-screen">
      <Navbar />

      {/* HERO */}
      <HeroSection
        bg={asset('img/Poster/hero.png')}
        title="Duty After School"
        description={`Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.`}
      />

      {/* CAROUSELS */}
      <CarouselRow title="Melanjutkan Tonton Film" items={cont} variant="landscape" />
      <CarouselRow title="Top Rating Film dan Series Hari Ini" items={topToday} variant="portrait" />
      <CarouselRow title="Film Trending" items={trending} variant="portrait" />
      <CarouselRow title="Rilis Baru" items={newRelease} variant="portrait" />

      <Footer />
    </div>
  );
}
