import axios from 'axios';
import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
function Statistics() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get("/Api.json");
      setProducts(res.data);
    };
    fetchApi();
  }, []);
  return (
    <>
    <div className="h-screen pt-20">
      <div className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={products}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product_id" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
    </>
  )
}

export default Statistics