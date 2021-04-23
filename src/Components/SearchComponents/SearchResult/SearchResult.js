const SearchResults = ({ results }) => {
    // return early if there are no results
    import Cards from "../Cards/Cards"
    if (results === null) {        
        return <h2>No results Found!</h2>
      }
    
      
    return (
      <div className="results">
          
        {results.map(image => (
            <div onClick={() => card(image)} key={i}>
                <Cards placeData={apiData} group={"Foods"}/>
                
               
            </div>
        ))}
      </div>
    )
  }

  export default SearchResults;