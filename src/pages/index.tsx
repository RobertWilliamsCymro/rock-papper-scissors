export default function Home() {
  return (
    <>

      <main className="flex justify-center min-h-screen">        
        <div className="border-slate-200">
          <img className="mt-8" src="logo.svg" alt="A logo of the game Rock, Paper, Scissors" />
          <div className="bg-white rounded-md flex flex-col justify-center items-center py-3">
            <h2 className="">Score</h2>
            <p className="">12</p>
          </div>
        </div>
      </main>
    </>
  )
}

