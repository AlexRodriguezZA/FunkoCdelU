import React from 'react'
import Link from 'next/link';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import style from "../../styles/compras.module.css"

const compras = () => {
  return (
      <div className={style.compras_container}>
      <Table className={style.tabla}>
        <Thead>
          <Tr>
            <Th className={style.tabla_headers}>Monto</Th>
            <Th className={style.tabla_headers}>Fecha</Th>
            <Th className={style.tabla_headers}>Hora</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>$5000</Td>
            <Td>12/2/2021</Td>
            <Td>12:34:05</Td>
          </Tr>
          <Tr>
            <Td>$5000</Td>
            <Td>12/2/2021</Td>
            <Td>12:34:05</Td>
          </Tr>
          <Tr>
            <Td>$5000</Td>
            <Td>12/2/2021</Td>
            <Td>12:34:05</Td>
          </Tr>
          <Tr>
            <Td>$5000</Td>
            <Td>12/2/2021</Td>
            <Td>12:34:05</Td>
          </Tr>
          <Tr>
            <Td>$5000</Td>
            <Td>12/2/2021</Td>
            <Td>12:34:05</Td>
          </Tr>
          <Tr>
            <Td>$5000</Td>
            <Td>12/2/2021</Td>
            <Td>12:34:05</Td>
          </Tr>
        </Tbody>
      </Table>
        <section className={style.seccion_button}>
          <Link href="/Perfil/user">Volver</Link>
        </section>
      </div>

  )
}

export default compras