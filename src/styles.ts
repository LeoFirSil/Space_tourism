import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#ffffff',
  blue300: '#d0d6f9',
  blue900: '#0b0d17'
}

export const GlobalCss = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Barlow', sans-serif;
font-weight: 400;
list-style: none;
}

h1,
h2 {
font-family: 'Bellefair';
}

h3 {
font-family: 'Barlow Condensed';
}

.container {
padding: 48px 165px;
}
`
