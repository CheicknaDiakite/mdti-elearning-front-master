import React from 'react'

export default function CatForma({formation}) {
  return (
    <>
    <td>
         <span className="badge bg-info">{formation.sous_categorie_id}</span> 
    </td>
    </>
  )
}
