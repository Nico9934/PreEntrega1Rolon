import React from "react";

const MenuCartWidget = ({cartItems,removeProduct}) => {

  return (
    <>
      <div className="cartmenu">
        <div className="container">
             <div className="cartmenu__container">
            <h3 className="cartmenu__title">Tus productos </h3>
            <div className="cartmenu__products">
    
                {
                    cartItems.map( product => (
                        <>
                            <div className="cartmenu__product">
                                <img src={product.img}/>
                                <h3>{product.name} por {product.kg} KG</h3>
                                <p>{product.cantidad} x ${product.price}</p>
                                <p></p>
                                <div className="cartmenu__buttons">
                                <button
                                    onClick={ e => removeProduct(product)}
                                >
                                    X
                                </button>
                            </div>
                            </div>
                            
                        </>
                    ))
                }

            
            </div>
            <div className="cartmenu__total">
                <p>Subtotal: <span>$5000</span></p>
                <button>Finalizar compra</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCartWidget;
