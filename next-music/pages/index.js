import { products } from '@/data/products'
export default function Index() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>author</th>
            <th>bookname</th>
            <th>category_sid</th>
            <th>book_id</th>
            <th>publish_date</th>
            <th>pages</th>
            <th>price</th>
            <th>isbn</th>
            <th>on_sale</th>
            <th>introduction</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.author}</td>
                <td>{v.bookname}</td>
                <td>{v.category_sid}</td>
                <td>{v.book_id}</td>
                <td>{v.publish_date}</td>
                <td>{v.pages}</td>
                <td>{v.price}</td>
                <td>{v.isbn}</td>
                <td>{v.on_sale}</td>
                <td>{v.introduction}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
