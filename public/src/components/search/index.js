import React from 'react'
import TextField from 'material-ui/TextField'
import SearchIcon from '../icons/search-icon'

const Search = ({onChange}) => {
  return (
    <div className='Search'>
      <TextField fullWidth hintText='Search' onChange={(ev, newValue) => onChange(ev, newValue)} />
      <SearchIcon className='Search-icon' style={{textAlign: 'right'}} color='#ccc' />
    </div>
  )
}

export default Search
