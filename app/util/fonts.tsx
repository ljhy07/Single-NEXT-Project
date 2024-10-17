import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard/Pretendard-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Pretendard/Pretendard-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-pretendard',
});

export const montserrat = localFont({
    src: [
        {
            path: '../../public/fonts/Montserrat/Montserrat-Bold.ttf',
            weight: '700',
        }
    ],
    variable: '--font-pretendard',
});