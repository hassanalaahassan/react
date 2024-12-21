import { Link } from "react-router-dom"

function Navbar (  ) {
  return (
    

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">NEWS TESTING</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Genral</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Sports">Sports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Science">Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Business">Business</Link>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>


  )
}

export default Navbar