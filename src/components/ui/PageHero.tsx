import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({
  title,
  subtitle,
  image = '/sources/doorhero1.jpg',
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
