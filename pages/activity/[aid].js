import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'

export default function Aid() {
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <h1>Home Page Content</h1>
    </>
  )
}
