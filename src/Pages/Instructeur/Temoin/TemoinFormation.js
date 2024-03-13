import React, { useContext, useEffect, useState } from 'react'

import toast from 'react-hot-toast';
import { temoinService } from '../../../_services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import FormationContext from '../../../components/UseContext/formation.context';
import useTemoin from '../../../components/UseContext/useUtilisateur';

const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${defaultTheme.palette.primary.main}`,
            color: defaultTheme.palette.primary.main,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `2px dashed ${defaultTheme.palette.secondary.main}`,
            color: defaultTheme.palette.secondary.main,
          },
        },
        {
          props: { variant: 'dashed', size: 'large' },
          style: {
            borderWidth: 4,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary', size: 'large' },
          style: {
            fontSize: 18,
          },
        },
      ],
    },
  },
});

export default function TemoinFormation({slug}) {
    // pour Ajout des Temoignages
    const { user } = useContext(FormationContext)
    const [temoin, setTemoin] = useState('');

    const sluger = {
      "formation_slug": slug
    }
    const onChangeTemoin = (e) => {
        setTemoin({
        ...temoin,
        [e.target.name]: e.target.value
        })
    }

    const useChap = useQueryClient();
    const mutation = useMutation({
      mutationFn: (temoin) => {
      return temoinService.addTemoin(temoin)
      .then(res => {
        if(res.data.etat===true){
            useChap.invalidateQueries("temoin");
            toast.success(res.data.message);
        } else {
            toast.error(res.data.message);
        }
    })
      },
      // onError: (error) => {
      // toast.error("Une erreur est survenue0");
      // },
      // onSuccess: () => {
      // useChap.invalidateQueries("temoin");
      // toast.success("Temoignage ajout avec succès");
      // },
    });
    // const {temoin: to} = useTemoin(sluger)
    // console.log("rrr",to)
    
    const {
        data: temoins,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["temoin", sluger],
        queryFn: () =>
        temoinService.allTemoin(sluger)
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const tous = temoins.donnee
      console.log("temoin",tous)
    // fin

    const onTemoignage = (e) => {
      e.preventDefault();
  
      // Créer un objet à envoyer au serveur
      temoin["formation_slug"] = slug
      temoin["apprenant_id"] = user

      console.log("pour la temoin",temoin)
  
      mutation.mutate(temoin);
  };

  return (
    <>
    {/* Temoignages */}
    <div className="mb-3">

    <h3 className="mb-4">Pour les Temoignages</h3>

    </div>
    <hr className="my-5" />
    <div className="mb-3">
    <div className="d-lg-flex align-items-center justify-content-between mb-5">
        {/* Temoignages */}
        <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Temoignages</h3>
        </div>
        <div>
       
            <form className="form-inline" onSubmit={onTemoignage}>
                <div className="d-flex align-items-center me-2">
                    <span className="position-absolute ps-3">
                    {/* <i className="fe fe-search" /> */}
                    </span>
                    <input type="text" name='message' onChange={onChangeTemoin} className="form-control ps-6" placeholder="Temoiyer ..." />
                    <ThemeProvider theme={theme}>

                      <Button type='submit' variant="dashed" sx={{ m: 1 }}>
                        Envoyer
                      </Button>
                    </ThemeProvider>
                </div>
            </form>
        </div>
    </div>
    {/* Rating */}
    {tous?.length > 0 ? 
        tous.map((post)=> (
            <>
            <div className="d-flex align-items-start border-bottom pb-4 mb-4">

            <img src={`http://127.0.0.1:8000/${post.apprenant}`} alt className="rounded-circle avatar-lg" />
            <div className="ms-3">
                <h4 className="mb-1">
                {post.apprenant_last_name} {post.apprenant_first_name}
                {/* <span className="ms-1 fs-6">2 Days ago</span> */}
                </h4>
                <div className="mb-2">
                
                </div>
                <p>
                {post.message}
                </p>
                
            </div>
            </div>
            </>
        ))
        : 'Pas de Temoin'
        }


    </div>
    </>
  )
}
