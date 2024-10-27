// app/site/docs/page.tsx
import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Vantren",
  description: "Documentación para Vantren",
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink href="/docs" text="Introduction" />
                  <SidebarLink href="/docs/privacy-policy" text="Política de Privacidad" />
                  <SidebarLink href="/docs/cookie-policy" text="Política de Cookies" />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h1>Bienvenido a la Documentación de Vantren</h1>
<p className="text-body-color dark:text-body-color-dark text-base">
  En esta sección, encontrarás toda la información que necesitas para comprender los servicios de Vantren, nuestras políticas y guías sobre cómo utilizar nuestra plataforma y aprovechar al máximo nuestras soluciones digitales.
</p>
<p className="text-body-color dark:text-body-color-dark text-base">
  Esta documentación está diseñada para ayudarte a navegar y entender los aspectos técnicos y funcionales de nuestro sitio, así como para ofrecer transparencia sobre nuestras políticas de privacidad y uso de cookies.
</p>
<p className="text-body-color dark:text-body-color-dark text-base">
  Si necesitas ayuda adicional o tienes preguntas, no dudes en ponerte en contacto con nosotros. ¡Estamos aquí para ayudarte a aprovechar al máximo todo lo que Vantren tiene para ofrecer!
</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
