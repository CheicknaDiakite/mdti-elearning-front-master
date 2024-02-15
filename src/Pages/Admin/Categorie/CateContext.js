import React from 'react'
import { CategorieContextProvider } from '../../../components/UseContext/formation.context'
import Categorie from './Categorie'

export default function CateContext() {
  return (
    <CategorieContextProvider >
        <Categorie />
    </CategorieContextProvider>
  )
}
