import React from 'react'

const fallback = <div />

export const Suspense = Element =>
  function suspensed(props) {
    return (
      <React.Suspense fallback={fallback}>
        <Element {...props} />
      </React.Suspense>
    )
  }
