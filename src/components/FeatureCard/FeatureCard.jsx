const FeatureCard = ({
  title,
  description,
  image,
  icon: Icon,
  image_alt,
  className,
  ...props
}) => {
  return (
    <div
      className={`max-w-xs w-full p-6 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-xl hover:border-gray-400 transition-all duration-300}`}
      {...props}
    >
      <div className="mb-4 flex justify-center">
        {Icon ? (
          <Icon className="h-16 w-16 text-gray-800" />
        ) : (
          <img
            src={image}
            alt={image_alt || title}
            className="h-16 w-auto object-contain"
          />
        )}
      </div>

      <h1 className="text-xl font-semibold text-gray-800 mb-3 text-center">
        {title}
      </h1>

      <div className="text-base text-gray-600 space-y-2 text-center">
        {Array.isArray(description) ? (
          description.map((para, index) => (
            <li key={index} className={`${className}`}>
              {para}
            </li>
          ))
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
