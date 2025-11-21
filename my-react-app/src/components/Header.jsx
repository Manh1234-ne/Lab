import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="w-full bg-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/tours" className="hover:text-blue-600">Tour</Link>
          <Link to="#" className="hover:text-blue-600">Booking</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
