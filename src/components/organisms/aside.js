import React from "react"
import { Link } from "gatsby"

const Aside = ({ className }) => (
  <aside className={className}>
    <section>
      <h2>初めての根域制限栽培</h2>
      <ul>
        <li>
          <Link to="/articles/overview">根域制限栽培とは</Link>
        </li>
      </ul>
      <h2>記事カテゴリー</h2>
      <ul>
        <li>
          <Link to="#">基礎編</Link>
        </li>
        <li>
          <Link to="#">ブドウ</Link>
        </li>
        <li>
          <Link to="#">ナシ</Link>
        </li>
        <li>
          <Link to="#">モモ</Link>
        </li>
      </ul>
      <form>
        <input type="text" />
        <button type="submit">検索</button>
      </form>
    </section>
  </aside>
)

export default Aside
