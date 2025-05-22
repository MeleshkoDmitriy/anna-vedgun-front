module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Новые функции
        'fix', // Исправления ошибок
        'docs', // Изменения в документации
        'style', // Изменения, не влияющие на смысл кода
        'refactor', // Рефакторинг кода
        'perf', // Изменения для улучшения производительности
        'test', // Добавление или изменение тестов
        'chore', // Изменения в процессе сборки или вспомогательных инструментах
        'revert', // Откат изменений
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-empty': [0, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
};
