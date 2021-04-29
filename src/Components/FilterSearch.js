import React from 'react';

const FilterSearch = (props) => {
    return (
        <div className='col col-sm-4'>
            <input
                type='text'
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Type to search...'
               
            ></input>
        </div>
    );
};

export default FilterSearch;