/**
 * compact: true
 * inline: true
 */
import React from 'react'
import Giscus from '@giscus/react';
import { usePrefersColor } from 'dumi';

export default function Commit() {
  const [color] = usePrefersColor();
  return (
    <section style={{marginTop: '32px'}}>
      <Giscus src="https://giscus.app/client.js"
              repo="gzc-02/my_blog"
              repoId="R_kgDOM31HQg"
              category="General"
              categoryId="DIC_kwDOM31HQs4Ci10F"
              mapping="pathname"
              strict="0"
              reactionsEnabled="1"
              emit-metadata="0"
              inputPosition="top"
              lang="zh-CN"
              crossorigin="anonymous"
              loading='lazy'
              theme={color === 'dark' ? 'dark_tritanopia' : 'light_tritanopia'}
      />

    </section>
  )
}
