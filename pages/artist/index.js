import { useEffect } from 'react'
import styles from '@/styles/artist/artist.module.scss'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import CarouselIndex from '@/components/product/carousel-index'
import artistCard from '@/components/artist/art-card'
// import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'


export default function List() {
  // Toggle the side navigation
  useEffect(() => {
    // fix next issue
    if (typeof window !== 'undefined') {
      const sidebarToggle = document.body.querySelector('#sidebarToggle')

      if (sidebarToggle) {
        // 在localStorage中儲存目前sidebar情況
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          document.body.classList.toggle('sb-sidenav-toggled')
        }

        sidebarToggle.addEventListener('click', (event) => {
          event.preventDefault()

          document.body.classList.toggle('sb-sidenav-toggled')

          localStorage.setItem(
            'sb|sidebar-toggle',
            document.body.classList.contains('sb-sidenav-toggled')
          )
        })
      }
    }
  }, [])

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '音樂人', href: '/artist' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      {/* 商品推播 */}
      <CarouselIndex />

      <div className="row mt-2 mb-3">
            <div className="chb-h3 text-white text-center">音樂人</div>
            <div id="page-content-wrapper">
              <div className="container ">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card w-350  f-16 ">
                      <img
                        src="/images/artist/Collage.png"
                        className="card img play-button"
                        alt="..."
                      />
                      <div className="col">
                        <p className="card-text  text-center ">柯拉琪</p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 ">
                      <img
                        src="/images/artist/Collage.png"
                        className="card img play-button"
                        alt="..."
                      />
                      <div className="">
                        <p className="card-text note-text text-center ">柯拉琪</p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 ">
                      <img
                        src="/images/artist/Collage.png"
                        className="card img play-button"
                        alt="..."
                      />
                      <div className="">
                        <p className="card-text note-text text-center ">柯拉琪</p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 ">
                      <img
                        src="/images/artist/Collage.png"
                        className="card img play-button"
                        alt="..."
                      />
                      <div className="">
                        <p className="card-text note-text text-center ">柯拉琪</p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 ">
                      <img
                        src="/images/artist/Collage.png"
                        className="card img play-button"
                        alt="..."
                      />
                      <div className="">
                        <p className="card-text note-text text-center ">柯拉琪</p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 ">
                      <img
                        src="/images/artist/Collage.png"
                        className="card img play-button"
                        alt="..."
                      />
                      <div className="">
                        <p className="card-text note-text text-center ">柯拉琪</p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 ">
                      <img
                        src="/images/artist/Collage.png"
                        className="card img play-button"
                        alt="..."
                      />
                      <div className="">
                        <p className="card-text note-text text-center ">柯拉琪</p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 ">
                      <img
                        src="/images/artist/Collage.png"
                        className="card img play-button"
                        alt="..."
                      />
                      <div className="">
                        <p className="card-text note-text text-center ">柯拉琪</p>
                      
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16 ">
                      <img
                        src="/images/artist/Collage.png"
                        className="card img play-button"
                        alt="..."
                      />
                      <div className="">
                        <p className="card-text note-text text-center ">柯拉琪</p>
                      
                      </div>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
            </div>
    </>
  )
}
