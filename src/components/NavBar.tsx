import { PiCoffee } from "react-icons/pi";
import { NavBarData } from "../data/mockData.ts"
import { FaUser } from "react-icons/fa6";

function NavBar(){
    return (
        <nav className="py-5">
            <div className="container flex justify-between items-center">
                {/* logo */}
                <div className="flex items-center gap-2 text-3xl  mx-6" >
                    <PiCoffee />
                     Cafe Aroma
                </div>
                {/* menu */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-4">
                        {
                            NavBarData.map(item=> (
                                <li key={item.id}>
                                <a
                                    href={item.link}
                                    className="inline-block text-base py-2 px-3 uppercase cursor-pointer">
                                 {item.title}
                                </a>
                                </li>
                            ))
                        }
                        <button className="text=xl ps-14">
                         <FaUser />
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar