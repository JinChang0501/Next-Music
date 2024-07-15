import Link from 'next/link'

export default function Breadcrumbs({
  breadcrumbs,
  className = 'container',
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
                    className="breadcrumb-item active p-2"
                    aria-current="page"
                  >
                    {breadItem.label}
                  </li>
                )
              } else {
                return (
                  <li key={index} className="breadcrumb-item ps-0 p-2">
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
