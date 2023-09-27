import React, {useState} from 'react'
import { TextField, Stack, InputAdornment } from "@mui/material"
import {Visibility} from '@mui/icons-material/'

export const MuiTextField = () => {
  const [password, setPassword] = useState<string>("")

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small secondary" color="secondary" size="small" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Password" required type="password" 
          value={password} onChange={(e) => setPassword(e.target.value)} 
          error={!password} 
          helperText={!password ? "Required" : "Do not share your password"}
        />
        <TextField label="Password" required type="password" helperText="Do not share your password"
          InputProps={{
            endAdornment: <InputAdornment position="end"><Visibility /></InputAdornment>
          }}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Read only" InputProps={{ readOnly: true }}/>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Price" type="number" InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}/>
        <TextField label="Weight" type="number" InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>
        }}/>
      </Stack>
    </Stack>
  )
}
