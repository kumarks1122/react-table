import React, { useState, useEffect } from 'react';

const Filter = ({ applyFilter }) => {
  const [delimiter, setDelimiter] = useState(",")
  const [rowCount, setRowCount] = useState(2)

  useEffect(() => {
    if (!!delimiter && !!rowCount) {
      applyFilter({ delimiter, rowCount })
    }
  }, [delimiter, rowCount])
  return (
    <div className="filters-wrapper">
      Delimiter<input type="text" name="delimiter" onChange={(e) => setDelimiter(e.currentTarget.value)} value={delimiter}/>{'  '}
      Lines<input type="number" name="rowCount" onChange={(e) => setRowCount(e.currentTarget.value)} value={rowCount}/>
    </div>
  );
}

export default Filter;