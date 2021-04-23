import React from 'react';

function SearchHeader({ lastSearch }) {
  return (
    <header>
      <div className="searh-header">
  
  
</div>
      <p className="last-results">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </header>
  );
}
export default SearchHeader;