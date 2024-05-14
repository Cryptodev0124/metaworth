import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 280px;
    max-width: 31.5%;
    width: 100%;
    border: 2px #DFC15E solid !important;
    margin: 0 8px;
    margin-bottom: 32px;
  }
`

export default FlexLayout
