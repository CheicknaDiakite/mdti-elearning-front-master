import React, { useContext } from 'react'
import FormationContext from '../../../components/UseContext/formation.context'

import CateCard from './CateCard'

export default function Categorie() {
    const {sous_categories} = useContext(FormationContext)

    console.log('ee',sous_categories)
    
    
  return (
    <>
    
    {/* Page header */}
    <section className="bg-primary">
    <div className="container">
        <div className="row align-items-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="py-4 py-lg-6">
            <h1 className="mb-0 text-white display-4">Browse Paths</h1>
            <p className="text-white mb-0 lead">Get started by learning from a path below</p>
            </div>
        </div>
        </div>
    </div>
    </section>
    {/* Content */}
    <section class="container py-7">
        <div class="row">
        {sous_categories?.length > 0 ? 
            sous_categories?.map((post)=> {
                return <CateCard post={post} />
            })
            : 'Pas de categorie'
            }         

        </div>
    </section>

    </>
  )
}
