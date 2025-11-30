import Link from "next/link";  /* For HTML routing */

// Routing (HTML): Declarative navigation using Link (as per doc)
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">  {/* Bootstrap: Responsive dark blue navbar */}
      <div className="container">  {/* Bootstrap: Container for centering */}
        <Link className="navbar-brand" href="/">Home</Link>  {/* HTML routing: Brand link (declarative) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>  {/* Bootstrap: Toggler for mobile */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">  {/* Bootstrap: Right-aligned nav items */}
            <li className="nav-item">
              <Link className="nav-link" href="/login">Login</Link>  {/* HTML routing: Link for login */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>  {/* HTML routing: Link for contact */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}