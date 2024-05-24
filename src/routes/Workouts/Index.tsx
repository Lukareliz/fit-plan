import Header from "../../components/Header/Index"
import Navigation from "../../components/Navigation/Index"
import Dropdown from "../../components/Dropdown/Index"

const Workouts = () => {
  return (
    <main className="bg-gray h-full">
      <Header />
      <Navigation />
      <h4 className="text-white text-center text-lg font-light pt-6">Seus dias de treino.</h4>
      <section className="mt-6 flex flex-col">
        <Dropdown day="Segunda-feira" />
        <Dropdown day="Terça-feira" />
      </section>
    </main>
  )
}

export default Workouts