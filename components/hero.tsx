import Thumb from "@/public/images/thumb.png";
import ModalVideo from "@/components/modal-video";

export default function Hero() {
  return (
    <section className="relative">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/videos/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 z-1 hidden md:block"></div>

      {/* Illustration behind hero content */}
      {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-0 "
        aria-hidden="true"
      >
                <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#DCE35B" offset="0%" />
              <stop stopColor="#4ECEC1" offset="77.402%" />
              <stop stopColor="#45B649" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Pre-Akselerator <br></br>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-teal-400">
                FoodTech & AgriTech
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-base md:text-lg lg:text-xl text-gray-800 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Selamat datang di program kewirausahaan, yang
                kami tawarkan{" "}
                <span className="bg-yellow-400">secara gratis!</span> Program
                ini dirancang untuk membantu anda mewujudkan gagasan anda
                menjadi ide wirausaha mandiri. Di sini, Anda akan bertemu dengan
                rekan-rekan sejiwa, menemukan ide bisnis yang bisa diwujudkan,
                belajar tentang operasi startup, dan mempersiapkan diri untuk
                mencari pendanaan pertama bagi usaha Anda.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  {/* <a
                    className="btn text-white bg-teal-500 hover:bg-green-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#program"
                  >
                    Tonton Video
                  </a> */}
                  <ModalVideo
                    thumb={Thumb}
                    thumbWidth={216} // 50% of 432
                    thumbHeight={384} // 50% of 768
                    thumbAlt="Modal video thumbnail"
                    video="/videos/video.mp4"
                    videoWidth={324} // 50% of 1080
                    videoHeight={576} // 50% of 1920
                  />
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    target="_blank"
                    href="https://bit.ly/PreAkseleratorWBI"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={Thumb}
            thumbWidth={216} // 50% of 432
            thumbHeight={384} // 50% of 768
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={324} // 50% of 1080
            videoHeight={576} // 50% of 1920
          /> */}
        </div>
      </div>
    </section>
  );
}
