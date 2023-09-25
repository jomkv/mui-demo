import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <>
      {/* headings */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3" component="h1" gutterBottom>h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* subtitles */}
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      {/* body text */}
      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, ipsam dolorum provident unde voluptates sunt qui accusamus architecto laudantium, molestiae optio dolores neque! Eligendi fuga quaerat itaque autem reprehenderit magnam.</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ad hic soluta ratione reprehenderit dolorum molestiae cum voluptates dolor nemo consequatur culpa distinctio alias eaque, adipisci enim iure. Iure, error?</Typography> 
    </>
  )
}
