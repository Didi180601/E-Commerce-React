import logo from "../assets/img/logo/Logo.png";

const FooterComponent = () => {
  return (
    <footer className="bg-dark pt-6 pb-12">
      <div className="container">
        {/* Logo di Tengah */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-24 h-14" />
        </div>

        {/* Bagian Informasi */}
        <div className="flex flex-wrap justify-between text-center md:text-left">
          {/* Contact Kami */}
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Contact Kami
            </h3>
            <p className="text-slate-300">enquiry@edutech.com</p>
            <p className="text-slate-300">
              Graha Merah Putih Buah Batu, Jl. Terusan Buah Batu No.33,
              Batununggal
            </p>
            <p className="text-slate-300">Kota Bandung, Jawa Barat</p>
          </div>

          {/* Kategori Tulisan */}
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Kategori Tulisan
            </h3>
            <ul className="text-slate-300 space-y-2">
              {["Programming", "Teknologi", "Gaya Hidup"].map((category) => (
                <li key={category}>
                  <a href="#" className="hover:text-primary">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tautan */}
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold text-white">Tautan</h3>
            <ul className="text-slate-300 space-y-2">
              {["Beranda", "Tentang Kami", "Kontak Kami", "Bootcamp Kami"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bagian Sosial Media */}
        <div className="w-full border-t border-slate-700 pt-8">
          <div className="flex justify-center space-x-4 mb-4">
            {[
              { href: "https://www.youtube.com/@BTWEdutechofficial", icon: "ri-youtube-fill" },
              { href: "https://www.instagram.com/btwedutechofficial/", icon: "ri-instagram-fill" },
              { href: "#", icon: "ri-twitter-x-fill" },
              { href: "https://www.tiktok.com/@btwedutechofficial", icon: "ri-tiktok-fill" },
            ].map(({ href, icon }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white transition"
              >
                <i className={`${icon} text-xl`}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-xs font-medium text-slate-500">
            Dibuat dengan <span className="text-pink-500">❤️</span> oleh
            <a href="https://www.instagram.com/didi.nrchyd" target="_blank" className="font-bold text-primary">
              {" "}
              Budi Nurcahyadi{" "}
            </a>
            , menggunakan
            <a
              href="https://react.dev/"
              target="_blank"
              className="font-bold text-slate-300"
            >
              {" "}
              React.dev
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
