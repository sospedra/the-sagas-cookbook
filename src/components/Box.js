import styled from 'styled-components'

export default styled.button`
  align-items: center;
  appearance: none;
  display: flex;
  border: none;
  border-color: ${({ isFetching }) => isFetching ? '#d400ff' : '#eaeaea'};
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  cursor: ${({ isFetching }) => isFetching ? 'wait' : 'pointer'};
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem 0 0 1rem;
  outline: none;
  flex: 1;

  pre {
    text-align: left;
    font-size: 0.65rem
  }

  &:first-child {
    margin-left: 0;
  }
`
