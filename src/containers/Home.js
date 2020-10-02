import React from 'react';
import Handbook from '../components/other/HandBook';
import Products from './Products';

class Home extends React.Component {

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <img src="/assets/img/quy-nhon-1.png" className="img-fluid" alt="Responsive img 1" />
                <div className="container marketing">
                    <Handbook />
                    <Products />
                </div>
            </>
        )
    }
}

export default Home