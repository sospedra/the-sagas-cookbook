import styled, { keyframes } from 'styled-components'

const color = keyframes`
  0% { color: #d400ff; }
  50% { color: #d400ff; }
  100% { color: #000; }
`

export default styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  p {
    animation: 1.5s ${color} ease-out;
  }
`
