import React from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'

export default function breadcrumbTest() {
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div style={{ backgroundColor: '#fff', width: '100%' }}>看高度的</div>
    </>
  )
}
