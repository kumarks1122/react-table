import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const { records } = useSelector(state => state.reader)

  return (
    <div className="container">
      <table className="table">
        {
          records.map((rec, recIndex) => (<tr key={recIndex}>
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