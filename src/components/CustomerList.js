import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


function CustomerList() {


    const customers = ['abc@example.com', '123@example.com', 'xyz@example.com'];

    return (
        <div>
            <label className='form_label' htmlFor='deviceName'>Customers: </label>
            <div className='form_input'><Autocomplete
                options={customers}
                onChange={(event, value) => console.log(value)}
                multiple
                style={{ width: 500 }}
                defaultValue={[customers[0]]}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose Multiple values"
                        variant="standard"
                        placeholder="Customers"
                    />
                )}
            /></div>
        </div>
    );
}

export default CustomerList;