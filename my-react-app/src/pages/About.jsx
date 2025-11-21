import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />

      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-blue-600">Giới thiệu 404 Error Travel</h1>

        <img
          src="https://th.bing.com/th/id/OIP.e0FQGDyyADClmPx9WHaApAHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="VietTravel"
          className="w-full max-w-2xl mx-auto mt-6 rounded-lg shadow-lg"
        />

        <p className="mt-6 text-gray-700 max-w-2xl mx-auto leading-relaxed">
          404 Error Travel tự hào là một trong những công ty du lịch uy tín hàng đầu Việt Nam,
          mang đến cho khách hàng những hành trình khám phá đầy cảm hứng. Với đội ngũ
          chuyên nghiệp và dịch vụ chất lượng, chúng tôi luôn nỗ lực tạo ra những trải
          nghiệm tuyệt vời và đáng nhớ nhất cho mỗi chuyến đi của bạn.
        </p>
      </div>

      <Footer />
    </div>
  );
}
