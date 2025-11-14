import Footer from './components/Footer'
import Header from './components/Header'


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
    <div className="min-h-screen flex flex-col justify-between p-4 gap-4">
      <Header />
      <hr />
      <h1 className="uppercase text-center text-2xl font-semibold text-pink-500">Kham pha san pham viettravel</h1>
      <p className="text-md font-medium text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla autem repellat dolorum quibusdam possimus officia esse, officiis modi itaque reprehenderit tempora nostrum quam molestias expedita ipsam perferendis ipsum vero.</p>
      <div className="flex gap-2 my-4">
        {tours.map(tour => (
          <div key={tour.id}>
            <img src={tour.image} alt={tour.title} width={500} />
            <h3 className="font-semibold">{tour.title}</h3>
          </div>
        ))}
        {/* <div>
          <img src={tours[0].image} alt={tours[0].title} width={500} />
          <h3 className="font-semibold">{tours[0].title}</h3>
        </div>
        <div>
          <img src={tours[1].image} alt={tours[1].title} width={500} />
          <h3 className="font-semibold">{tours[1].title}</h3>
        </div>
        <div>
          <img src={tours[2].image} alt={tours[2].title} width={500} />
          <h3 className="font-semibold">{tours[2].title}</h3>
        </div> */}


      </div>
          <Footer />
    </div>
  )
}

export default App
