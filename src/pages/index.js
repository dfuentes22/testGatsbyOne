import React from "react"
import { Link } from "gatsby"
import Counter from "./counter"
import Layout from "../components/layout"

export default function Home() {
  return (
    <div>
      outside layout
      <Layout>
        <h1>Hello world</h1>
        <p>This is a paragraph</p>
        <Link to="/page-2/">Page 2</Link>
        <Link to="/dir1/page-3/">Page 3</Link>
        <Counter color="green" />
      </Layout>
      outside layout
    </div>
  )
}
