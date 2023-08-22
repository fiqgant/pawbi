import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faLeaf,
  faBoxes,
  faRecycle,
  faCube,
  faUsers,
  faBullseye,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Ruang Lingkup Program</h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-6xl">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="rounded-full bg-teal-500 p-4 p-4 mb-2">
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="w-6 h-6 text-white "
                />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Produk Pangan
              </h4>
              <p className="text-gray-600 text-center">
                Produk pangan berbasis protein nabati yang inovatif dan
                berkualitas tinggi.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="rounded-full bg-teal-500 p-4 p-4 mb-2">
                <FontAwesomeIcon
                  icon={faLeaf}
                  className="w-6 h-6 text-white "
                />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Super Food
              </h4>
              <p className="text-gray-600 text-center">
                Makanan super (superfood) untuk nutrisi yang berkelanjutan.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="rounded-full bg-teal-500 p-4 p-4 mb-2">
                <FontAwesomeIcon
                  icon={faBoxes}
                  className="w-6 h-6 text-white "
                />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Bahan Baku
              </h4>
              <p className="text-gray-600 text-center">
                Pemanfaatan bahan baku lokal untuk pangan alternatif dan aditif
                pangan.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="rounded-full bg-teal-500 p-4 p-4 mb-2">
                <FontAwesomeIcon
                  icon={faRecycle}
                  className="w-6 h-6 text-white "
                />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Pengelolaan Limbah
              </h4>
              <p className="text-gray-600 text-center">
                Pengelolaan limbah makanan untuk efisiensi sumber daya.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="rounded-full bg-teal-500 p-4 p-4 mb-2">
                <FontAwesomeIcon
                  icon={faCube}
                  className="w-6 h-6 text-white "
                />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Biomaterial Inovatif
              </h4>
              <p className="text-gray-600 text-center">
                Biomaterial inovatif untuk solusi pengemasan yang berkelanjutan.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="rounded-full bg-teal-500 p-4 p-4 mb-2">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="w-6 h-6 text-white "
                />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Pemberdayaan Petani
              </h4>
              <p className="text-gray-600 text-center">
                Untuk adopsi teknologi pertanian, akses ke pasar, dan inklusi
                keuangan.
              </p>
            </div>

            {/* 7th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="rounded-full bg-teal-500 p-4 p-4 mb-2">
                <FontAwesomeIcon
                  icon={faBullseye}
                  className="w-6 h-6 text-white "
                />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Pertanian Presisi
              </h4>
              <p className="text-gray-600 text-center">
                Pertanian presisi dan pertanian cerdas untuk produktivitas
                optimal.
              </p>
            </div>

            {/* 8th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="rounded-full bg-teal-500 p-4 p-4 mb-2">
                <FontAwesomeIcon
                  icon={faTree}
                  className="w-6 h-6 text-white "
                />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Pertanian Restoratif
              </h4>
              <p className="text-gray-600 text-center">
                Pertanian restoratif untuk regenerasi dan pelestarian ekosistem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
