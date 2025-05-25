export type TPsychologyApproach = {
  title: string;
};

export const psychologyApproaches: TPsychologyApproach[] = [
  {
    title: 'Когнитивно-поведенческая терапия',
  },
  {
    title: 'Схема-терапия',
  },
  {
    title: 'Кризисная психология',
  },
  {
    title: 'Клиническая психология',
  },
];

export type TPsychologyService = {
  title: string;
};

export const psychologyServices: {
  on: TPsychologyService[];
  off: TPsychologyService[];
} = {
  on: [
    {
      title: 'Навязчивые мысли и действия (обсессивно-компульсивное расстройство)',
    },
    {
      title: 'Тревожные состояния',
    },
    {
      title: 'Самокритика и низкая самооценка',
    },
    {
      title: 'Сложности в межличностных отношениях (с родителями, партнером, друзьями и т.д.)',
    },
    {
      title: 'Кризисные состояния (смерть близкого, развод, увольнение и т.д.)',
    },
    {
      title: 'Личностные кризисы (потеря смысла жизни, самоопределение)',
    },
  ],
  off: [
    {
      title: 'Зависимости (алкогольная, наркотическая и т.д.)',
    },
    {
      title: 'Детский и подростковый возраст (от 0 до 18 лет)',
    },
    {
      title: 'Не работаю с друзьями и знакомыми',
    },
    {
      title: 'Семейная терапия',
    },
  ],
};
