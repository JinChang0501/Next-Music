import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { GET_PRODUCTS } from '@/configs/api-path';
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs';
import styles from '@/styles/product/product.module.scss';
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack';
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple';
import Link from 'next/link';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import toast, { Toaster } from 'react-hot-toast';
import { useTotal } from '@/hooks/product/use-Total';

export default function Detail() {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const router = useRouter();
  const [cartData, setCartData] = useState([])
  const { id } = router.query;
  const pid = parseInt(id);
  const topRef = useRef(null);
  const { totalQty, setTotalQty } = useTotal(); // 使用 TotalProvider 提供的 totalQty 和 setTotalQty

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '周邊商城', href: '/product' },
    { label: '商品資訊', href: `/product/${router.query.pid}` },
  ];

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [router]);

  useEffect(() => {
    if (router.isReady) {
      fetch(`${GET_PRODUCTS}`, {
        credentials: 'include',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch');
          }
          return res.json();
        })
        .then((data) => {
          const product = data.find((p) => p.id === Number(pid));
          if (product) {
            setProduct(product);
          } else {
            console.warn(`Product with id ${pid} not found`);
          }
          setProducts(data);
        })
        .catch((error) => {
          console.error('Error fetching products', error);
        });
    }
  }, [router.isReady, router.query.pid]);

  let cart = [];

  const checkCart = () => {
    const cartData = localStorage.getItem('makin-cart');
    setCartData(cartData);
  };

 // addtocart

  useEffect(() => {
    checkCart();
  }, [router]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const recommendData = products.filter((r) => r.id !== pid);
  const random4Recommend = recommendData
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-6">
          <div
            className={`position-sticky ${styles['w-456']} ${styles['ml-136']}`}
          >
            <Swiper
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className={`mySwiper2`}
            >
              <div>
                <img
                  src={`/images/product/list/${product.picture}`}
                  className={`${styles['pic']}`}
                />
              </div>
              <div>
                <img
                  src={`/images/product/list/${product.picture2}`}
                  className={`${styles['pic']}`}
                />
              </div>
              <div>
                <img
                  src={`/images/product/list/${product.picture3}`}
                  className={`${styles['pic']}`}
                />
              </div>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              className={`mySwiper`}
            >
              <div>
                <img
                  src={`/images/product/list/${product.picture}`}
                  className={`${styles['pic2']}`}
                />
              </div>
              <div>
                <img
                  src={`/images/product/list/${product.picture2}`}
                  className={`${styles['pic2']}`}
                />
              </div>
              <div>
                <img
                  src={`/images/product/list/${product.picture3}`}
                  className={`${styles['pic2']}`}
                />
              </div>
            </Swiper>
          </div>
        </div>
        <div className="col-sm-3">
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>
            {product.name}
          </p>
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>
            {product.activity}
          </p>
          <p className={`text-purple2 chb-h5 ${styles['mt-80']}`}>
            NT$ {product.price}
          </p>
          <p className={`text-purple2 chb-h5 ${styles['mt-40']} ${styles['mb-60']}`}>
            尺寸: F
          </p>
          <div className={`row row-cols-md-2 ${styles['space-between']}`}>
            <DesktopBlackNoIconBtnBlack text="加入購物車" onClick={addToCart} />
            {/* <Link href={`/cart/payment`}><DesktopBlackNoIconBtnPurple text="立即購買" /></Link> */}
          </div>
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']} ${styles['borderPurple3']}`}>
            商品介紹
          </p>
          <p className={`col-sm-6 text-purple3 chb-h6 ${styles['mt-40']}`}>
            {product.intro}
          </p>
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']} ${styles['borderPurple3']}`}>
            付款方式
          </p>
          <p className={`text-purple3 chb-h6 ${styles['mt-40']}`}>
            目前提供付款方式有3種：
          </p>
          <p className={`text-purple3 chb-h6 `}>
            1.『綠界』付款，宅配到府（限台灣本島）
          </p>
          <p className={`text-purple3 chb-h6 `}>
            2.『LINE PAY』付款，宅配到府（限台灣本島）
          </p>
          <p className={`text-purple3 chb-h6 `}>3.『7-11超商取貨付款』</p>
          <p className={`text-purple3 chb-h6 `}>
            ※ 配合的宅配公司為：黑貓宅急便
          </p>
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']}`}>推薦商品</p>
          <div
            className={`row row-cols-1 row-cols-md-4 ${styles['mt-40']} ${styles['mb-100']}`}
          >
            {random4Recommend.map((v) => (
              <div
                key={v.id}
                className={`card ${styles['card']} ${styles['mt-28']}`}
              >
                <img
                  src={`/images/product/list/${v.picture}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className={`card-body ${styles['bg-bk-01']}`}>
                  <p className={`card-text ${styles['chb-h5']}`}>{v.name}</p>
                  <p className={`card-text ${styles['chb-h6']}`}>
                    NT$ {v.price}
                  </p>
                  <Link href={`/product/${v.id}`}>
                    <DesktopBlackNoIconBtnPurple text="查看商品" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
      <div ref={topRef}></div>
    </>
  );
}

