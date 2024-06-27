import React from 'react'

document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');
  
    // 創建一個 card container
    const card = document.createElement('div');
    card.className = 'card';
  
    // 創建 image 元素
    const img = document.createElement('img');
    img.src = '.'; // replace with your image path
    img.alt = 'Card Image';
  
    // 播放按鈕
    const playButton = document.createElement('div');
    playButton.className = 'play-button';
  
    // 將圖像和播放按鈕放到卡片上
    card.appendChild(img);
    card.appendChild(playButton);
  
    // 將卡片附加到根目錄
    root.appendChild(card);
  
    // 為播放按鈕新增事件監聽器
    playButton.addEventListener('click', function() {
      alert('Play button clicked!');
    });
  
    // 加上樣式
    const styles = `
      .card {
        position: relative;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
      }
      .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .play-button {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .play-button:before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 15px solid white;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = '@/styles/artist/artist-card.scss';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  });
  