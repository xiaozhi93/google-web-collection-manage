import React from 'react'
import styled from '@emotion/styled'

const SearchComponent = styled.div`
  position: relative;
  width: 516px;
  height:44px;
  border-radius: 22px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
  overflow:hidden;
  input {
    font-size: 16px;
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 52px;
    padding-right: 44px;
  }
  .voiceIcon {
    cursor: pointer;
    height: 100%;
    position: absolute;
    right: 16px;
    width: 26px;
  }
`
const SearchIcon = styled.div`
  height: 100%;
  left: 12px;
  position: absolute;
  top: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 32px;
  img {
    width:24px;
    height:24px;
  }
`
const VoiceIcon = styled.button`
  position: absolute;
  right: 14px;
  width: 26px;
  height:100%;
  background: url('/googlemic_clr_24px.svg') no-repeat center center;
  border: none;
  outline: none;
`
export default function Search() {
  return (
    <SearchComponent>
      <SearchIcon>
        <img src="/search.svg"/>
      </SearchIcon>
      <input type="search" placeholder="在 Google 上搜索，或者输入一个网址"/>
      <VoiceIcon title="语音搜索"/>
    </SearchComponent>
  )
}
