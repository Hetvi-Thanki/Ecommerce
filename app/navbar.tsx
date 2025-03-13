import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="bg-black shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link href={"/products"} className="text-gray-500 hover:text-white">Products</Link>
                    </li>
                    <li>
                        <Link href={"/cart"} className="text-gray-500 hover:text-white">Cart</Link>
                    </li>
                    <li>
                        <Link href={"/checkout"} className="text-gray-500 hover:text-white">Check Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}