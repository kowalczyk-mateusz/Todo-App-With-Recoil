import {Global} from '@emotion/react'
export default () => (
    <Global
      styles={() => ({
        '*': {
          boxSizing: 'border-box',
          padding: 0,
          margin: 0,
        },
      })}
    />
  )