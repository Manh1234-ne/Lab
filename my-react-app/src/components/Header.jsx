function Header() {
  return (
    <header className="w-full bg-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h2 className="text-xl font-bold text-gray-700">Home</h2>

        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Booking</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
