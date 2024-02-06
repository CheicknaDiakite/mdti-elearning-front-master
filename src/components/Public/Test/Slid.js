import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useQuery } from '@tanstack/react-query';
import { sliderService } from '../../../_services';

export default function Slid() {

    const [slides, setSlides] = useState([]);
    const {
        // data: categorie,
        error,
        isLoading,
      } = useQuery({
        queryKey: ["sliders"],
        queryFn: () =>
          sliderService.allSlider()
          .then((res) => {
            setSlides(res.data.donnee);
          }),
        onerror: (error) => console.log(error),
      });
      if (isLoading) {
        return <div>Chargement...</div>;
      }

  return (
    <>
        <Carousel 
        autoPlay 
        infiniteLoop
        showStatus={false}
        showArrows={false}
        >
        {slides.map((formation) => (
            <section class="bg-primary">
                <div class="container">
                
                    <div class="row align-items-center g-0">
                        <div class="col-xl-5 col-lg-6 col-md-12">
                            <div class="py-7 py-lg-0">
                                <h1 class="text-white display-4 fw-bold">{formation.nom}</h1>
                                <p class="text-white-50 mb-4 lead">{formation.description}</p>
                                {/* <a href="pages/course-filter-list.html" class="btn btn-dark">Browse Courses</a>
                                <a href="pages/sign-in.html" class="btn btn-white">Are You Instructor?</a> */}
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
                            <img src={`http://127.0.0.1:8000/${formation.image}`} alt="heroimg" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

        ))}
        </Carousel>
    </>
  )
}
