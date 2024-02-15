import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { videoService } from '../../../_services';
import toast from 'react-hot-toast';

export default function VideoCard({video}) {

    console.log("viddd",video)

    const useQuery = useQueryClient();
    const mutation = useMutation({
        mutationFn: (video) => {
        return videoService.deleteVideo(video)
        .then(res => {
            if(res.data.etat!==true){
              toast.error(res.data.message);
            } 
          })
        },
        onError: (error) => {
        toast.error("Une erreur est survenue",error);
        },
        onSuccess: () => {
        useQuery.invalidateQueries("videos");
        // toast.success("formations supprimée avec succès");
        },
    });
    const handleDelete = (video) => {
        mutation.mutate(video);
    };

  return (
    <>
        <tr>
            <td>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="withdrawTwo" />
                <label className="form-check-label" htmlFor="withdrawTwo" />
                </div>
            </td>
            
            <td>{video.nom}</td>
            <td>
                <span className="badge bg-warning">Pending</span>
            </td>
          
            <td>
                <span className="dropdown dropstart">
                <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="paymentDropdown" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                    <i className="fe fe-more-vertical" />
                </a>
                <span className="dropdown-menu" aria-labelledby="paymentDropdown">
                    <span className="dropdown-header">Setting</span>
                    <a className="dropdown-item" href="#">
                    <i className="fe fe-edit dropdown-item-icon" />
                    Edit
                    </a>
                    <button className="dropdown-item" onClick={()=>handleDelete(video)}>
                    <i className="fe fe-trash dropdown-item-icon" />
                    Remove
                    </button>
                </span>
                </span>
            </td>
        </tr>
    </>
  )
}
