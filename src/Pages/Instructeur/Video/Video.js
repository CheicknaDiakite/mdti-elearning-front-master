import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { videoService } from '../../../_services';
import VideoCard from './VideoCard';

export default function Videos() {
    let {id} = useParams()    

    const top = {
        chapitre_id: id
    }

    const {
        data: video,
        // error,
        isLoading,
      } = useQuery({
        queryKey: ["videos", top],
        queryFn: () =>
        videoService.getVideo(top)
          .then((res) => res.data),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }
      const videos = video.donnee;

     let myWindow;

       const openWin = () => {
            myWindow = window.open(`http://127.0.0.1:8000/formation/video/add/${id}`, '', 'width=auto,height=auto');
        }

       const closeWin = () => {
            if (myWindow) {
            this.myWindow.close();
            }
        }
      
  return (
    <>
    <>
    <div className="card mb-4">
    {/* Card header */}
    <div className="card-header border-bottom-0">
        <h3 className="h4 mb-3">Listes des Videos</h3>
        <div className="row align-items-center">
        
        <div className="col-lg-2 col-md-6 text-lg-end">
            {/* Button */}
            <button className="btn btn-outline-secondary btn-icon" onClick={openWin}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

            </button>
        </div>
        </div>
    </div>
    {/* Table */}
    <div className="table-responsive">
      
        <table className="table mb-0 text-nowrap table-hover table-centered table-with-checkbox">
        <thead className="table-light">
            <tr>
            <th>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkAll" />
                <label className="form-check-label" htmlFor="checkAll" />
                </div>
            </th>
            {/* <th>ID</th> */}
            <th>Nom</th>
            <th>Status</th>
            
            <th />
            </tr>
        </thead>
        <tbody>
        {videos?.length > 0 ? 
          videos?.map((post)=> (
            <VideoCard video={post} />
          ))
        : 'Pas de chapitre'
        }
            
            
        </tbody>
        </table>
        
    </div>
    </div>

    {/* Modal Chapitre */}
    <div className="modal fade" id="newCatgory" tabIndex={-1} role="dialog" aria-labelledby="newCatgoryLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title mb-0" id="newCatgoryLabel">Create New Chapitre</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <iframe
        width="860"
        height="484"
        src="http://127.0.0.1:8000/formation/video/add/11"
        title="Introduction To WiseGPT"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
        </div>
        </div>
    </div>
    </div> 
    </>
    </>
  )
}
