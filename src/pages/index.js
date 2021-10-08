import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: "tomato" }}>
      <h1>Hello world</h1>
      <p>This is a paragraph</p>
      <Link to="/page-2/">Page 2</Link>
      <Link to="/dir1/page-3/">Page 3</Link>
      <Link to="/counter/">counter</Link>
    </div>
  )
}
