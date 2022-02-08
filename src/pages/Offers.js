import { useState } from 'react';

export default function Offers() {
  const [items] = useState([
    { title: 'WebRTC', price: 49.9 },
    { title: 'Laravel8.x', price: 39.9 },
    { title: '大前端开发工程师直播班', price: 1999 },
  ]);

  return (
    <div>
      <h3>最新课程</h3>
      <div className='offers'>
        {items.map((item) => (
          <div key={item.title}>
            <img src='https://via.placeholder.com/350x200' alt='product' />
            <h4>{item.title}</h4>
            <p>¥{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
