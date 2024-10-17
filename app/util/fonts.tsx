import localFont from 'next/font/local';

export const bebas = localFont({
  src: '../static/fonts/BebasNeue.woff',
  variable: '--font-bebas',
});

export const pretendard = localFont({
  src: [
    {
      path: '../static/fonts/Pretendard-Regular.woff',
      weight: '400',
    },
    {
      path: '../static/fonts/Pretendard-Bold.woff',
      weight: '700',
    },
  ],
  variable: '--font-pretendard',
});