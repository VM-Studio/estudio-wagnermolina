export default function Videos() {
  // IDs de los 7 videos proporcionados
  const videoIds = [
    'A0TPJzfjR7I',
    'U_OiimeNq5Q',
    'Rwsf977o62E',
    'yGIbuNx_4i8',
    '6FN6gh11jkM',
    'g0rBlX_YLhA',
    'RupkaT6LjUs',
  ];

  const videos = videoIds.map((id) => `https://www.youtube.com/embed/${id}`);

  return (
    <section className="videos" id="videos">
      <div className="container">
        <div className="videos-header">
          <div className="section-label">Contenido Audiovisual</div>
          <h2 className="section-title">Streaming</h2>
        </div>
        <p className="videos-sub">Participaciones en medios y análisis de casos relevantes</p>
        <div className="videos-grid">
          {videos.map((videoUrl, index) => (
            <div key={index} className="video-wrapper">
              <iframe
                src={videoUrl}
                title={`Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}