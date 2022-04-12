import React from 'react'
export default ({ width, height, source, fill }) => {
  if (fill === undefined || fill.length === 0) {
    fill = '#000000'
  }
  const SVG = source
  return <SVG width={width || 30} height={height || 30} fill={fill} />
}