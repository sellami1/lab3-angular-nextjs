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
      fetch(`http://localhost:3001/api/appareils/${id}`)  /* API call: GET one by id */
        .then(res => res.json())
        .then(data => setAppareil(data))
        .catch(err => console.error(err));
    }
  }, [id]);  /* Re-run on id change */

  return (    
    <>      
      <div>Appareil Detail Page</div>      
      {/* Route params: Display id */}
      <h2>ID: {id}</h2>  
      {/* API data: Show name/status */}
      {appareil ? <p>{(appareil as any).name} - {(appareil as any).status}</p> : <p>Loading...</p>}
    </>  
  );
}