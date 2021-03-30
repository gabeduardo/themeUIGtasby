export const standard = {
    initialColorModeName: 'light',
    fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#33e',
      secondary: 'tomato',
      modes: {
        dark: {
          text: '#fff',
          background: '#000',
          primary: '#cc1',
          secondary: 'aquamarine'
        },
        tomato: {
          text: '#565656',
          background: 'tomato',
          primary: 'tomato',
          secondary: 'white'
        },
        deep: {
          text: 'hsl(210, 50%, 96%)',
          background: 'hsl(230, 25%, 18%)',
          primary: 'hsl(260, 100%, 80%)',
          secondary:'green'
        },
      }
    },
  }


  export const segundo = {
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
      body:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    colors: {
      text: '#000',
      background: 'black',
      primary: 'beige',
      secondary: '#30c',
      muted: '#f6f6f6',
    },
    text: {
      heading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
      },
    },
    styles: {
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
      },
      h1: {
        variant: 'text.heading',
        fontSize: 5,
      },
      h2: {
        variant: 'text.heading',
        fontSize: 4,
      },
      h3: {
        variant: 'text.heading',
        fontSize: 3,
      },
      h4: {
        variant: 'text.heading',
        fontSize: 2,
      },
      h5: {
        variant: 'text.heading',
        fontSize: 1,
      },
      h6: {
        variant: 'text.heading',
        fontSize: 0,
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit',
        },
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit',
      },
      table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
      },
      th: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
      },
      td: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
      },
    },
  }