// common/components/CardWithImage.tsx
interface CardWithImageProps {
  image: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  imagePosition?: 'top' | 'side';
}

export default function CardWithImage({
  image,
  title,
  description,
  actions,
  imagePosition = 'top'
}: CardWithImageProps) {
  if (imagePosition === 'side') {
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="p-4 lg:p-6">
          <img src={image} alt={title} className="rounded-xl w-full lg:w-48 h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">{actions}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 pt-4">
        <img src={image} alt={title} className="rounded-xl h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">{actions}</div>
      </div>
    </div>
  );
}