import BreadcrumbsDark from '@/components/common/breadcrumb/BreadcrumbsDark'

export default function Aid() {
  const breadcrumbsURL = [
    { label: 'Home', href: '/' },
    { label: 'Library', href: '/library' },
    { label: 'Data', href: '/data' },
  ];

  return (
    <>
      <BreadcrumbsDark breadcrumbs={breadcrumbsURL} />
      <h1>Home Page Content</h1>
    </>
  )
}
