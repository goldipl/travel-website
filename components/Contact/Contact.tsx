import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="flex flexCenter bg-opacity-50 bg-white pt-8 text-black font-bold mb-4 lg:m-10 regular-24 xl:regular-40">
        Contact
      </h1>
      <iframe
        className="google-map w-[100vw] h-[400px] border-t-2 border-black"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438479282!2d20.92111239761172!3d52.23306532094908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1668164739561!5m2!1spl!2spl"
        width="800"
        height="600"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Contact;
