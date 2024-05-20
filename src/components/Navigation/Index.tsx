import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="bg-gray flex h-20 justify-center items-center gap-20 xl:gap-80">
            <Link to={"/"} className="text-white text-xl font-bold">Treinos</Link>
            <Link to={"/exercises"} className="text-white text-xl font-bold">Exercícios</Link>
        </nav>
    )
}

export default Navigation