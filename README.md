# ホームエステ 住まいの総合サイト — 叩き台

株式会社ホームエステ様「住まいの総合サイト」の構成確認用モックアップです。

## 公開URL

| | URL |
|---|---|
| **全ページ統合版**（推奨） | `/` |
| 個別ページ版 | `/pages/top.html` |

統合版はハッシュルーターで全11ページを1ファイルに収めています。
`#/soudankai` のようにURL末尾を変えると、特定ページを直接共有できます。

| ルート | ページ |
|---|---|
| `#/` | トップ |
| `#/reform` | リフォーム一覧 |
| `#/kitchen` | キッチン |
| `#/bath` | 浴室 |
| `#/washstand` | 洗面化粧台 |
| `#/toilet` | トイレ |
| `#/interior` | 内装工事 |
| `#/exterior` | 外構工事 |
| `#/soudankai` | 住まいのお困りごと相談会 |
| `#/case` | 住まいのお困りごと解決事例 |
| `#/case/01` | 解決事例 詳細 |

## 注意

- **構成確認用の叩き台です。** 画像・文言・リンク先・割引内容は仮のものを含みます。
- 写真の一部はAI生成のイメージ画像です。施工実績ではありません。
- 解決事例のBefore/After、スタッフ写真、かわら版の誌面は先方支給待ちです。
- `noindex` を設定しています（検索エンジンには登録されません）。

## ファイル構成

```
index.html        全ページ統合版（1ファイル・約1.3MB）
pages/            個別ページ版（WordPressテーマ化の際はこちら）
  top.html  reform.html  kitchen.html  bath.html  washstand.html
  toilet.html  interior.html  exterior.html  soudankai.html
  case.html  case-01.html
```
