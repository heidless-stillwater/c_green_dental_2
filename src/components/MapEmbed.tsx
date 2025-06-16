
interface MapEmbedProps {
  src?: string;
  className?: string;
}

const defaultMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086438392093!2d144.95373531590412!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1605058017000!5m2!1sen!2sau";

export function MapEmbed({ src = defaultMapSrc, className }: MapEmbedProps) {
  return (
    <div className={`aspect-video w-full overflow-hidden rounded-lg shadow-lg ${className}`}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Clinic Location"
      ></iframe>
    </div>
  );
}
