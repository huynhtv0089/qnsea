import React from 'react';
import Post from '../other/Post';
import Pagination from '../other/Pagination';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            itemPerPage: 10,
            currentPage: 1,
            totalPage: 0
        }
        this.getPageNumber = this.getPageNumber.bind(this);
    }

    componentDidMount() {
        //Go to the top page
        window.scrollTo(0, 0);

        this.setState({
            posts: data,
            totalPage: Math.ceil(data.length / this.state.itemPerPage)
        });
        this.getPageNumber(1);
    }

    getPageNumber(pageNum) {
        let offset = ((pageNum - 1) * this.state.itemPerPage)
        this.setState({
            currentPage: pageNum,
            posts: data.slice(offset, (offset + this.state.itemPerPage))
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row blog-main">
                    {this.state.posts.map((post, index) => (
                        <Post key={index} {...post} />
                    ))}

                    <div className="col-md-12">
                        <Pagination pageClick={this.getPageNumber} 
                                    currentPage={this.state.currentPage}
                                    totalPage={this.state.totalPage} />
                    </div>
                </div>
            </div>
        )
    }
}

const data = [
    { 
        image: '', 
        name: 'Eo gio', 
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content.', 
        createdDate: 'Nov 11', 
        path: 'eo-gio' 
    },
    { 
        image: '', 
        name: 'Ky co', 
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content.', 
        createdDate: 'Nov 10', 
        path: 'ky-co' 
    },
    { 
        image: '', 
        name: 'Bai tam hoang hau', 
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content.', 
        createdDate: 'Sep 24', 
        path: 'bai-tam-hoang-hau' 
    },
    { 
        image: '', 
        name: 'Thap banh it', 
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content.', 
        createdDate: 'Dec 02', 
        path: 'thap-banh-it' 
    }
];

export default Posts