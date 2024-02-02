import React from 'react'
import usePerson from './usePerson';

export default function compo() {
    
    const { isLoading, isError, data, error } = usePerson();

    // ... reste du rendu basé sur les données
  
    return (
      <></>
    );
  
}
