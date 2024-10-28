"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-center lg:gap-0">
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/3"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/vantren/images/logo/clogo-dark.svg"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/vantren/images/logo/clogo-light.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5">
  Vantren es una empresa especializada en el desarrollo de soluciones web a medida, ayudando a empresas a destacar en el mundo digital.
</p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  contacto
                </p>
                <a
                  href="mailto:eduardo.puentes.dev@gmail.com"
                  className="text-base font-medium text-black dark:text-white"
                >
                  eduardo.puentes.dev@gmail.com
                </a>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-around md:gap-0 lg:w-2/3 xl:w-7/12">
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Enlaces Rápidos
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#servicios"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#precios"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Precios
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#faqs"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#contacto"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contacto
                      </a>
                    </li>
                  </ul>
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Soporte
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/contacto"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Atención
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs/privacy-policy"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Politica de Privacidad
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs/cookie-policy"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Política de Cookies
                      </a>
                    </li>
                  </ul>
                </motion.div>

              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark">

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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} Vantren. Todos los derechos reservados.
              </p>
            </motion.div>

          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
