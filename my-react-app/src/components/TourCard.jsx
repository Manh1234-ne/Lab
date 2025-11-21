import Button from "./Button";

export default function TourCard({ title, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white font-semibold text-lg drop-shadow">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex justify-between px-4 py-4">
        <Button label="Xem Thêm" />
        <Button label="Đặt Tour" />
      </div>
    </div>
  );
}
