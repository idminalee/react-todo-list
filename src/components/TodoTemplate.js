import React from 'react'
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  width: 512px;
  height: 768px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
`

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate
