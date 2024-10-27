import SidebarLink from "@/components/Docs/SidebarLink";

export default function PrivacyPolicy() {
  return (
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
              <h1>Política de Privacidad</h1>
              
              <h3>1. Introducción</h3>
              <p>
                Vantren valora y respeta la privacidad de nuestros clientes y usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que compartes con nosotros a través de nuestro sitio web y servicios.
              </p>

              <h3>2. Información que Recopilamos</h3>
              <p>
                Recopilamos diferentes tipos de información personal cuando interactúas con nuestro sitio, como:
              </p>
              <ul className="list-disc ml-6">
                <li><strong>Información de contacto:</strong> Nombre, correo electrónico y número de teléfono.</li>
                <li><strong>Información de navegación:</strong> Datos de tu actividad en el sitio web, como páginas visitadas y tiempo en el sitio.</li>
                <li><strong>Datos técnicos:</strong> Dirección IP, navegador y dispositivo utilizado.</li>
              </ul>

              <h3>3. Uso de la Información</h3>
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc ml-6">
                <li><strong>Proporcionar y mejorar nuestros servicios:</strong> Ofrecer una experiencia personalizada y mejorar las funcionalidades del sitio.</li>
                <li><strong>Comunicación:</strong> Enviar actualizaciones, promociones y otra información relevante.</li>
                <li><strong>Seguridad y prevención de fraudes:</strong> Proteger nuestros servicios y la privacidad de nuestros usuarios.</li>
              </ul>

              <h3>4. Compartir Información con Terceros</h3>
              <p>
                No vendemos ni compartimos tu información personal con terceros, salvo en los siguientes casos:
              </p>
              <ul className="list-disc ml-6">
                <li><strong>Proveedores de servicios:</strong> Podemos compartir datos con proveedores externos que nos ayudan a operar nuestro sitio.</li>
                <li><strong>Requisitos legales:</strong> Si la ley lo exige, podemos compartir información para cumplir con procesos legales o responder a solicitudes de autoridades.</li>
              </ul>

              <h3>5. Protección de la Información</h3>
              <p>
                Implementamos medidas de seguridad para proteger tus datos personales. Sin embargo, ten en cuenta que ningún método de transmisión en Internet es completamente seguro.
              </p>

              <h3>6. Tus Derechos</h3>
              <p>
                Tienes el derecho de acceder, corregir o eliminar tus datos personales, así como de limitar su procesamiento. Para ejercer estos derechos, contáctanos a través de <a href="mailto:contacto@vantren.com">contacto@vantren.com</a>.
              </p>

              <h3>7. Cambios a la Política de Privacidad</h3>
              <p>
                Vantren se reserva el derecho de actualizar esta Política de Privacidad. Cualquier cambio se publicará en esta página y, cuando corresponda, se te notificará.
              </p>

              <h3>8. Contacto</h3>
              <p>
                Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos en: <br></br> 
                <strong>Correo:</strong> contacto@vantren.com  <br></br> 
                <strong>Teléfono:</strong> +52 221 408 0987  <br></br> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
