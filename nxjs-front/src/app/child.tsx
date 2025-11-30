// Parent → Child: Receive props from parent (as per doc)
export default function Child({ states }: { states: string[] }) {  /* Props type */
  return (        
    <div className="card mb-3">  {/* Bootstrap: Card wrapper for child */}
      <ul className="list-group list-group-flush">  {/* Bootstrap: Flush list group */}
        {/* Parent → Child: Iterate props */}
        {states.map(state => (
          <li key={state} className="list-group-item"> {state} </li>
        ))}
      </ul>        
    </div>    
  );
}