import Header from "../components/Header";
import Footer from "../components/Footer";
import TourCard from "../components/TourCard";
import Heading from "../components/Heading";

function HomePage() {
  const tours = [
    {
      id: 1,
      title: "Du Lịch Đà Lạt",
      image:
        "https://th.bing.com/th/id/OIP.akfKSca2pdD4Kdfwhxi2hAHaEM?w=299&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 2,
      title: "Du Lịch Phú Quốc",
      image:
        "https://th.bing.com/th/id/OIP.Qnmn3avAoLMUzVV6yv2VSAHaET?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 3,
      title: "Du Lịch Hạ Long",
      image:
        "https://th.bing.com/th/id/OIP.Q9864tN9yozexxzMMLa8OgHaE7?w=222&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="px-4 md:px-10">
        <div className="text-center my-12">
          <Heading label="Khám phá sản phẩm 404 Error Travel" />

          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-base leading-relaxed">
            404 Error Travel mang đến những hành trình tuyệt vời, nơi mỗi chuyến đi không chỉ là khám phá
            mà còn là trải nghiệm văn hóa, ẩm thực và phong cảnh đặc sắc. Hãy cùng chúng tôi tạo nên
            những kỷ niệm đáng nhớ trên từng cung đường.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-16">
          {tours.map((tour) => (
            <TourCard key={tour.id} title={tour.title} image={tour.image} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
