"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4bzjkdn", // Replace with your Service ID
        "template_ll0dyxt", // Replace with your Template ID
        e.target,
        "z5OjS3KJIHi-8AIA4" // Replace with your Public Key
      )
      .then(
        (result) => {
          toast.success("Mensaje enviado exitosamente");
        },
        (error) => {
          toast.error("Error al enviar el mensaje, intenta nuevamente.");
        }
      );

    e.target.reset(); // Reset form after submission
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="contacto" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./vantren/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./vantren/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Envíanos un mensaje
              </h2>

              <form onSubmit={sendEmail}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                    required
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    name="phone"
                    placeholder="Número Telefónico"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                    required
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                    type="submit"
                  >
                    Envíar mensaje
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
  variants={{
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }}
  initial="hidden"
  whileInView="visible"
  transition={{ duration: 2, delay: 0.1 }}
  viewport={{ once: true }}
  className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
>
  <h2 className="mb-5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
    Encuéntranos
  </h2>

  <div className="mb-7">
    <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
      Correo Electrónico
    </h3>
    <p>
      <a href="mailto:contacto@vantrenlabs.com">contacto@vantrenlabs.com</a>
    </p>
  </div>
  <div className="mb-7">
    <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
      Número Telefónico
    </h4>
    <p>
      <a href="tel:+522214080987">+52 221 408 0987</a>
    </p>
  </div>

  {/* Action Buttons */}
  <div className="flex flex-col gap-4 mt-8">
    {/* WhatsApp Button */}
    <a
      href="https://wa.me/+522214080987?text=Quiero%20mejorar%20mi%20presencia%20digital." // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-full font-medium hover:bg-green-600"
    >
      Chatear por WhatsApp
    </a>

    {/* Schedule Appointment Button */}
    <a
      href="https://calendly.com/vantrenlabs/15min"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-blue-600"
    >
      Consulta Gratuita
    </a>

    {/* Email Button */}
    <a
      href="mailto:yourmail@domainname.com"
      className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
    >
      Envíar Correo
    </a>
  </div>
</motion.div>

          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
