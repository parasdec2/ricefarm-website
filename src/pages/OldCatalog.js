import styles from "./css/Catalog.module.css";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";

function Catalog() {
  const [selected, setSelected] = useState(new Set());
  const products = [
    { a: "123", category: "A" },
    { a: "123", category: "B" },
    { a: "123", category: "C" },
    { a: "123", category: "D" },
    { a: "123", category: "E" },
    { a: "123", category: "F" },
  ];
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filter = (f) => {
    var filteredProduct = [];
    f.forEach((value) => {
      console.log(value);
      var product = products.filter((e) => e.category === value);
      filteredProduct.push(product[0]);
    });
    console.log(filteredProduct);
    setFilteredProducts(filteredProduct);
  };

  useEffect(() => {
    const filters = new Set();
    filters.add("A");
    filters.add("B");
    filters.add("C");
    filters.add("D");
    filters.add("E");
    filters.add("F");
    setSelected(filters);
  }, []);

  const updateSelected = (category) => {
    var f = new Set();
    selected.forEach((value) => f.add(value));
    if (f.has(category)) {
      f.delete(category);
    } else {
      f.add(category);
    }
    setSelected(f);
    filter(f);
  };
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>Products</h1>
            <h3>Varities</h3>
            <div>
              {/* <li> */}
              <ul onClick={() => updateSelected("A")}>A</ul>
              <ul onClick={() => updateSelected("B")}>B</ul>
              <ul onClick={() => updateSelected("C")}>C</ul>
              <ul onClick={() => updateSelected("D")}>D</ul>
              <ul onClick={() => updateSelected("E")}>E</ul>
              <ul onClick={() => updateSelected("F")}>F</ul>

              {/* </li> */}
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>Catalog Page</h1>
            {/* <Collapse key={1}>
              <h1>This is a collapse</h1>
              <p>Hello world!</p>
            </Collapse>
            <Collapse collapsed key={2}>
              <h1>This is a collapse</h1>
              <p>Hello world!</p>
            </Collapse>
            <Collapse collapsed key={3}>
              <h1>This is a collapse</h1>
              <p>Hello world!</p>
            </Collapse>
            <Collapse collapsed key={4}>
              <h1>This is a collapse</h1>
              <p>Hello world!</p>
            </Collapse> */}
            {/* {Object.entries(filteredProducts).map(
              ([key, value]) => (
                <p>{value}</p>
              )
              // Pretty straightforward - use key for the key and value for the value.
              // Just to clarify: unlike object destructuring, the parameter names don't matter here.
            )} */}
            {filteredProducts.map((item, index) => (
              <p>{item.category}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;

// const Collapse = ({ collapsed, children, key }) => {
//   const [isCollapsed, setIsCollapsed] = useState(collapsed);

//   return (
//     <div className="abc">
//       <button
//         className="collapse-button"
//         onClick={() => setIsCollapsed(!isCollapsed)}
//       >
//         {isCollapsed ? "Show" : "Hide"} content
//       </button>
//       <div
//         className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
//         aria-expanded={isCollapsed}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };
