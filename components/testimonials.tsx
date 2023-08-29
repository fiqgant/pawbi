import Image from "next/image";
import Jenny from "@/public/images/jenny.png";
import Nf from "@/public/images/nutrifood.png";
import Fa from "@/public/images/foodadvice.png";
import Kgf from "@/public/images/kgf.png";
import Ke from "@/public/images/ke.png";
import Wbi from "@/public/images/wbi.png";

export default function Testimonials() {
  return (
    <section id="narasumber-mentor" className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left 0 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32 animate-float"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#DCE35B" offset="0%" />
              <stop stopColor="#4ECEC1" offset="77.402%" />
              <stop stopColor="#45B649" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1430" cy="128" r="120" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-700 via-yellow-300 to-emerald-500">
                Kontributor Program
              </span>
            </h1>
            {/* <h2 className="h2 mb-4">Narasumber dan Mentor</h2> */}
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Program ini menggabungkan praktik terbaik pelatihan kewirausahaan
              internasional dengan keahlian para pengusaha lokal.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                className="md:max-w-none mx-auto rounded"
                src={Nf}
                width={100}
                alt="Nutrifood"
              />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                className="md:max-w-none mx-auto rounded"
                src={Fa}
                width={100}
                alt="Food Advice"
              />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                className="md:max-w-none mx-auto rounded"
                src={Kgf}
                width={150}
                alt="KGF"
              />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image
                className="md:max-w-none mx-auto rounded"
                src={Ke}
                width={150}
                alt="Kebun Efi"
              />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
              <Image
                className="md:max-w-none mx-auto rounded"
                src={Wbi}
                width={150}
                alt="WBI"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image
                    className="relative rounded-full"
                    src={Jenny}
                    width={96}
                    height={96}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Ini adalah peluang unik bagi para mahasiswa Sumatera Utara
                  yang bercita-cita menjadi pengusaha. Program kami akan
                  membantu Anda memperoleh keterampilan bisnis praktis yang
                  diperlukan, membentuk tim dengan orang sejiwa, menemukan dan
                  memvalidasi ide bisnis yang menjanjikan, serta mempersiapkan
                  diri untuk menarik investasi dan mengembangkan bisnis Anda
                  lebih lanjut “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Dr. Ir. Jenny Elisabeth, MS
                </cite>
                <div className="text-gray-600">
                  <span>Direktur</span>{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://wbi.ac.id"
                  >
                    Politeknik Wilmar Bisnis Indonesia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
