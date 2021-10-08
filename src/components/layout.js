import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <p>Layout - start</p>
      {children}
      <p>Layout - end</p>
    </div>
  )
}
