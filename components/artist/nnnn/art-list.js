import { useEffect } from 'react'

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

  return (
    <>
            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/artist/Collage.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body ">
                        <p className="card-text note-text">新品上市</p>
                        <p className="card-text">Nike Air Force 1 Shadow</p>
                        <p className="card-text type-text">女鞋</p>
                        <p className="card-text type-text mb-2">3 種顏色</p>
                        <span className="h-currency bold h-now">$1,990</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/artist/Collage.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text">新品上市</p>
                        <p className="card-text">Nike Air Force 1 Shadow</p>
                        <p className="card-text type-text">女鞋</p>
                        <p className="card-text type-text mb-2">3 種顏色</p>
                        <span className="h-currency bold h-now">$1,990</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/artist/Collage.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text">新品上市</p>
                        <p className="card-text">Nike Air Force 1 Shadow</p>
                        <p className="card-text type-text">女鞋</p>
                        <p className="card-text type-text mb-2">3 種顏色</p>
                        <span className="h-currency bold h-now">$1,990</span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/artist/Collage.png"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text">新品上市</p>
                        <p className="card-text">Nike Air Force 1 Shadow</p>
                        <p className="card-text type-text">女鞋</p>
                        <p className="card-text type-text mb-2">3 種顏色</p>
                        <span className="h-currency bold h-now">$1,990</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
    </>
  )
}
