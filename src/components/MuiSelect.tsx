import { Box, TextField, MenuItem } from "@mui/material"
import React, {useState} from 'react'

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([])

  console.log({
    countries,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === "string" ? value.split(',') : value)
  }

  return (
    <Box width="250px">
      <TextField fullWidth value={countries ? countries : []} select label="Select Country" onChange={handleChange}
        SelectProps={{
          multiple: true
        }}
      >
        <MenuItem value="PH">Philippines</MenuItem>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="CA">Canada</MenuItem>
      </TextField>
    </Box>
  )
}
