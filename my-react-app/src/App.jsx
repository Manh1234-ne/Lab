function App() {
  const name = "Nguyen Van B"
  const age = 19

  return (
    <>
      <h1 className="text-4xl font-bold text-amber-300" >hello {name}</h1>
      <p>Tuổi: {age + 1} </p>
      <p>Là học viên: {true ? "Có" : "Không"}</p>
    </>
  )
}

export default App
