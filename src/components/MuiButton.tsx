import { Button, Stack, IconButton, ButtonGroup } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

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
      <Stack display="block" spacing={4} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<ShoppingCartIcon />} disableRipple onClick={() => alert("cliccccck")}>
          Cart
        </Button>
        <Button variant="contained" endIcon={<ShoppingCartIcon />} disableElevation>
          Cart
        </Button>
        <IconButton aria-label="send" color="secondary" size="large">
          <ShoppingCartIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" color="secondary" size="small" orientation="vertical" aria-label="alignment button group">
          <Button>Left</Button>
          <Button disableRipple>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
    
  )
}
