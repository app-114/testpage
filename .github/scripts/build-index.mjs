// content/news/*.json と content/cases/*.json から、公開中の一覧を作る。
//   content/index/news.json  … 「公開する」がオンの記事
//   content/index/cases.json … 「公開する」と「掲載同意」の両方がオンの事例
// 並びは日付の新しい順。ファイル名（拡張子なし）を slug として持たせる。
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";

const KINDS = {
  news: (d) => d.published === true && d.title,
  cases: (d) => d.published === true && d.consent === true && d.title,
};

mkdirSync("content/index", { recursive: true });

for (const [kind, isPublic] of Object.entries(KINDS)) {
  const dir = `content/${kind}`;
  const list = [];
  if (existsSync(dir)) {
    for (const file of readdirSync(dir).filter((f) => f.endsWith(".json")).sort()) {
      try {
        const data = JSON.parse(readFileSync(`${dir}/${file}`, "utf8"));
        if (isPublic(data)) list.push({ ...data, slug: file.replace(/\.json$/, "") });
      } catch (err) {
        console.error(`読み込めないので飛ばします: ${dir}/${file} (${err.message})`);
      }
    }
  }
  list.sort((a, b) => String(b.date ?? "").localeCompare(String(a.date ?? "")));
  writeFileSync(`content/index/${kind}.json`, JSON.stringify(list, null, 1) + "\n");
  console.log(`${kind}: 公開中 ${list.length} 件`);
}
