export default function Ubicacion() {
  return (
    <section className="ubicacion-mapa" id="ubicacion">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3404.8142440323595!2d-64.1833019!3d-31.4192436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28046c3666b%3A0xda33b9339e6a7c30!2sAbogado%20Fili%20%26%20Asociados!5e0!3m2!1ses!2sar!4v1769963583544!5m2!1ses!2sar" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Filí y Asociados"
      />
    </section>
  );
}