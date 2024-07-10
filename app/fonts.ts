import localFont from 'next/font/local';

const helvetica = localFont({
  src: [
    {
      path: '../public/fonts/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
});

export const fonts = {
  helvetica,
};