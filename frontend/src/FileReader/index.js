import React, { Component } from 'react';

import './style.css'

import fetchApi from '../services/request';

import Filters from './Filters'
import Table from './Table'


class FileReader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      records: [],
      fileId: '',
      delimiter: '',
      rowCount: 2
    }
  }

  handleInputChange = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    this.setState({[name]: value}, () => {
      this.search()
    })
  }

  search = () => {
    const payload = {
      delimiter: this.state.delimiter,
      rowCount: this.state.rowCount,
      fileId: this.state.fileId
    }

    fetchApi("/api/v1/search", "post", null, JSON.stringify(payload), (response) => {
      this.setState({ records: response.records })
    })
  }

  upload = (e) => {
    const selectedFile = e.target.files[0]
    const formData = new FormData(); 
     
    formData.append(
      "file",
      selectedFile,
      selectedFile.name
    );

    fetchApi("/api/v1/upload", "post", {}, formData, (response) => {
      this.setState({
        fileId: response.fileId
      }, () => this.search())
    })
  }

  render() {
    const { delimiter, records } = this.state
    return (
      <div>
        <input type="file" name="inputFile" onChange={this.upload}/>
        <br />
        <Filters
          handleInputChange={this.handleInputChange}
        />
        <Table records={records}/>
      </div>
    )
  }
}

export default FileReader;
