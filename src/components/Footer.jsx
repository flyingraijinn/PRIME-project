import React from "react";
const Footer = () => {
  return (
    <div className="bg-black w-full h-auto text-white">
      <div className="grid md:grid-cols-5 px-5 ">
        <div className="mt-10 pl-10  space-y-4 text-start">
          <h1 className="text-xl font-[Poppins] font-semibold mt-10 mb-5">
            ABOUT PRIME
          </h1>
          <p>
            PRIME was developed to fill the void where <br /> great taste meets
            function. With bold,
            <br /> thirst-quenching flavors to help you refresh, <br />
            replenish, and refuel, PRIME is the perfect boost for any endeavor.{" "}
            <br /> We're confident you'll love it as much as we do.
          </p>
          <div className="flex justify-start item-center gap-6 mt-5 cursor-pointer">
            <span>
              <i class="fa-brands fa-facebook text-lg"></i>
            </span>
            <span>
              <i class="fa-brands fa-square-instagram text-lg"></i>
            </span>
            <span>
              <i class="fa-brands fa-x-twitter text-lg"></i>
            </span>
          </div>
          <p className="mt-40 mb-5">© Prime Hydration LLC</p>
        </div>
        <div className="mt-10 pl-10  space-y-4 text-start">
          <p>PRIME X</p>
          <p>ENERGY</p>
          <p>HYDRATION</p>
          <p>HYDRATION+STICKS</p>
        </div>
        <div className="mt-10 pl-10  space-y-4 text-start">
          <p>ABOUT PRIME</p>
          <p>TEAMS + ATHELETES</p>
          <p>CREATORS</p>
          <p>ARTISTS</p>
          <p>AMBASSADORS</p>
          <p>FAQS</p>
        </div>
        <div className="mt-10 pl-10  space-y-4 text-start">
          <p>PRIME X</p>
          <p>ENERGY</p>
          <p>HYDRATION</p>
          <p>HYDRATION+STICKS</p>
        </div>
        <div className="mt-10 item-center justify-center flex-col block pl-10">
          <h1 className="text-xl font-[Poppins] font-semibold">NEWS LETTER</h1>
          <p className="pt-4">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <input
            className="mt-4 py-1 rounded-lg px-5 "
            type="text"
            placeholder="Enter Your Email"
          />
          <br />
          <input
            className="mt-4 px-5 py-1 rounded-lg"
            placeholder="Phone Number"
          />
          <p className="pt-4">
            By subscribing, you consent to receive marketing communications from
            PRIME using the provided email address and phone number. Consent to
            receive marketing is not required for purchase. Standard data and
            messaging rates may apply. You can opt-out at any time by contacting
            us or using the unsubscribe link. See our Privacy Policy for
            details.
          </p>
          <button className="hover:bg-white hover:text-black border-2 bg-black text-white px-8 py-2 text-xl mt-5">
            SUBCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
