

export default function NoItinerary (props) {
  
    return (
      <div className={props.itineraries?"yesItinerary":"noItinerary"}>
          <h1>No itineraries at the moment.</h1>
        
      </div>
    );
  }