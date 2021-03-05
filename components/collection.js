import React, { useRef, useState, useMemo } from 'react'
import styled from '@emotion/styled'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure
} from "@chakra-ui/react"

const CollectList = styled.div`
    width: 573px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 3px;
    transition: opacity 300ms ease-in-out;
`

const CollectItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 13px;
  padding-top:12px;
  padding-bottom: 4px;
  position: relative;
  cursor: pointer;
  width: 112px;
  height:112px;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  :hover {
    background: #e8e8e8;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height:48px;
    border-radius: 50%;
    background: #f1f3f4;
    img {
      width:24px;
      height:24px;
    }
  }
  .title {
    display: flex;
    align-items: center;
    margin-top: 12px;
    padding: 2px 8px;
    width: 104px;
    height: 32px;
    span {
      width:100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight:400;
      text-align:center;
    }
  }
`

const useInput = (initState) => {
  const [value, setValue] = useState(initState || '')
  const handleChange = (event) => setValue(event.target.value)
  return {
    value,
    onChange: handleChange
  }
}

// 数据保存本地
export default function Collection({ list = [] }) {
  const [collectList, setCollectList] = useState(list)
  const titleInput = useInput('')
  const urlInput = useInput('')
  const isSubmitDisabled = useMemo(() => {
    return titleInput.value && urlInput.value
  })
  const initialRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onSubmit = () => {
    // 添加到列表中
    setCollectList([
      ...collectList,
      {
        url: urlInput.value,
        icon: '',
        title: titleInput.value
      }
    ]);
    onClose()
  }
  return (
    <>
    <CollectList>
      { collectList.map((item,index) => (
        <CollectItem key={index} href={item.url}>
          <div className="icon">
            <img src={item.icon}/>
          </div>
          <div className="title">
            <span>{item.title}</span>
          </div>
        </CollectItem>
      ))}
      <CollectItem as="button" onClick={onOpen}>
          <div className="icon">
            <img src="/add.svg"/>
          </div>
          <div className="title">
            <span>添加快捷方式</span>
          </div>
        </CollectItem>
    </CollectList>
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="normal" fontSize="18px" p="20px">添加快捷方式</ModalHeader>
          <ModalBody px="20px" py="0">
             <FormControl>
              <FormLabel fontWeight="500" fontSize="13px">名称</FormLabel>
              <Input ref={initialRef} {...titleInput} variant="flushed" bg="#f1f3f4" h="32px" py="6px" paddingX="8px" borderRadius="2px" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontWeight="500" fontSize="13px">网址</FormLabel>
              <Input {...urlInput} variant="flushed" bg="#f1f3f4" h="32px" py="6px" px="8px" paddingX="8px" borderRadius="2px"/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              取消
            </Button>
            <Button variant={!isSubmitDisabled ? 'ghost' : 'solid'} isDisabled={!isSubmitDisabled} colorScheme={isSubmitDisabled ? 'blue' :  'gray'} onClick={onSubmit}>完成</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
