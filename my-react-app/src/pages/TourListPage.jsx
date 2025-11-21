import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TourListPage() {
  const tours = [
    {
      id: 1,
      title: "Du Lịch Đà Lạt",
      location: "Đà Lạt",
      days: "3 ngày 2 đêm",
      price: "2,000,000 đ",
      image:
        "https://th.bing.com/th/id/OIP.akfKSca2pdD4Kdfwhxi2hAHaEM?w=299&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 2,
      title: "Du Lịch Phú Quốc",
      location: "Phú Quốc",
      days: "4 ngày 3 đêm",
      price: "3,200,000 đ",
      image:
        "https://th.bing.com/th/id/OIP.Qnmn3avAoLMUzVV6yv2VSAHaET?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 3,
      title: "Du Lịch Hạ Long",
      location: "Hạ Long",
      days: "2 ngày 1 đêm",
      price: "1,800,000 đ",
      image:
        "https://th.bing.com/th/id/OIP.Q9864tN9yozexxzMMLa8OgHaE7?w=222&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Danh sách Tour
        </h1>

        {/* Bộ lọc */}
        <div className="mb-6 flex gap-4 flex-wrap">
          <button className="px-4 py-2 bg-white rounded-xl border shadow-sm">Đà Lạt</button>
          <button className="px-4 py-2 bg-white rounded-xl border shadow-sm">Phú Quốc</button>
          <button className="px-4 py-2 bg-white rounded-xl border shadow-sm">Hạ Long</button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 rounded-xl border shadow-sm"
          />
        </div>

        {/* GRID GIỐNG HOMEPAGE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow p-4">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover rounded-lg"
              />

              <div className="mt-4">
                <h3 className="font-semibold text-lg">{tour.title}</h3>
                <p className="text-gray-600">📍 {tour.location}</p>
                <p className="text-gray-600">⏱ {tour.days}</p>
                <p className="text-red-600 font-bold mt-2">💰 {tour.price}</p>
              </div>

              <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
