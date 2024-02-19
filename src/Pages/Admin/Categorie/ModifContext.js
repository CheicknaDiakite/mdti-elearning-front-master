import React from 'react'
import { CategorieContextProvider } from '../../../components/UseContext/formation.context'
import CateModif from './CateModif'

export default function ModifContext() {
  return (
    <CategorieContextProvider >
        <CateModif />
    </CategorieContextProvider>
  )
}
