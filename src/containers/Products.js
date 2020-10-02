import React from 'react';
import { connect } from 'react-redux';
import { addListProducts } from '../actions';
import FilterProduct from '../components/other/FilterProduct';
import Product from '../components/other/Product';
import Pagination from '../components/other/Pagination';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            category: 'hai-san',
            itemPerPage: 9,
            currentPage: 1,
            totalPage: 0
        }
        this.getPageNumber = this.getPageNumber.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(
                (data) => {
                    this.props.dispatch( addListProducts(data) );
                    this.getPageNumber(1, this.state.category, data);
                },
                (error) => console.log('error: ' + error)
            );
    }

    getCategory(category) {
        this.setState({ 
            category: category 
        });
        this.getPageNumber(1, category);
    }

    getPageNumber(pageNum, category, dataProducts) {
        if (typeof dataProducts === 'undefined') {
            dataProducts = this.props.dataProducts;
        }

        if (Object.keys(dataProducts).length === 0) {
            return;
        }

        let itemPerPage = this.state.itemPerPage;
        let offset = ((pageNum - 1) * itemPerPage);
        this.setState({
            currentPage: pageNum,
            products: dataProducts[category].slice(offset, (offset + itemPerPage)),
            totalPage: Math.ceil(dataProducts[category].length / itemPerPage) 
        });
    }
    
    render() {
        return (
            <>
                <hr className="featurette-divider" id="do-an-dac-san" />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="featurette-heading text-center">Đồ ăn đặc sản, hải sản Bình Định</h2>
                        </div>

                        <FilterProduct toggleCategory={this.getCategory.bind(this)} category={this.state.category} />
                        
                        <div className="col-md-9 blog-main">
                            <div className="row">
                                {this.state.products.map((product, index) => (
                                    <Product key={index} {...product} />
                                ))}
                            </div>
                            
                            <Pagination pageClick={this.getPageNumber} 
                                        category={this.state.category}
                                        currentPage={this.state.currentPage}
                                        totalPage={this.state.totalPage} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    dataProducts: state.products
})
export default connect(mapStateToProps)(Products)