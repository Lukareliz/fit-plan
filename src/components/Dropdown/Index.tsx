import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai"
import exercise from '../../exerciseList.json'
import { useState } from "react";

interface DropdownProps {
    day: string;
}

interface exercise {
    name: string;
    muscle_group: string;
    equipment: string;
}

const Dropdown: React.FC<DropdownProps> = ({ day }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-center">
            <div className={`relative flex flex-col items-center w-[90%] lg:w-[50%] h-auto rounded-xl transition-all duration-300 ${isOpen ? 'pb-4' : ''}`}>
                <button onClick={() => setIsOpen((prev) => !prev)} className="bg-black text-white p-4 w-full flex items-center justify-between font-bold text-lg rounded-full tracking-wider">
                    {day}
                    {!isOpen ? (<AiOutlineCaretRight className="h-8" />) : (<AiOutlineCaretDown className="h-8 text-fit-green" />)}
                </button>
                {isOpen && (
                    <div className="bg-black flex gap-5 flex-col items-start rounded-xl p-2 w-full mt-2 overflow-hidden transition-all duration-300">
                        {/* Esta estrutura no futuro irá mudar para recever a escolha dinâmica dos exercícios. */}
                        {exercise.map((item, i) => (
                            <div className="flex w-full justify-between" key={i}>
                                <h3 className="text-white">{item.name}</h3>
                                <input type="checkbox" name="check-exercise" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown