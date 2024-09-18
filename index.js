const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const products = [
  {
    id: 123,
    name: 'orange',
    price: '2',
    image: 'https://cdn.pixabay.com/photo/2019/11/19/13/10/fruit-4637398_640.jpg'
  },
  {
    id: 131,
    name: 'Milk',
    price: '3',
    image: 'https://cdn.pixabay.com/photo/2019/07/25/20/55/milk-4363421_640.jpg'
  },
  {
    id: 132,
    name: 'Ice Cream',
    price: '4',
    image: 'https://cdn.pixabay.com/photo/2024/04/21/02/38/ai-generated-8709728_640.png'
  },
  {
    id: 133,
    name: 'Salmon',
    price: '10',
    image: 'https://cdn.pixabay.com/photo/2021/01/05/23/18/salmon-5892659_960_720.jpg'
  },
  {
    id: 134,
    name: 'Watermelon',
    price: '2',
    image: 'https://cdn.pixabay.com/photo/2015/06/19/16/48/watermelon-815072_640.jpg'
  }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
