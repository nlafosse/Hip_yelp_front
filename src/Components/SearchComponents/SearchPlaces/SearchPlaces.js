export default function SearchPlaces ({ handleSubmit, handleChange, searchString }) {
    return(
      <div className='search'>
       
              <form onSubmit={handleSubmit} className='box'>
              <input
            placeholder="Search"
            type="text"
            name="searchString"
            required
            onChange={handleChange}
            value={searchString}
          />
          <button  type="submit">
              Submit
          </button>
              </form>
          
      </div>)
  }