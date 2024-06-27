import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import MainMusicInfo from '@/components/activity/main-music-info'

export default function Aid() {
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div className='music-container'>
        <MainMusicInfo />
      </div>
    </>
  )
}
