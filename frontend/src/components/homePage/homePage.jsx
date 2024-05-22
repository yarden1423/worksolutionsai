import * as React from 'react';
import { Button , Box} from '@mui/material';
import { css } from '@emotion/react';

const RainbowText = () => {
  const rainbowTextStyle = css`
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow 5s linear infinite;
    -webkit-text-fill-color: transparent; /* For Safari */
    text-fill-color: transparent; /* For Firefox */

    @keyframes rainbow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <div css={rainbowTextStyle}>Rainbow Text</div>
  );
};


export default function HomePage() {
  return (
    <>
    <RainbowText>Hey</RainbowText>
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      padding: '10px',
      marginInline: '10vw'
    }}
  >
                <Button variant="contained" size="large" sx={{mb: '10px'}}>
Large</Button>
                <Button variant="contained" size="large">
Large</Button>
</Box> 
</>

  );
}
