import { products } from '@/data/products'
export default function Index() {
  return (
    <>
      <div
        style={{ height: '100px' }}
        className="w-100 bg-black5 text-warning d-flex justify-content-center align-items-center "
      >
        測試 container : 桌機版 1600px ; 手機版 334px
      </div>
      <table className="table table-bordered table-striped table-hover mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>bookname</th>
            <th>publish_date</th>
            <th>pages</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.bookname}</td>
                <td>{v.publish_date}</td>
                <td>{v.pages}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
