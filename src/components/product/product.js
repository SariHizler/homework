import './product.css';

function Product(props) {
    const { product, setCurrentProduct } = props
    return (
        <div className="product" onClick={() => { setCurrentProduct(product) }}>
            <img className="productImg" src={product.thumbnailImage} />
            <div className="productNameAndDscription">
                <div className="productName">
                    <h3>{product.name}</h3>
                </div>
                <div className="productDescription">
                    <p> {product.description}</p>
                </div>
            </div>

        </div>

    );
}

export default Product;
