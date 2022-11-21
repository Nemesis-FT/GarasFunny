import {Main} from "./Components/Main";
import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

import {styleReset} from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;
function App() {
    return (
        <div >
            <GlobalStyles/>
            <ThemeProvider theme={original}>
                    <Main/>
                    <div style={{
                        position: "fixed",
                        left: "0",
                        bottom: "0",
                        width: "100%",
                        textAlign: "center"
                    }}>
                        <img src={"../badge.png"} alt={"The amazing CAT 0.0 XHTML compliance badge."}/>
                    </div>

            </ThemeProvider>
        </div>
    )
        ;
}

export default App;
