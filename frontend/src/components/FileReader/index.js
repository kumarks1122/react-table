import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.css'

import Filters from './Filters'
import Table from './Table'
import * as actions from '../../actions/readerActions';


const FileReader = ({ reader, actions }) => {
  
  const [filters, setFilters] = useState({})

  useEffect(() => {
    actions.onLoad()
    return () => {
      actions.onLoad()
    }
  }, [])

  useEffect(() => {
    actions.onSearch({ ...filters, fileId: reader.fileId })
    console.log(reader.fileId);
  }, [filters, reader.fileId])

  const onUpload = (e) => {
    if (e.target.files.length) {
      const selectedFile = e.target.files[0]
      const formData = new FormData(); 
       
      formData.append(
        "file",
        selectedFile,
        selectedFile.name
      );
  
      actions.onUpload(formData)
    }
  }

  return (
    <div>
      <input type="file" name="inputFile" onChange={onUpload} />
      <br />
      <Filters
        applyFilter={setFilters}
      />
      <Table/>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};


export default connect((state) => ({ reader: state.reader }), mapDispatchToProps)(FileReader)
