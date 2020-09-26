import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log(123);
        this.state = {
            detail: data[this.props.match.params.path],
            otherProducts: []
        }
        this.renderIndicatorPics = this.renderIndicatorPics.bind(this);
        this.listOtherProduct = this.listOtherProduct.bind(this);
    }

    static getDerivedStateFromProps(newProps, oldState) {
        if(newProps.match.params.path !== oldState.detail.path) {
            window.scrollTo(0, 0);
            return {
                detail: data[newProps.match.params.path]
            }
        }
        return oldState;
    }

    componentDidMount() {
        //Go to the top page
        window.scrollTo(0, 0);
    }

    renderIndicatorPics() {
        console.log(999777555);
        let indicators = document.querySelectorAll(".carousel .carousel-indicators li");
        console.log(indicators.length);
        for (let i = 0; i < indicators.length; i++) {
            console.log(2);
            if (i === 0) {
                indicators[i].style.backgroundImage = 'url("/assets/img/girl-xinh-1.jpg")';
            } else if (i === 2) {
                indicators[i].style.backgroundImage = 'url("/assets/img/girl-xinh-2.jpg")';
            } else if (i === 3) {
                indicators[i].style.backgroundImage = 'url("/assets/img/girl-xinh-3.jpg")';
            } else if (i === 4) {
                indicators[i].style.backgroundImage = 'url("/assets/img/girl-xinh-1.jpg")';
            } else if (i === 5) {
                indicators[i].style.backgroundImage = 'url("/assets/img/girl-xinh-2.jpg")';
            } else if (i === 6) {
                indicators[i].style.backgroundImage = 'url("/assets/img/girl-xinh-3.jpg")';
            }
        }
    }

    listOtherProduct() {
        let keySet = new Set();
        for (let i = 0; i < 100; i++) {
            keySet.add( Object.keys(data)[Math.floor(Math.random() * Object.keys(data).length)] );
            if (keySet.size === 4) {
                return [...keySet].map(key => data[key]);
            }
        }
        return [];
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 blog-sidebar">
                        <Carousel className="mb-1 product-carousel d-flex flex-column-reverse">
                            <Carousel.Item>
                                <img src="/assets/img/girl-xinh-1.jpg" className="d-block w-100" alt="Girl xinh 1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/assets/img/girl-xinh-2.jpg" className="d-block w-100" alt="Girl xinh 2" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/assets/img/girl-xinh-3.jpg" className="d-block w-100" alt="Girl xinh 3" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/assets/img/girl-xinh-1.jpg" className="d-block w-100" alt="Girl xinh 1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/assets/img/girl-xinh-2.jpg" className="d-block w-100" alt="Girl xinh 2" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/assets/img/girl-xinh-3.jpg" className="d-block w-100" alt="Girl xinh 3" />
                            </Carousel.Item>
                        </Carousel>
                        {this.renderIndicatorPics()}
                    </div>
                    
                    <div className="col-md-6 blog-main">
                        <h1 className="mb-4">{this.state.detail.name}</h1>
                        <p className="mb-4 text-muted" dangerouslySetInnerHTML={{__html: this.state.detail.info}}></p>
                    </div>
                    
                    <div className="col-md-12 border-top">
                        {/*<div className="blog-post mt-3" dangerouslySetInnerHTML={{__html: this.state.detail.desc}}></div>*/}
                        <div className="blog-post mt-3">
                                <h2 className="blog-post-title">Sample blog post</h2>
                                <p className="blog-post-meta">January 1, 2014 by <Link to="#">Mark</Link></p>

                                <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                                <p>Cum sociis natoque penatibus et magnis <Link to="#">dis parturient montes</Link>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.	</p>
                                <blockquote>
                                    <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                </blockquote>
                                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                <h2>Heading</h2>
                                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <h3>Sub-heading</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <pre><code>Example code block</code></pre>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                                <h3>Sub-heading</h3>
                                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                <ul>
                                    <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                    <li>Donec id elit non mi porta gravida at eget metus.</li>
                                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                                </ul>
                                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                                <ol>
                                    <li>Vestibulum id ligula porta felis euismod semper.</li>
                                    <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                                    <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                                </ol>
                                <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
                            </div>
                        </div>
                    
                    <div className="col-md-12 mt-5">
                        <h3 className="pb-4 mb-4 font-italic border-bottom">
                            The other product
                        </h3>
                        <div className="row">
                            {this.listOtherProduct().map((item, index) => (
                                <div className="col-md-3" key={index}>
                                    <div className="card mb-4 shadow-sm">
                                        <img src="/assets/img/girl-xinh-7.jpg" className="d-block w-100" alt="Girl xinh 7" />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <Link className="btn btn-link font-product stretched-link text-primary" to={'/products/' + item.path}>
                                                    {item.name}
                                                </Link>
                                            </h5>
                                            <p className="card-text">
                                                Giá: {new Intl.NumberFormat().format(item.price)}đ / {item.mass}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const data = {
    "muc-rim": { 
        name: 'Mực rim', path: 'muc-rim', price: '240000', mass: 'kg', info: 'muc-rim', desc: ''
    },
    "ghe-rim": { 
        name: 'Ghẹ rim', path: 'ghe-rim', price: '210000', mass: 'kg', info: 'ghe-rim', desc: ''
    },
    "ca-du-muoi-man": { 
        name: 'Cá dù muối mặn', path: 'ca-du-muoi-man', price: '135000', mass: 'kg', info: 'ca-du-muoi-man', desc: ''
    },
    "ca-lao-rim": { 
        name: 'Cá lao rim', path: 'ca-lao-rim', price: '180000', mass: 'kg', info: 'ca-lao-rim', desc: ''
    },
    "ca-chi-vang-rim": { 
        name: 'Cá chỉ vàng rim', path: 'ca-chi-vang-rim', price: '180000', mass: 'kg', info: 'ca-chi-vang-rim', desc: ''
    },
    "ca-chi-vang": { 
        name: 'Cá chỉ vàng', path: 'ca-chi-vang', price: '220000', mass: 'kg', info: 'ca-chi-vang', desc: ''
    },
    "ca-bo-rim": { 
        name: 'Cá bò rim', path: 'ca-bo-rim', price: '170000', mass: 'kg', info: 'ca-bo-rim', desc: ''
    },
    "ca-bo-nuong": { 
        name: 'Cá bò nướng', path: 'ca-bo-nuong', price: '230000', mass: 'kg', info: 'ca-bo-nuong', desc: ''
    },
    "ca-lao": { 
        name: 'Cá lao', path: 'ca-lao', price: '220000', mass: 'kg', info: 'ca-lao', desc: ''
    },
    "ca-duoi-kho": { 
        name: 'Cá đuối khô', path: 'ca-duoi-kho', price: '230000', mass: 'kg', info: 'ca-duoi-kho', desc: ''
    },
    "ca-bo-gu-lon": { 
        name: 'Cá bò gù lớn', path: 'ca-bo-gu-lon', price: '280000', mass: 'kg', info: 'ca-bo-gu-lon', desc: ''
    },
    "ca-bo-gu-nho": { 
        name: 'Cá bò gù nhỏ', path: 'ca-bo-gu-nho', price: '210000', mass: 'kg', info: 'ca-bo-gu-nho', desc: ''
    },
    "ca-com-1-nang": { 
        name: 'Cá cơm 1 nắng', path: 'ca-com-1-nang', price: '210000', mass: 'kg', info: 'ca-com-1-nang', desc: ''
    },
    "ca-mai": { 
        name: 'Cá mai', path: 'ca-mai', price: '270000', mass: 'kg', info: 'ca-mai', desc: ''
    },
    "ca-mai-tầm-mè": { 
        name: 'Cá mai tầm mè', path: 'ca-mai-tầm-mè', price: '250000', mass: 'kg', info: 'ca-mai-tầm-mè', desc: ''
    },
    "muc-1-nang": { 
        name: 'Mực 1 nắng (4 con)', path: 'muc-1-nang', price: '380000', mass: 'kg', info: 'muc-1-nang', desc: ''
    },
    "muc-xe": { 
        name: 'Mực xe', path: 'muc-xe', price: '220000', mass: 'kg', info: 'muc-xe', desc: ''
    },
    "muc-tam-1-tam'": { 
        name: 'Mực tầm 1 tấm', path: 'muc-tam-1-tam', price: '85000', mass: 'tấm', info: 'muc-tam-1-tam', desc: ''
    },
    "muc-1kg-14-25": { 
        name: 'Mực 1kg (14 -> 20 con)', path: 'muc-1kg-14-25', price: '950000', mass: 'kg', info: 'muc-1kg-14-25', desc: ''
    },
    "muc-1kg-7-10": { 
        name: 'Mực 1kg (7 -> 10 con)', path: 'muc-1kg-7-10', price: '1100000', mass: 'kg', info: 'muc-1kg-14-25', desc: ''
    },
    "tom-kho-nho": { 
        name: 'Tôm khô (nhỏ)', path: 'tom-kho-nho', price: '500000', mass: 'kg', info: 'tom-kho-nho', desc: ''
    },
    "tom-kho-trung": { 
        name: 'Tôm khô (trung)', path: 'tom-kho-trung', price: '600000', mass: 'kg', info: 'tom-kho-trung', desc: ''
    },
    "tom-kho-lon": { 
        name: 'Tôm khô (lớn)', path: 'tom-kho-lon', price: '800000', mass: 'kg', info: 'tom-kho-lon', desc: ''
    },

    "nem-que": { 
        name: 'Nem que', path: 'nem-que', price: '45000', mass: 'que', info: 'nem-que', desc: '', mass: 'que' 
    },
    "nem-chua": { 
        name: 'Nem chua', path: 'nem-chua', price: '30000', mass: 'chiếc', info: 'nem-chua', desc: '', mass: 'chiếc' 
    },
    "nem-cay": { 
        name: 'Nem cay (1 cây 0,5kg)', path: 'nem-cay', price: '90000', mass: 'kg', info: 'nem-cay', desc: ''
    },

    "cha-ram-tom-lon": { 
        name: 'Chả ram tôm lớn (nguyên con)', path: 'cha-ram-tom-lon', price: '180000', mass: 'kg', info: 'cha-ram-tom-lon', desc: ''
    },
    "cha-ram-tom-dat-nho": { 
        name: 'Chả ram tôm đất (nhỏ)', path: 'cha-ram-tom-dat-nho', price: '160000', mass: 'kg', info: 'cha-ram-tom-dat-nho', desc: ''
    },
    "cha-lua": { 
        name: 'Chả lụa', path: 'cha-lua', price: '200000', mass: 'kg', info: 'cha-lua', desc: ''
    },
    "cha-bo": { 
        name: 'Chả bò', path: 'cha-bo', price: '320000', mass: 'kg', info: 'cha-bo', desc: ''
    },
    "cha-chien": { 
        name: 'Chả chiên (nguyên chất không pha)', path: 'cha-chien', price: '140000', mass: 'kg', info: 'cha-chien', desc: ''
    },
    "cha-ca": { 
        name: 'Chả cá (Nhồng) - đặt trước 1 ngày', path: 'cha-ca', price: '170000', mass: 'kg', info: 'cha-ca', desc: ''
    },
    "cha-hap": { 
        name: 'Chả hấp (nguyên chất không pha)', path: 'cha-hap', price: '140000', mass: 'kg', info: 'cha-hap', desc: ''
    },
    "cha-ca-cuon-rau-ram-lon": { 
        name: 'Chả cá cuốn rau răm (Lớn)', path: 'cha-ca-cuon-rau-ram-lon', price: '150000', mass: 'kg', info: 'cha-ca-cuon-rau-ram-lon', desc: ''
    },
    "cha-ca-cuon-rau-ram-nho": { 
        name: 'Chả cá cuốn rau răm (nhỏ)', path: 'cha-ca-cuon-rau-ram-nhỏ', price: '90000', mass: 'kg',  info: 'cha-ca-cuon-rau-ram-nhỏ', desc: ''
    },

    "banh-trang": { 
        name: 'Bánh tráng (mỏng - dùng cuốn chả)', path: 'banh-trang', price: '55000', mass: 'ràng', info: 'banh-trang', desc: ''
    },
    "banh-trang-nuoc-dua": { 
        name: 'Bánh tráng nước dừa', path: 'banh-trang-nuoc-dua', price: '65000', mass: 'ràng', info: 'banh-trang-nuoc-dua', desc: ''
    },
    "banh-trang-re-dua": { 
        name: 'Bánh tráng rế dừa', path: 'banh-trang-re-dua', price: '30000', mass: 'bì', info: 'banh-trang-re-dua', desc: ''
    },

    "nuoc-man-ngon": { 
        name: 'Nước nắm ngon', path: 'nuoc-man-ngon', price: '60000', mass: 'lít', info: 'nuoc-man-ngon', desc: ''
    },
    "mam-muc": { 
        name: 'Mắm mực', path: 'mam-muc', price: '40000', mass: 'hủ', info: 'mam-muc', desc: ''
    },
    "mam-ruot": { 
        name: 'Mắm ruột', path: 'mam-ruot', price: '40000', mass: 'hủ', info: 'mam-ruot', desc: ''
    },
    "mam-ruoc": { 
        name: 'Mắm ruốc', path: 'mam-ruoc', price: '40000', mass: 'hủ', info: 'mam-ruoc', desc: ''
    },
    "mam-nem": { 
        name: 'Mắm nêm', path: 'mam-nem', price: '40000', mass: 'hủ', info: 'mam-nem', desc: ''
    },
    "mam-ca-thu-xay": { 
        name: 'Mắm cá thu xay', path: 'mam-ca-thu-xay', price: '85000', mass: 'hủ', info: 'mam-ca-thu-xay', desc: ''
    },
    "mam-ca-thu-lat": { 
        name: 'Mắm cá thu lát', path: 'mam-ca-thu-lat', price: '75000', mass: 'hủ', info: 'mam-ca-thu-lat', desc: ''
    },

    "ruou-gao": { 
        name: 'Rượu gạo', path: 'ruou-gao', price: '35000', mass: 'lit', info: 'ruou-gao', desc: ''
    },
    "ruou-nep": { 
        name: 'Rượu nếp', path: 'ruou-nep', price: '45000', mass: 'lit', info: 'ruou-nep', desc: ''
    },
    "ruou-dau-xanh": { 
        name: 'Rượu đậu xanh', path: 'ruou-dau-xanh', price: '55000', mass: 'lit', info: 'ruou-dau-xanh', desc: ''
    },

    "banh-it-la-gai": { 
        name: 'Bánh ít lá gai', path: 'banh-it-la-gai', price: '3000', mass: 'cái', info: 'banh-it-la-gai', desc: ''
    },
    "banh-hong": { 
        name: 'Bánh hồng', path: 'banh-hong', price: '80000', mass: 'kg', info: 'banh-hong', desc: ''
    },
    "kho-ga-la-chanh": { 
        name: 'Khô gà lá chanh', path: 'kho-ga-la-chanh', price: '185000', mass: 'kg', info: 'kho-ga-la-chanh', desc: ''
    },
    "tre": { 
        name: 'Tré', info: 'tre', path: 'tre', price: '35000', mass: 'cây', desc: ''
    },
    "rong-bien-kho": { 
        name: 'Rong biển khô', path: 'rong-bien-kho', price: '370000', mass: 'kg', info: 'rong-bien-kho', desc: ''
    }
};

export default ProductDetail