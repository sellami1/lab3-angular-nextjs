// Parent → Child: Receive props from parent (as per doc)
export default function Child({ states }: { states: string[] }) {  /* Props type */
  return (        
    <>            
      <ul>  {/* Display passed data */}
        {/* Parent → Child: Iterate props */}
        {states.map(state => (<li key={state}> {state} </li>))}           
      </ul>        
    </>    
  );
}