import Header from "../../components/Header/Index"
import Navigation from "../../components/Navigation/Index"

const Workouts = () => {
  return (
    <main className="bg-gray h-80">
      <Header />
      <Navigation />
      <h4 className="text-white text-center text-lg font-light pt-6">Seus dias de treino.</h4>
    </main>
  )
}

export default Workouts