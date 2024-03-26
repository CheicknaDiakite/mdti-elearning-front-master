import React from 'react'
import { useAnc_Document } from '../../../../components/UseContext/useAncien'
import CardListDoc from './CardListDoc'

export default function ListDocument() {
    const {documents} = useAnc_Document()
  return (
    <>
    <div class="container my-lg-8">

        <div class="row">
        {documents?.length > 0 ? 
            documents.map((post) => {
                return <CardListDoc post={post} />
            })
            : 'Pas de Document'
            }
            
        </div>
    </div>
    </>
  )
}
