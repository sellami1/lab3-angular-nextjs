"use client";  // Client rendering (as per doc)

import Header from "./header";  /* Include header */
import Child from "./child";  /* Child for data sharing */
import { useRouter } from "next/navigation";  /* For TS routing */
import { useEffect, useState } from "react";  /* For API calls and state */
import Link from "next/link";  /* For HTML routing in list links */

// Parent → Child data sharing: Pass props to child
export default function Home() {
  const router = useRouter();  /* For TS routing */

  // API calls: State for fetched appareils list (from Express/MongoDB)
  const [appareils, setAppareils] = useState([]);  /* State for API data */

  // API calls: Fetch list on mount (useEffect + fetch as per doc)
  useEffect(() => {
    fetch('http://192.168.50.100:3000/api/appareils')  /* API call: GET all appareils */
      .then(res => res.json())
      .then(data => setAppareils(data))  /* Update state */
      .catch(err => console.error(err));
  }, []);  /* Run once */

  // Routing (TS): Programmatic navigation (async for logic)
  async function gotoLogin() {
    router.push('/login');  /* TS routing: Push to login (programmatic) */
  }

  async function gotoContact() {
    router.push('/contact');  /* TS routing: Push to contact */
  }

  // Parent → Child: Data to pass (states list from doc)
  const states = ['Tozeur', 'Tunis', 'Nabeul'];  /* Props data */

  return (    
    <>      
      <Header />  /* Header with HTML routing */
      <div>      
        <button onClick={gotoLogin}>Login Page</button>  {/* Trigger TS routing */}
        <button onClick={gotoContact}>Contact Page</button>  {/* Trigger TS routing */}
      </div>    
      {/* Parent → Child: Pass states as props */}
      <Child states={states} />  
      {/* Appareils list: Display name/status + link to details */}
      <ul>
        {appareils.map((app: any) => (
          <li key={app._id}>
            {app.name} - {app.status}  
            {/* Routing (HTML) + Route params: Link to details with ID (declarative) */}
            <Link href={`/appareil/${app._id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </>  
  );
}