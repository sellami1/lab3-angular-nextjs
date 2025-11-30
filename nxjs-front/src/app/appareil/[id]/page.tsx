"use client";  // Client rendering

import { useParams } from "next/navigation";  /* For route params */
import { useEffect, useState } from "react";  /* For API calls */

// Route params: Dynamic [id] route (as per doc)
export default function AppareilDetail() {
  // Route params: Retrieve id from URL
  const params = useParams();
  const id = params?.id as string;  /* Extract param */

  // API calls: State for single appareil
  const [appareil, setAppareil] = useState(null);

  // API calls: Fetch by ID on mount
  useEffect(() => {
    if (id) {
      fetch(`http://192.168.50.100:3001/api/appareils/${id}`)  /* API call: GET one by id */
        .then(res => res.json())
        .then(data => setAppareil(data))
        .catch(err => console.error(err));
    }
  }, [id]);  /* Re-run on id change */

  return (    
    <div className="container mt-5">  {/* Bootstrap: Container */}
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>  {/* Bootstrap: Centered card */}
        <div className="card-body">
          <h5 className="card-title">Appareil Detail Page</h5>  {/* Bootstrap: Title */}
          {/* Route params: Display id */}
          <p className="card-text">ID: {id}</p>  
          {/* API data: Show name/status */}
          {appareil ? (
            <p className="card-text">{(appareil as any).name} - {(appareil as any).status ? 'Turned-On' : 'Turned-Off'}</p>
          ) : (
            <p className="card-text">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}