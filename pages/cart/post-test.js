const handleSubmit = async () => {
  try {
    // 假設有一個後端 API 的 URL
    const apiUrl = 'https://example.com/api/submitCart';

    // 使用 fetch 或 axios 等方法發送 POST 請求
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }), // 將資料轉換為 JSON 格式
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // 處理後端回應，例如顯示成功訊息
    const responseData = await response.json();
    console.log('Server response:', responseData);
  } catch (error) {
    console.error('Error submitting cart:', error);
    // 處理錯誤，例如顯示錯誤訊息給使用者
  }
};


// 在您的表單或按鈕點擊事件中，呼叫 handleSubmit 函式來觸發資料提交：
<button onClick={handleSubmit}>提交購物車</button>
