import { LogoIcon, ShoppingCartIcon, UserIcon } from "./icons";
import Search from "./search";
import { ArrowRightCircleIcon} from '@heroicons/react/24/solid';
import Link from "next/link";

const TopBar = () => {
    return (
        <nav className="bg-white shadow-md py-2 px-4 flex items-center justify-between ">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-4">
                 <LogoIcon className="h-8 w-8" />
                <h3 className="text-xl font-semibold">Macomart</h3>
            </Link>

            {/* Search Bar */}
            <div className="flex flex-grow max-w-lg mx-4">
                <Search />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                    <ArrowRightCircleIcon className="h-6 w-6" />
                    <p>Sign in</p>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                    <ShoppingCartIcon className="h-6 w-6" />
                    <p>View Cart</p>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                    <UserIcon className="h-6 w-6" />
                    <p>Account</p>
                </button>
                <button className="text-primary p-2 rounded hover:text-blue-600 bg-gray2">
                    <p>Become a Seller</p>
                </button>
            </div>
        </nav>
    );
}

export default TopBar;
