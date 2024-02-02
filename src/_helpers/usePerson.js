import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { sousCatService } from '../_services';

const fetchTodoList = async () => {
    // La logique pour récupérer la liste des todos
  };
export default function usePerson() {
    return useQuery({
      queryKey: ["sousCategories"],
      queryFn: () =>
        sousCatService.getSousCat(sluger)
        .then((res) => res.data),
      onerror: (error) => console.log(error),
    });
}
