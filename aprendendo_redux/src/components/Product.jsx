
import './Product.css'

const Product = () => {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


      <div className="product">
          <img src="#" alt="eae" />
          <div className="infoCart">
            <h1>Nome</h1>
            <p>preço</p>
            <div className="simbols">
              <span className="more material-symbols-outlined">add</span>
              <span className="less material-symbols-outlined">remove</span>
            </div>
          </div>
          <span className="close less material-symbols-outlined">close</span>
      </div>
    </>
  )
}

export default Product