import { Global } from "@emotion/react"

const Fonts = () => {
  return (
    <Global
      styles={`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;500500;&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
    `}
    />
  )
}

export default Fonts
