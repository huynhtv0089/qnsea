import React from 'react';
import FilterProduct from '../other/FilterProduct';
import Product from '../other/Product';
import Pagination from '../other/Pagination';

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
        this.getPageNumber(1, this.state.category);
    }

    getCategory(category) {
        this.setState({ 
            category: category 
        });
        this.getPageNumber(1, category);
    }

    getPageNumber(pageNum, category) {
        let itemPerPage = this.state.itemPerPage;
        let offset = ((pageNum - 1) * itemPerPage);
        this.setState({
            currentPage: pageNum,
            products: data[category].slice(offset, (offset + itemPerPage)),
            totalPage: Math.ceil(data[category].length / itemPerPage) 
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

const data = {
    'hai-san': [
        { image: '', name: 'Mực rim', path: 'muc-rim', price: '240000', mass: 'kg' },
        { image: '', name: 'Ghẹ rim', path: 'ghe-rim', price: '210000', mass: 'kg' },
        { image: '', name: 'Cá dù muối mặn', path: 'ca-du-muoi-man', price: '135000', mass: 'kg' },
        { image: '', name: 'Cá lao rim', path: 'ca-lao-rim', price: '180000', mass: 'kg' },
        { image: '', name: 'Cá chỉ vàng rim', path: 'ca-chi-vang-rim', price: '180000', mass: 'kg' },
        { image: '', name: 'Cá chỉ vàng', path: 'ca-chi-vang', price: '220000', mass: 'kg' },
        { image: '', name: 'Cá bò rim', path: 'ca-bo-rim', price: '170000', mass: 'kg' },
        { image: '', name: 'Cá bò nướng', path: 'ca-bo-nuong', price: '230000', mass: 'kg' },
        { image: '', name: 'Cá lao', path: 'ca-lao', price: '220000', mass: 'kg' },
        { image: '', name: 'Cá đuối khô', path: 'ca-duoi-kho', price: '230000', mass: 'kg' },
        { image: '', name: 'Cá bò gù lớn', path: 'ca-bo-gu-lon', price: '280000', mass: 'kg' },
        { image: '', name: 'Cá bò gù nhỏ', path: 'ca-bo-gu-nho', price: '210000', mass: 'kg' },
        { image: '', name: 'Cá cơm 1 nắng', path: 'ca-com-1-nang', price: '210000', mass: 'kg' },
        { image: '', name: 'Cá mai', path: 'ca-mai', price: '270000', mass: 'kg' },
        { image: '', name: 'Cá mai tầm mè', path: 'ca-mai-tầm-mè', price: '250000', mass: 'kg' },
        { image: '', name: 'Mực 1 nắng (4 con)', path: 'muc-1-nang', price: '380000', mass: 'kg' },
        { image: '', name: 'Mực xe', path: 'muc-xe', price: '220000', mass: 'kg' },
        { image: '', name: 'Mực tầm 1 tấm', path: 'muc-tam-1-tam', price: '85000', mass: 'tấm' },
        { image: '', name: 'Mực 1kg (14 -> 20 con)', path: 'muc-1kg-14-25', price: '950000', mass: 'kg' },
        { image: '', name: 'Mực 1kg (7 -> 10 con)', path: 'muc-1kg-7-10', price: '1100000', mass: 'kg' },
        { image: '', name: 'Tôm khô (nhỏ)', path: 'tom-kho-nho', price: '500000', mass: 'kg' },
        { image: '', name: 'Tôm khô (trung)', path: 'tom-kho-trung', price: '600000', mass: 'kg' },
        { image: '', name: 'Tôm khô (lớn)', path: 'tom-kho-lon', price: '800000', mass: 'kg' }
    ],
    'nem': [
        { image: '', name: 'Nem que', path: 'nem-que', price: '45000', mass: 'que' },
        { image: '', name: 'Nem chua', path: 'nem-chua', price: '30000', mass: 'chiếc' },
        { image: '', name: 'Nem cay (1 cây 0,5kg)', path: 'nem-cay', price: '90000', mass: 'kg' },
    ],
    'cha': [
        { image: '', name: 'Chả ram tôm lớn (nguyên con)', path: 'cha-ram-tom-lon', price: '180000', mass: 'kg' },
        { image: '', name: 'Chả ram tôm đất (nhỏ)', path: 'cha-ram-tom-dat-nho', price: '160000', mass: 'kg' },
        { image: '', name: 'Chả lụa', path: 'cha-lua', price: '200000', mass: 'kg' },
        { image: '', name: 'Chả bò', path: 'cha-bo', price: '320000', mass: 'kg' },
        { image: '', name: 'Chả chiên (nguyên chất không pha)', path: 'cha-chien', price: '140000', mass: 'kg' },
        { image: '', name: 'Chả cá (Nhồng) - đặt trước 1 ngày', path: 'cha-ca', price: '170000', mass: 'kg' },
        { image: '', name: 'Chả hấp (nguyên chất không pha)', path: 'cha-hap', price: '140000', mass: 'kg' },
        { image: '', name: 'Chả cá cuốn rau răm (Lớn)', path: 'cha-ca-cuon-rau-ram-lon', price: '150000', mass: 'kg' },
        { image: '', name: 'Chả cá cuốn rau răm (nhỏ)', path: 'cha-ca-cuon-rau-ram-nhỏ', price: '90000', mass: 'kg' }
    ],
    'banh-trang': [
        { image: '', name: 'Bánh tráng (mỏng - dùng cuốn chả)', path: 'banh-trang', price: '55000', mass: 'ràng' },
        { image: '', name: 'Bánh tráng nước dừa', path: 'banh-trang-nuoc-dua', price: '65000', mass: 'ràng' },
        { image: '', name: 'Bánh tráng rế dừa', path: 'banh-trang-re-dua', price: '30000', mass: 'bì' }
    ],
    'nuoc-mam': [
        { image: '', name: 'Nước nắm ngon', path: 'nuoc-man-ngon', price: '60000', mass: 'lít' },
        { image: '', name: 'Mắm mực', path: 'mam-muc', price: '40000', mass: 'hủ' },
        { image: '', name: 'Mắm ruột', path: 'mam-ruot', price: '40000', mass: 'hủ' },
        { image: '', name: 'Mắm ruốc', path: 'mam-ruoc', price: '40000', mass: 'hủ' },
        { image: '', name: 'Mắm nêm', path: 'mam-nem', price: '40000', mass: 'hủ' },
        { image: '', name: 'Mắm cá thu xay', path: 'mam-ca-thu-xay', price: '85000', mass: 'hủ' },
        { image: '', name: 'Mắm cá thu lát', path: 'mam-ca-thu-lat', price: '75000', mass: 'hủ' }
    ],
    'ruou': [
        { image: '', name: 'Rượu gạo', path: 'ruou-gao', price: '35000', mass: 'lit' },
        { image: '', name: 'Rượu nếp', path: 'ruou-nep', price: '45000', mass: 'lit' },
        { image: '', name: 'Rượu đậu xanh', path: 'ruou-dau-xanh', price: '55000', mass: 'lit' }
    ],
    'do-an-kho': [
        { image: '', name: 'Bánh ít lá gai', path: 'banh-it-la-gai', price: '3000', mass: 'cái' },
        { image: '', name: 'Bánh hồng', path: 'banh-hong', price: '80000', mass: 'kg' },
        { image: '', name: 'Khô gà lá chanh', path: 'kho-ga-la-chanh', price: '185000', mass: 'kg' },
        { image: '', name: 'Tré', path: 'tre', price: '35000', mass: 'cây' },
        { image: '', name: 'Rong biển khô', path: 'rong-bien-kho', price: '370000', mass: 'kg' }
    ]
};

export default Products