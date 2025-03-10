module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
    'colon-not-include': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        //콜론 포함 확인
        'colon-not-include': ({ header }) => {
          return [
            header.includes(' : '),
            '커밋 메세지에 :가 포함되지 않았습니다.',
          ];
        },
        'type-enum': ({ header }) => {
          const types = new Set([
            'feat',
            'fix',
            'docs',
            'style',
            'refactor',
            'test',
            'chore',
          ]);
          const type = header.split(' : ')[0]; //커밋 메세지의 type 추출
          return [
            types.has(type), //types에 type이 포함되어 있는지 확인
            `${type}은 유효한 커밋 type이 아닙니다.`, //에러 메세지
          ];
        },
      },
    },
  ],
};
