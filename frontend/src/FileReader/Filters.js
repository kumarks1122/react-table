import React from 'react';

function Filter({
  handleInputChange
}) {
  return (
    <div className="App">
      Delimiter<input type="text" name="delimiter" onChange={handleInputChange} />{'  '}
      Lines<input type="number" name="rowCount" onChange={handleInputChange} />
    </div>
  );
}

export default Filter;