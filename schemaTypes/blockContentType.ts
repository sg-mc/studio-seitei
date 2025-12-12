import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'ブロックコンテンツ',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'ブロック',
      type: 'block',
      styles: [
        {title: '通常', value: 'normal'},
        {title: '見出し1', value: 'h1'},
        {title: '見出し2', value: 'h2'},
        {title: '見出し3', value: 'h3'},
        {title: '見出し4', value: 'h4'},
        {title: '引用', value: 'blockquote'},
      ],
      lists: [
        {title: '箇条書き', value: 'bullet'},
        {title: '番号付きリスト', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: '太字', value: 'strong'},
          {title: '斜体', value: 'em'},
          {title: '下線', value: 'underline'},
          {title: 'コード', value: 'code'},
        ],
        annotations: [
          {
            title: 'リンク',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) => Rule.uri({
                  allowRelative: true,
                  scheme: ['https', 'http', 'mailto', 'tel']
                })
              },
              {
                title: '新しいタブで開く',
                name: 'blank',
                type: 'boolean',
                initialValue: false,
              }
            ]
          }
        ]
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '代替テキスト',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'キャプション',
        }
      ]
    }),
    defineArrayMember({
      type: 'code',
      title: 'コードブロック',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'Python', value: 'python'},
          {title: 'JSON', value: 'json'},
          {title: 'Bash', value: 'bash'},
        ],
        withFilename: true,
      }
    }),
  ],
})