import styled from 'styled-components'

export default styled.p`
  &:before {
    font-size: 1.5rem;
    content: "${({ status }) => {
      switch (status) {
        case 'idle': return '😴'
        case 'fetching': return '🐰'
        case 'success': return '💚'
        case 'error': return '🚨'
        default: return ''
      }
    }}"
  }
`
