import { Link } from "react-router-dom"
import { useState } from "react"

const Navigation = () => {
    const [selected, setSelected] = useState<string>('');

    return (
        <nav className="bg-gray flex h-28 justify-center items-center gap-20 xl:gap-80">
            <Link to={"/"} className={`text-white text-xl font-bold ${selected === 'link1' ? 'border-b-2 border-fit-green' : 'opacity-50'}`} onClick={() => setSelected('link1')}>Treinos</Link>
            <Link to={"/exercises"} className={`text-white text-xl font-bold ${selected === 'link2' ? 'border-b-2 border-fit-green' : 'opacity-50'}`} onClick={() => setSelected('link2')}>Exercícios</Link>
        </nav>
    )
}

export default Navigation