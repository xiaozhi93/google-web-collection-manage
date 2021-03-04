import React from 'react'
import styled from '@emotion/styled'

const CollectList = styled.div`
    width: 573px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 3px;
    transition: opacity 300ms ease-in-out;
`

function CollectionItem() {
  return <a>

  </a>
}

function CollectionOperation() {
  return <a></a>
}

// 数据保存本地
export default function Collection() {
  return (
    <CollectList>
      收藏
    </CollectList>
  )
}
