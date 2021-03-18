import { NavLink } from 'react-router-dom';


const CategorieNav = () => {
    return (
        <nav class="navbar">
            <ul>
                <li><NavLink activeClassName="nav-link-selected" to='/categories/all'>All</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/cats">Cats</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/dogs">Dogs</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/parrots">Parrots</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/reptails">Reptiles</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/other">Other</NavLink></li>
            </ul>
            <style jsx>{`
                .nav-link-selected {
                    background-color: green !important;
                }
                `}</style>
        </nav>
    );
};

export default CategorieNav;