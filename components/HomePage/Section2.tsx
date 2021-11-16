import Image from "next/image";

const Section2 = (): JSX.Element => (
  <div className="bg-blue-700">
    <div className="max-w-1260 mx-auto py-28 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
      <div className="content-container col-span-4 md:col-span-8  lg:col-span-12 p-6 md:py-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="image-container">
          <Image
            className="mx-auto md:mx-0 "
            src="/static/HomePage/Section2/range.png"
            alt="women"
            width={586}
            height={328}
          />
        </div>
        <div className="text-contianer md:col-start-6 md:col-end-9 mx-auto mt-6 md:mx-0 md:ml-24">
          <h1
            className="font-heading text-3xl
                sm:text-5xl md:text-4xl md:text-left lg:text-5xl text-white-100 font-semibold text-center"
          >
            Get local orders delivered in less{" "}
            <span className="text-green-500">than 5 minutes</span>
          </h1>
          <p className="font-body font-normal text-white-100 mt-4 sm:text-xl md:text-lg lg:text-xl text-center md:text-left">
            Get your essential orders delivered to you in less than 5 minutes
            using our fast delivery service, so that you aren’t kept waited for
            long.
          </p>
        </div>
      </div>

      <div className="content-container col-span-4 md:col-span-8  lg:col-span-12 p-6 md:py-6 md:px-12 flex flex-col mt-24 md:flex-row-reverse items-center justify-between">
        <div className="image-container">
          <Image
            className="mx-auto md:mx-0 "
            src="/static/HomePage/Section2/medicals.png"
            alt="women"
            width={625}
            height={426}
          />
        </div>
        <div className="text-contianer md:col-start-6 md:col-end-9 mx-auto mt-6 md:mx-0 md:mr-24">
          <h1
            className="font-heading text-3xl
                sm:text-5xl md:text-4xl lg:text-5xl md:text-left text-white-100 font-semibold text-center"
          >
            <span className="text-green-500">From your</span> local pharmacies
            to coffee shops
          </h1>
          <p className="font-body font-normal text-white-100 mt-4 sm:text-xl md:text-lg lg:text-xl text-center md:text-left">
            We deliver from a vast variety of locations, so it’s most likely
            that your selected pickup place is already listed by us.
          </p>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .image-container {
          width: 30rem;
        }
        img {
          pointer-events: none;
        }
        .text-contianer {
          max-width: 26rem;
        }

        /* Small Tablet Styles */

        @media (min-width: 640px) {
          .text-contianer {
            max-width: 29rem;
          }
        }

        /* Tablet Styles */

        @media (min-width: 768px) {
          .image-container {
            width: 40rem;
          }

          .text-contianer {
            max-width: 25rem;
          }
        }

        /* laptop Styles */

        @media (min-width: 1024px) {
          .image-container {
            width: 40rem;
          }

          .text-contianer {
            max-width: 30rem;
          }
        }
      `}
    </style>
  </div>
);
export default Section2;
