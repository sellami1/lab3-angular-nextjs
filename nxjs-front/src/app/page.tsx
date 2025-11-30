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
  const [appareils, setAppareils] = useState([]);
  // const [appareils, setAppareils] = useState([
  //   {
  //     key: 1,
  //     name: "Device 1",
  //     status: "Status 1",
  //   },
  //   {
  //     key: 2,
  //     name: "Device 2",
  //     status: "Status 2",
  //   },
  //   {
  //     key: 3,
  //     name: "Device 3",
  //     status: "Status 3",
  //   }
  // ]);  /* State for API data */

  // API calls: Fetch list on mount (useEffect + fetch as per doc)
  useEffect(() => {
    fetch('http://192.168.50.100:3001/api/appareils')  /* API call: GET all appareils */
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
      <Header />
      <div className="container mt-4">  {/* Bootstrap: Container for layout */}
        <div className="text-center mb-3">  {/* Bootstrap: Centered buttons */}
          <button className="btn btn-primary me-2" onClick={gotoLogin}>Login Page</button>  {/* Bootstrap: Primary button, triggers TS routing */}
          <button className="btn btn-secondary" onClick={gotoContact}>Contact Page</button>  {/* Bootstrap: Secondary button, triggers TS routing */}
        </div>    
        {/* Parent → Child: Pass states as props */}
        <Child states={states} />  
        {/* Appareils list: Display name/status + link to details (Bootstrap list-group) */}
        <div className="list-group">  {/* Bootstrap: List group for clean items */}
          {appareils.map((app: any) => (
            <div key={app._id} className="list-group-item d-flex justify-content-between align-items-center">  {/* Bootstrap: Flex for alignment */}
              {app.name} - {app.status}  
              {/* Routing (HTML) + Route params: Link to details with ID (declarative) */}
              <Link className="btn btn-sm btn-info" href={`/appareil/${app._id}`}>View Details</Link>  {/* Bootstrap: Info button as link */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}