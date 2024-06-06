import React from "react";
import Img4 from "../../assets/Testimonials/Victor.jpg";
import Img5 from "../../assets/Testimonials/Satya.jpg";
import Img6 from "../../assets/Testimonials/Virat.jpg";
import Img7 from "../../assets/Testimonials/Lilian.jpg";
import Img8 from "../../assets/Testimonials/Mark.jpg";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    img: Img4,
  },
  {
    id: 2,
    name: "Satya Nagella",
    text: "Lorem ipsum dolor sit amet, expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    img: Img5,
  },
  {
    id: 3,
    name: "Leonardo Woedy",
    text: "Lorem ipsum dolor sit amet and I will give you a complete account of the system.",
    img: Img6,
  },
  {
    id: 4,
    name: "Ana Dantas",
    text: "Lorem ipsum dolor sit amet and I will give you a complete account of the system.",
    img: Img7,
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet and I will give you a complete account of the system.",
    img: Img8,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi.
          </p>
        </div>

        {/* Testimonial card */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div
                    key={data.id}
                    className="flex flex-col gap-4 shadow-lg
                    py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                  >
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/80 dark:text-light">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;