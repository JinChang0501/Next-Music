import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GET_PRODUCTS } from '@/configs/api-path';
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs';
import styles from '@/styles/product/product.module.scss';
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack';
import SwiperBottom from '@/components/product/swiper-bottom';
import SwiperTop from '@/components/product/swiper-top';
import CardProduct2 from '@/components/product/card-product2';

export default function Detail() {
  const [products, setProducts] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const router = useRouter();

  const addToCart = (pid) => {
    const cartKey = "product-cart";
    const item = products.find((p) => p.id === pid);
    if (!item) return; 
    
    const oriData = localStorage.getItem(cartKey);
    let cartData = [];
    try {
      cartData = JSON.parse(oriData);
      if (!Array.isArray(cartData)) {
        cartData = [];
      }
    } catch (ex) {
      console.error('Error parsing cart data', ex);
    }
    const cartItem = cartData.find((p) => p.id === pid);
    if (cartItem) return; 
    const { id, picture, activity, name, price } = item;
    cartData.push({ id, picture, activity, name, price, quantity: 1 });
    localStorage.setItem(cartKey, JSON.stringify(cartData));
  };

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '周邊商城', href: '/product' },
    { label: '商品資訊', href: `/product/${router.query.pid}` }, 
  ];

  useEffect(() => {
    if (router.isReady) {
      fetch(`${GET_PRODUCTS}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch');
          }
          return res.json();
        })
        .then((data) => {
          console.log('server data', data);
          const { pid } = router.query;
          if (pid) {
            const product = data.find((p) => p.id === Number(pid));
            if (product) {
              setProducts(product);
            } else {
              console.warn(`Product with id ${pid} not found`);
            }
          } else {
            console.warn('pid parameter not found in router.query');
          }

          // Example: Set recommended products (replace with actual logic)
          const recommended = data.filter((p) => p.id !== products.id);
          setRecommendedProducts(recommended.slice(0, 4)); // Adjust number as needed
        })
        .catch((error) => {
          console.error('Error fetching products', error);
        });
    }
  }, [router.isReady, router.query.pid]);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-6">
          <div className={`position-sticky ${styles['w-456']} ${styles['ml-136']}`}>
            {/* Assuming SwiperTop and SwiperBottom components render product images */}
            <SwiperTop />
            <SwiperBottom />
          </div>
        </div>
        <div className="col-sm-3">
          {/* Render product details */}
          {products && (
            <>
              <p className={`text-white chb-h4 ${styles['mt-80']}`}>{products.name}</p>
              <p className={`text-white chb-h4 ${styles['mt-80']}`}>{products.activity}</p>
              <p className={`text-purple2 chb-h5 ${styles['mt-80']}`}>NT$ {products.price}</p>
              <p className={`text-purple2 chb-h5 ${styles['mt-40']} ${styles['mb-60']}`}>尺寸: F</p>
              <div className={`row row-cols-md-2 ${styles['space-between']}`}>
                <DesktopBlackNoIconBtnBlack text="加入購物車" onClick={() => addToCart(products.id)} />
                {/* <Link href={`/cart/payment`}><DesktopBlackNoIconBtnPurple text="立即購買" /></Link> */}
              </div>
            </>
          )}
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          {/* Render product introduction */}
          {products && (
            <>
              <p className={`text-purple1 chb-h4 ${styles['mt-80']} ${styles['borderPurple3']}`}>商品介紹</p>
              <p className={`text-purple3 chb-h6 ${styles['mt-40']}`}>{products.intro}</p>
            </>
          )}
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          {/* Render payment methods */}
          <p className={`text-purple1 chb-h4 ${styles['mt-80']} ${styles['borderPurple3']}`}>付款方式</p>
          <p className={`text-purple3 chb-h6 ${styles['mt-40']}`}>目前提供付款方式有3種：</p>
          <p className={`text-purple3 chb-h6 `}>1.『綠界』付款，宅配到府（限台灣本島）</p>
          <p className={`text-purple3 chb-h6 `}>2.『LINE PAY』付款，宅配到府（限台灣本島）</p>
          <p className={`text-purple3 chb-h6 `}>3.『超商取貨付款』</p>
          <p className={`text-purple3 chb-h6 `}>※ 配合的宅配公司為：黑貓宅急便</p>
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          {/* Render recommended products */}
          <p className={`text-purple1 chb-h4 ${styles['mt-80']}`}>推薦商品</p>
          <div className={`row row-cols-1 row-cols-md-4 ${styles['mt-40']} ${styles['mb-100']}`}>
            {recommendedProducts.map((product) => (
              <CardProduct2 key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
