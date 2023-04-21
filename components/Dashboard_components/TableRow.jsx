import { Tr, Td, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { useState } from "react";
const TableRow = ({ venta }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Tr>
      <Td>
        {venta.usuarioByDni.nombre} {venta.usuarioByDni.apellido}
      </Td>
      <Td>{venta.fecha}</Td>
      <Td>${venta.total}</Td>
      <Td>
        {showModal && (
          <Modal size="5xl" isOpen={showModal} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontSize="25px" textAlign="center">
                Detalle
              </ModalHeader>
              <ModalBody pb={6}>
                <TableContainer>
                  <Table variant="simple" w="100%" size="lg" colorScheme="teal">
                    <Thead>
                      <Tr>
                        <Th fontSize="10px">Nombre</Th>
                        <Th fontSize="10px">cantidad</Th>
                        <Th fontSize="10px">Subt.</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      
                    </Tbody>
                    <TableCaption fontSize="12px" fontWeight="bold">
                      Top 3 Funkos mas vendidos
                    </TableCaption>
                  </Table>
                </TableContainer>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
        <Button size="md" w={20} colorScheme="green" onClick={handleOpenModal}>
          Ver
        </Button>
      </Td>
    </Tr>
  );
};

export default TableRow;
