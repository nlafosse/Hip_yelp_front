import SearchResults from '../SearchComponents/SearchResult/SearchResult';
import SearchHeader from '../SearchComponents/SearchHeader/SearchHeader'
const ResultsPage = ({results , lastSearch}) => {
    return (
        <div>
        <SearchHeader lastSearch={lastSearch}/>
        <SearchResults results={results} />
        </div>
    )
}

export default ResultsPage;