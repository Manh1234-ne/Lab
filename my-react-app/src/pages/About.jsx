import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />

      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-blue-600">Giới thiệu VietTravel</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          VietTravel là công ty hàng đầu trong lĩnh vực du lịch, mang đến cho bạn
          những chuyến đi thú vị và trải nghiệm tuyệt vời.
        </p>
      </div>

      <Footer />
    </div>
  );
}
