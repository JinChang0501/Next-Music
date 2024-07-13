import Link from 'next/link'

export default function Breadcrumbs({
  breadcrumbs,
  className = 'music-container',
}) {
  return (
    <>
      <div className={className} style={{ userSelect: 'none' }}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0 p-0">
            {breadcrumbs.map((breadItem, index) => {
              if (index === breadcrumbs.length - 1) {
                return (
                  <li
                    key={index}
                    className="breadcrumb-item active p-1"
                    aria-current="page"
                  >
                    {breadItem.label}
                  </li>
                )
              } else {
                return (
                  <li key={index} className="breadcrumb-item p-1">
                    <Link style={{ color: '#958cea' }} href={breadItem.href}>
                      {breadItem.label}
                    </Link>
                  </li>
                )
              }
            })}
          </ol>
        </nav>
      </div>
    </>
  )
}
