import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Singletestimonial from '../Testimonial/SingleTestimonial';
import "slick-carousel/slick/slick.css";
import Brand from '../Brand/Brand';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from "@iconify/react";



const Carousel = ({ data }) => {
  const { useFor, info, settings } = data;


  if (useFor === "testimonial") {
    return (
      <Slider {...settings}>
        {
          info.map((element, index) => (
            <Singletestimonial element={element} key={index} />
          ))
        }
      </Slider>
    )
  } else if (useFor === "brand") {
    const MyIcon = () => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx={12} cy={12} r={0} fill="currentColor"><animate id="svgSpinnersPulseMultiple0" fill="freeze" attributeName="r" begin="0;svgSpinnersPulseMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></animate><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulseMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></circle><circle cx={12} cy={12} r={0} fill="currentColor"><animate id="svgSpinnersPulseMultiple1" fill="freeze" attributeName="r" begin="svgSpinnersPulseMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulseMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></circle><circle cx={12} cy={12} r={0} fill="currentColor"><animate id="svgSpinnersPulseMultiple2" fill="freeze" attributeName="r" begin="svgSpinnersPulseMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"></animate><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulseMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></circle></svg>)
    }
    return (
      <>
        <SectionHeading title="My Researches" subTitle="Overview" />
        <div style={{ margin: "0 5vw" }}>

          <p className='carousel__researches'><MyIcon /> Haditaghi, J., Hassasskhah, J., & Sorahi, M. A. (2020). A network-based approach for discourse analysis from Laclau and Mouffe’s perspectives. <em>Journal of Computer-Assisted Linguistic Research</em>, 4, 1-22. doi:
            <a href=' https://doi.org/10.4995/jclr.2020.12105' style={{ color: "#ffffff" }}> https://doi.org/10.4995/jclr.2020.12105</a>.</p>
          <p className='carousel__researches'><MyIcon /> Haditaghi J., Hassaskhah J., & Sorahi M. (2019). Signifier, relation and text: A network-based approach for semantic content analysis, <em>Unpublished</em></p>
          <p className='carousel__researches'><MyIcon /> J. Haditaghi, Always already: About the motif of différance (2017). <em>Nasour</em>. url: <a href='https://www.nasour.net/1396.04.02/943.html' style={{ color: "#ffffff" }}>https://www.nasour.net/1396.04.02/943.html</a></p>

        </div>
      </>
    )
  }
}

Carousel.propTypes = {
  data: PropTypes.object
}


export default Carousel
