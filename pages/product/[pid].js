import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GET_PRODUCTS } from '@/configs/api-path';
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs';
import styles from '@/styles/product/product.module.scss';
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack';
import Link from 'next/link';
import SwiperBottom from '@/components/product/swiper-bottom';
import SwiperTop from '@/components/product/swiper-top';
import CardProduct2 from '@/components/product/card-product2';

export default function Detail() {
  const [product, setProduct] = useState(null);
  const router = useRouter();

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
          const { pid } = router.query;
          const product = data.find((p) => p.id === Number(pid));
          if (product) {
            setProduct(product);
          } else {
            console.warn(`Product with id ${pid} not found`);
          }
        })
        .catch((error) => {
          console.error('Error fetching products', error);
        });
    }
  }, [router.isReady, router.query.pid]);

  const addToCart = () => {
    if (!product) return; // Ensure product data is available

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // You can adjust this based on user input or default
    };

    let cart = [];
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      cart = JSON.parse(cartData);
    }

    // Check if the item already exists in the cart
    const existingItem = cart.find((item) => item.id === cartItem.id);
    if (existingItem) {
      // Update quantity if item already exists
      existingItem.quantity += 1;
    } else {
      // Add new item to cart
      cart.push(cartItem);
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, you can provide feedback to the user that the product has been added to cart
    alert(`本商品已成功加入購物車`);
  };

  if (!product) {
    return <p>Loading...</p>; // Placeholder for when product is loading
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-6">
          <div className={`position-sticky ${styles['w-456']} ${styles['ml-136']}`}>
            <SwiperTop />
            <SwiperBottom />
          </div>
        </div>
        <div className="col-sm-3">
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>{product.name}</p>
          <p className={`text-white chb-h4 ${styles['mt-80']}`}>{product.activity}</p>
          <p className={`text-purple2 chb-h5 ${styles['mt-80']}`}>NT$ {product.price}</p>
          <p className={`text-purple2 chb-h5 ${styles['mt-40']} ${styles['mb-60']}`}>尺寸: F</p>
          <div className={`row row-cols-md-2 ${styles['space-between']}`}>
            <DesktopBlackNoIconBtnBlack text="加入購物車" onClick={addToCart} />
            {/* <Link href={`/cart/payment`}><DesktopBlackNoIconBtnPurple text="立即購買" /></Link> */}
          </div>
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
          <p className={`text-purple1 chb-h4 ${styles['mt-80']} ${styles['borderPurple3']}`}>商品介紹</p>
          <p className={`col-sm-6 text-purple3 chb-h6 ${styles['mt-40']}`}>{product.intro}</p>
        </div>
      </div>
      <div className={`row ${styles['mx-160']} ${styles['mt-80']}`}>
        <div className="col-sm-12">
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
          <p className={`text-purple1 chb-h4 ${styles['mt-80']}`}>推薦商品</p>
          <div className={`row row-cols-1 row-cols-md-4 ${styles['mt-40']} ${styles['mb-100']}`}>
            <CardProduct2 />
          </div>
        </div>
      </div>
    </>
  );
}
