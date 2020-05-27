import React from 'react';

function Table({
  records,
  rowCount
}) {
  return (
    <div className="App">
      <table>
        {
          records.slice(0, rowCount).map((rec, recIndex) => (<tr key={recIndex}>
            {
              rec.map((value, index) => (<td key={index}>
                {value}
              </td>))
            }
          </tr>))
        }        
      </table>
    </div>
  );
}

export default Table;