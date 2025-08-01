import type {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('コンテンツ')
    .items([
      S.listItem()
        .title('ブログ記事')
        .child(
          S.documentList()
            .title('ブログ記事')
            .filter('_type == "post"')
            .defaultLayout('card')
            .menuItems([
              S.menuItem()
                .title('カード表示')
                .icon(() => '⊞')
                .action('setLayout')
                .params({layout: 'card'})
            ])
        ),
      S.divider(),
      S.listItem()
        .title('カテゴリー')
        .child(
          S.documentList()
            .title('カテゴリー')
            .filter('_type == "category"')
        ),
      S.listItem()
        .title('タグ')
        .child(
          S.documentList()
            .title('タグ')
            .filter('_type == "tag"')
        ),
      S.listItem()
        .title('著者')
        .child(
          S.documentList()
            .title('著者')
            .filter('_type == "author"')
        ),
    ])