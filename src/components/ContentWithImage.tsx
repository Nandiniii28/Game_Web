import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ContentWithImageProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  imageOnRight?: boolean;
}

export const ContentWithImage: React.FC<ContentWithImageProps> = ({
  title,
  description,
  imageUrl,
  features,
  imageOnRight = false
}) => {
  const content = (
    <div className="col-lg-6 px-3">
      <h2 className="h2 mb-4">{title}</h2>
      <p className="text-muted mb-4">{description}</p>
      <ul className="list-unstyled">
        {features.map((feature, index) => (
          <li key={index} className="d-flex align-items-center gap-2 mb-3">
            <CheckCircle className="text-success flex-shrink-0" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const image = (
    <div className="col-lg-6 px-3">
      <div className="image-wrapper rounded overflow-hidden" style={{ maxHeight: '400px' }}>
        <img
          src={imageUrl}
          alt={title}
          className="w-100 h-100 object-fit-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          {imageOnRight ? (
            <>
              {content}
              {image}
            </>
          ) : (
            <>
              {image}
              {content}
            </>
          )}
        </div>
      </div>
    </section>
  );
};