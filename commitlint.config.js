module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'scope-empty': [0, 'never'],
    'scope-case': [
      2,
      'always',
      [
        'lower-case', // default
        'camel-case', // camelCase
      ],
    ],
  },
};
