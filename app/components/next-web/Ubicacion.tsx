export default function Ubicacion() {
  return (
    <section className="ubicacion-mapa" id="ubicacion">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895424!2d-58.3867!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf4dcb0e2d%3A0x2e5d8d6c4f0c8f0a!2sLavalle%201605%2C%20C1048AAM%20CABA!5e0!3m2!1ses!2sar!4v1709963583544!5m2!1ses!2sar" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del Estudio"
      />
    </section>
  );
}