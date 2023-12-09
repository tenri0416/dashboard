'use client'
import React, { useState, useEffect } from 'react';

const MyPage = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(30);
  const [started, setStarted] = useState(false);

  const fetchImage = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/comedyimages', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }

      });
      const data = await response.json();
      console.log(data);
  
      setImage(data);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    if (timer === 0) {
      fetchImage();
      setTimer(30);
    }

    return () => clearInterval(interval);
  }, [timer, started]);

  useEffect(() => {
    // 画像が変わった時の処理を追加
  }, [image]);

  const handleStart = () => {
    setStarted(true);
    fetchImage();
  };
  const imageUrl = 'ok.png';

  const handleSend = () => {
    // 送信ボタンがクリックされた時の処理を追加
  };

  return (
    <div>
      {!started && <button onClick={handleStart}>Start</button>}
      {started && (
        <>
          <img src={image} alt="Image" />
          <img src='/public/ok.png' alt="Image" />
          <img src={'/img/k.png'} alt="Image" />
          <img src="http://localhost:5173/public/ok.png" alt="Image" />
          <p>{message}</p>
          <p>{`時間内にツッこめ: ${timer}秒`}</p>
          <button onClick={handleSend}>送信</button>
        </>
      )}
    </div>
  );
};

export default MyPage;
