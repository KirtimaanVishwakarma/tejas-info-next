import React from 'react';
interface MapProps {
  allowFullScreen?: boolean;
  loading?: 'lazy' | 'eager';
  referrerPolicy?: string;
}
const Map: React.FC<MapProps> = () => {
  return (
    <div className='max-w-8xl m-auto md:my-4 lg:my-8 w-full'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.0010043915613!2d83.38033508752507!3d26.776237916725876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144fbc3f29d81%3A0x4350491a864985f3!2s24F%2C%20Shahpur%2C%20Gorakhpur%2C%20Uttar%20Pradesh%20273407!5e0!3m2!1sen!2sin!4v1731847805147!5m2!1sen!2sin'
        className='w-full h-96'
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Map;
