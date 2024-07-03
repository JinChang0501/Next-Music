import * as React from "react";

export default function MyComponent() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <span className="color-rgba">AUG. </span>2024
        </div>
        <div className="div-3">
          <div className="div-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8206f7ff284758a0d4a57d32177bc8c29b67b13afac23c2a296b8fe50370cd66?"
              className="img"
            />
          </div>
          <div className="div-5">今天</div>
          <div className="div-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/edd9255f672991e5afc82ea98dc966209da619035a7ebc334afe3ef380976063?"
              className="img"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
      .color-rgba{
        color: rgba(255, 255, 255, 1);
      }
        .div {
          justify-content: space-between;
          border-color: rgba(219, 215, 255, 1);
          border-style: solid;
          border-bottom-width: 1px;
          display: flex;
          width: 100%;
          gap: 20px;
          padding: 32px 60px;
        }
        @media (max-width: 991px) {
          .div {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .div-2 {
          color: var(--Black-0, #fff);
          letter-spacing: 1.44px;
          font: 400 48px Alata, sans-serif;
        }
        @media (max-width: 991px) {
          .div-2 {
            font-size: 40px;
          }
        }
        .div-3 {
          justify-content: center;
          display: flex;
          gap: 12px;
          margin: auto 0;
        }
        .div-4 {
          justify-content: center;
          align-items: center;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          padding: 6px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 48px;
        }
        .div-5 {
          justify-content: center;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 1px;
          color: var(--Black-0, #fff);
          white-space: nowrap;
          text-align: center;
          letter-spacing: 2px;
          padding: 18px 42px;
          font: 600 20px Roboto, sans-serif;
        }
        @media (max-width: 991px) {
          .div-5 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-6 {
          justify-content: center;
          align-items: center;
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          padding: 6px;
        }
      `}</style>
    </>
  );
}

