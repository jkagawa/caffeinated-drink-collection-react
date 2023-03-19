import { forwardRef } from 'react'
import { TextField } from '@mui/material' 

interface inputType {
    name: string,
    placeholder: string
    type: string
}
const Input = forwardRef((props: inputType, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        {...props}
    />
  )
})

export default Input