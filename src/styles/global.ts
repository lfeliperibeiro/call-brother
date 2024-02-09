import { globalCss } from '@ribeiro-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: '$black900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
