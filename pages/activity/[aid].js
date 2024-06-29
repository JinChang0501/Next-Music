import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import MainMusicInfo from '@/components/activity/main-music-info'
import ArtistFollowCard from '@/components/activity/artist-follow-card'
import artistData from '@/data/activity/artist-data'
import Tabs from '@/components/activity/tabs'
import RecommondCard from '@/components/activity/recommond-card'

export default function Aid() {
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div className="music-container mt-80">
        {/* 活動主資訊 start */}
        <MainMusicInfo />
        {/* 活動主資訊 end */}
        {/* 音樂人 start */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">音樂人</div>
          {artistData.map((v, i) => {
            return (
              <ArtistFollowCard key={v.id} imgSrc={v.imageSrc} artist_name={v.artist_name} />
            )
          })}
        </div>
        {/* 音樂人 end */}
        {/* 簡介：頁籤 start */}
        <Tabs className="my-80" />
        {/* 簡介：頁籤 end */}
        {/*  推薦活動 start  */}
        <div className="row my-5">
          <div className="chb-h4 mb-40 text-purple1">推薦活動</div>
          {artistData.map((v, i) => {
            return (
              <RecommondCard key={v.id} imgSrc={v.imageSrc} activity_name={v.activity_name} artist_name={v.artist_name} />
            )
          })}
        </div>
      </div>
      <style jsx>{`
        .mb-40 {
          margin-bottom: 40px;
        }
        .mt-80 {
          margin-top: 80px;
        }
        .my-80 {
          margin-top: 80px;
          margin-bottom: 80px;
        }
      `}</style>
    </>
  )
}
