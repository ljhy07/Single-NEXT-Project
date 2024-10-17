import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '/fonts/font/Pretendard/Pretendard-Regular.ttf',
      weight: '400',
    },
    {
      path: '/fonts/font/Pretendard/Pretendard-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-pretendard',
});

export const montserrat = localFont({
    src: [
        {
            path: '/fonts/font/Monstserrat/Monstserrat-Bold.ttf',
            weight: '',
        }
    ],
    variable: '--font-pretendard',
});