import { useState, useEffect } from "react"
import { IModal } from "../components/Modal"
import Modal from "../components/Modal"

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [modalComponent, setModalComponent] = useState<{ name: string, shortName: string, inputs: Array<{ name: string }>, button: string, data?: any } | null>(null)

  const handleModalOpen = (name: string, shortName: string, inputs: Array<{ name: string }>, button: string, data?: any) => {
    setModalComponent({ name, shortName, inputs, button, data })
    setIsModalVisible(true)
  }

  const handleModalClose = () => {
    setIsModalVisible(false)
    setModalComponent(null)
  }

  const ModalComponent = isModalVisible ? (
    <Modal 
      name={modalComponent?.name || null}
      shortName={modalComponent?.shortName || null}
      inputs={modalComponent?.inputs || null}
      button={modalComponent?.button || null}
      data={modalComponent?.data || null}
      onClose={handleModalClose}
      onOpen={() => handleModalOpen}
    />
  ) : null

  return { handleModalOpen, ModalComponent }
}