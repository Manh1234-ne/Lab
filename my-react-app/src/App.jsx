import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const tours = [
    {
      id: 1,
      title: "Khu nghỉ dưỡng",
      image: "https://trave.com.vn/wp-content/uploads/2025/05/Cac-Loai-Tour-Thuong-Co-Gia-Hop-Ly.webp"
    },
    {
      id: 2,
      title: "Phố Cổ Hội An",
      image: "https://trave.com.vn/wp-content/uploads/2025/05/Pho-Co-Hoi-An-Net-Dep-Hoai-Co-va-Lang-Man.webp"
    },
    {
      id: 3,
      title: "Du lịch biển",
      image: "https://trave.com.vn/wp-content/uploads/2025/05/Luu-Y-Khi-Du-Lich-Bien-Dao-An-Toan.webp"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="w-full max-w-6xl mx-auto p-6">
        <h1 className="text-center text-2xl font-bold text-pink-500 tracking-wide mb-3">
          KHÁM PHÁ SẢN PHẨM VIETTRAVEL
        </h1>

        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Viettravel mang đến những hành trình tuyệt vời, nơi mỗi chuyến đi không chỉ là khám phá
          mà còn là trải nghiệm văn hóa, ẩm thực và phong cảnh đặc sắc. Hãy cùng chúng tôi tạo nên
          những kỷ niệm đáng nhớ trên từng cung đường.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tours.map(tour => (
            <div key={tour.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-800">{tour.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
