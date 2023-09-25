import { Button, Stack } from "@mui/material"

export const MuiButton = () => {
  return (
    <Stack spacing={4} direction="column">
      <Stack spacing={4} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={4} direction="row">
        <Button variant="outlined" color="secondary">secondary</Button>
        <Button variant="outlined" color="primary">primary</Button>
        <Button variant="outlined" color="error">error</Button>
        <Button variant="outlined" color="warning">warning</Button>
        <Button variant="outlined" color="info">info</Button>
        <Button variant="outlined" color="success">success</Button>
      </Stack>
    </Stack>
    
  )
}
