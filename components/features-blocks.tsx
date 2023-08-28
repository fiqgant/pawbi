import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faLeaf,
  faBoxes,
  faRecycle,
  faCube,
  faUsers,
  faBullseye,
  faTree,
} from "@fortawesome/free-solid-svg-icons";

export default function FeaturesBlocks() {
  const items = [
    {
      icon: faSeedling,
      title: "Protein Alternatif",
      text: "Manfaatkan bioteknologi untuk menghasilkan daging, susu, dan telur tanpa melibatkan hewan.",
    },
    {
      icon: faLeaf,
      title: "Super Food",
      text: "Makanan super (super food) untuk nutrisi yang berkelanjutan.",
    },
    {
      icon: faBoxes,
      title: "Optimisasi Sumber Daya Lokal",
      text: "Tingkatkan efisiensi dan nilai tambah dari hasil bahan baku lokal.",
    },
    {
      icon: faRecycle,
      title: "Pengelolaan Limbah",
      text: "Pengelolaan limbah makanan untuk efisiensi sumber daya.",
    },
    {
      icon: faCube,
      title: "Biomaterial Inovatif",
      text: "Memanfaatkan teknologi untuk menghasilkan jenis bahan baru.",
    },
    {
      icon: faUsers,
      title: "Pemberdayaan Petani",
      text: "Untuk adopsi teknologi pertanian, akses ke pasar, dan inklusi keuangan.",
    },
    {
      icon: faBullseye,
      title: "Pertanian Presisi",
      text: "Pertanian presisi dan pertanian cerdas untuk produktivitas optimal.",
    },
    {
      icon: faTree,
      title: "Pertanian Restoratif",
      text: "Pertanian restoratif untuk regenerasi dan pelestarian ekosistem.",
    },
  ];

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
              Program ini menekankan penerapan teknologi dan alat digital untuk
              membantu menyelesaikan masalah-masalah besar di sektor makanan dan
              pertanian di Indonesia. Berikut adalah contoh-contoh area yang
              memerlukan solusi lebih efisien dan inovatif
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch md:max-w-2xl lg:max-w-6xl">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
              >
                <div className="rounded-full bg-teal-500 p-4 mb-2">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-6 h-6 text-white"
                  />
                </div>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
