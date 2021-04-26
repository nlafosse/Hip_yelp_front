import Cards from "../../Cards/Cards"
import {useEffect} from "react"

const SearchResults = ({ apiData }) => {
    // return early if there are no results

  console.log(apiData)

    if (apiData === null) {        
        return <h2>No results Found!</h2>
      }
    
      
    return (
      <div>
          
       
            <div>
                <Cards placeData={apiData} group={"Foods"}/>
                
               
            </div>
        )
      </div>
    )
  }

  export default SearchResults;