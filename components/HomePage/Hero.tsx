import Image from "next/image";

const Hero = (): JSX.Element => (
  <div
    className="
    text-white-100
	hero-img
	"
  >
    <div className="buildings relative ">
      <div className="max-w-1260 mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <div className=" text-container pt-10 pb-96 px-4 mt-36 md:mt-40 xl:52 col-span-4 md:col-span-8 lg:col-span-12 mx-auto text-center">
          <h1 className="font-heading text-2xl sm:text-4xl xl:text-5xl font-semibold">
            <span className="text-green-500">Hi-Speed</span> Air Deliveries when
            you need ‘em
          </h1>
          <p className="font-body lg:text-lg mt-8">
            We use drones to deliver your orders right at your doorstop, using
            it’s decentralized autonomous aircraft delivery service
          </p>
          <form className="mt-10 mb-5 bg-white-100 bg-opacity-20 w-full rounded-lg lg:mb-6 lg:pt-1 font-heading flex relative placeholder-white-200 placeholder-opacity-50">
            <input
              placeholder="Enter Your Email"
              className="p-4 bg-transparent text-sm md:text-base placeholder-white-200 placeholder-opacity-50"
              type="email"
            />
            <button className="py-2 text-sm flex-grow-0 px-3 absolute z-10 rounded-md right-2">
              Join our waitlist
            </button>
          </form>
        </div>
      </div>
      <Image
        className="absolute bottom-0 right-0 moblie_image pointer-events-none"
        src="/Home-page/hero-section/building_right_mobile.svg"
        alt=""
        layout="fill"
      />
      <Image
        className="absolute bottom-0 right-0 laptop_image pointer-events-none"
        src="/Home-page/hero-section/laptop_right.svg"
        alt=""
        layout="fill"
      />
      <Image
        className="absolute bottom-0 left-0 laptop_image pointer-events-none"
        src="/Home-page/hero-section/laptop_left.svg"
        alt=""
        layout="fill"
      />
    </div>
    <style jsx>
      {`
        *::placeholder {
          color: #ffffff !important;
          opacity: 0.9;
          font-size: 16px;
        }
        .laptop_image {
          display: none;
        }
        .moblie_image {
          max-width: 340px;
          margin-bottom: -1rem;
        }
        form button {
          background: #1d3dae;
          backdrop-filter: blur(12.0437px);
        }
        form input {
          width: calc(100% - 140px);
        }

        input:focus {
          outline: none;
        }
        form button {
          top: 0.45rem;
        }
        .text-container {
          max-width: 350px;
        }
        .hero-img {
          background-image: linear-gradient(
            357.94deg,
            #4b72ff 39.48%,
            #3860ef 127.04%
          );
        }
        .buildings {
          background: url("/Home-page/hero-section/building.png");
          background-repeat: repeat-x;
          background-position-y: bottom;
          background-size: 700px;
        }
        /* Small Tablet Styles */

        @media (min-width: 640px) {
          .moblie_image {
            max-width: 450px;
          }
          .text-container {
            max-width: 500px;
          }
          form {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* Tablet Styles */

        @media (min-width: 768px) {
          .moblie_image {
            min-width: 350px;
            max-width: 470px;
          }
          form button {
            top: 0.65rem;
          }
          form {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* laptop Styles */

        @media (min-width: 1024px) {
          .text-container {
            max-width: 600px;
          }
          .laptop_image {
            display: block;
            width: 280px;
            margin-bottom: -1rem;
          }
          .moblie_image {
            display: none;
          }
          form button {
            top: 0.75rem;
          }
          form {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (min-width: 1280px) {
          .text-container {
            max-width: 650px;
          }
          .laptop_image {
            display: block;
            width: 390px;
            margin-bottom: -1rem;
          }

          .moblie_image {
            display: none;
          }
          form button {
            top: 0.75rem;
          }
          form {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}
    </style>
  </div>
);

export default Hero;
