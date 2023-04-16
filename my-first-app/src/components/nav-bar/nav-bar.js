import NavLink from '../nav-link/nav-link'
import SearchPanel from '../search-panel/search-panel'

const NavBar = ({data}) =>{
    const elem = data.map(item=>{
        const{id, ...itemProps} = item;
        return(
            <NavLink key={id} {...itemProps}/>
        )
    })
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar">
            <div className="container-fluid">
                <a 
                    href="#top" 
                    className="navbar-brand">
                    Navbar</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div 
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {elem}
                    </ul>
                    <form className="d-flex">

                        <SearchPanel/>
                        
                        <button 
                            className="btn btn-outline-success" 
                            type="submit">
                            Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;