import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const Navbar = () => {

    const count = useSelector((state) => state.favorite.value)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Rick&MortyAPP
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/characters"
                    >
                        Characters
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/favorites"
                    >
                        Favorites<sup className='text-danger'>{count == 0 ? '': '+'+count} </sup>
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/exercise1"
                    >
                        Exercise1
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/exercise2"
                    >
                        Exercise2
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}