import Image from 'next/image';

export default function Pic({ src, alt, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`rounded-lg ${className}`} // Adding Tailwind CSS for styling
      layout="responsive"
      width={500}
      height={250}
    />
  );
}
