import { LogoIcon, ShoppingCartIcon, UserIcon } from "./icons";
import Search from "./search";
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';

const TopBar = () => {
    return(
        <div>
            <div>
                <h3>
                    <LogoIcon /> Macomart</h3>
                <Search />
                <button>
                   <ArrowDownCircleIcon />
                   <p> Sign in</p>
                </button>
                 <button>
                 <ShoppingCartIcon />
                 <p> View Cart</p>
                 </button>

                 <button>
                 <UserIcon />
                 <p> account </p>
                 </button>

                 <button>
                 <p> Become a Seller</p>
                 </button>
            </div>
        </div>
    )
}
export default TopBar;