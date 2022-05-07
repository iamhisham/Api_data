import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
var a;
function Api() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState([]);
  const [add, setAdd] = useState([]);
  const getProductData = async () => {
    try {
      const data1 = await axios.get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      // https://jsonmock.hackerrank.com/api/moviesdata/sea                  """"doesn't work""""

      console.log(data1.data);

      setProduct(data1.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const kite = (e) => {
    setSearch(e.target.value);
  };

  const lite = (e) => {
    setAdd(e.target.value);
  };

  const clicked = (e) => {
    alert(add);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search, Color "
        onChange={kite}
        className="m-lg-3"
      />

      <form onSubmit={clicked}>
        <input type="text" onChange={lite} placeholder="add" />
        <input type="submit" />
      </form>

      <table align="center">
        <tr>
          <th>product</th>
          <th>price</th>
        </tr>

        {product
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (item.name.includes(search)) {
              return item;
            }
          })
          .map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Api;
