export type TNavigation = {
  path: string;
  title: string;
};

export const navigation: Record<string, TNavigation> = {
  home: {
    path: '/',
    title: 'Главная',
  },
  offer: {
    path: '/offer',
    title: 'Оферта',
  },
  education: {
    path: '/education',
    title: 'Образование',
  },
  // blog: {
  //   path: '/blog',
  //   title: 'Блог',
  // },
};
