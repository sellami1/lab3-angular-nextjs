import Link from "next/link";  /* For HTML routing */

// Routing (HTML): Declarative navigation using Link (as per doc)
export default function Header() {
  return (
    <>      
      <div className="headerCss">  {/* Styled div */}
        <Link href="/">Home</Link>  {/* HTML routing: Link for home (declarative) */}
        <Link href="/login">Login</Link>  {/* HTML routing: Link for login */}
        <Link href="/contact">Contact</Link>  {/* HTML routing: Link for contact */}
      </div>    
    </>
  );
}