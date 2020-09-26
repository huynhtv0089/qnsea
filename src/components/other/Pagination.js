import React from 'react';

class Pagination extends React.Component {
    pageClick(pageNum) {
        this.props.pageClick(pageNum, this.props.category);
    }

    render() {
        if (this.props.totalPage === 1) {
            return (<></>);
        }

        if (this.props.currentPage < 4) {
            return (
                <nav className="float-right">
                    <ul className="pagination">
                        {this.props.currentPage !== 1 && (
                            <li className="page-item">
                                <button className="page-link" aria-label="Previous" 
                                        onClick={(e) => this.pageClick((this.props.currentPage - 1), e)}>
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                        )}
                        <li className={"page-item " + (this.props.currentPage === 1 ? 'active': '')}>
                            <button className="page-link" onClick={(e) => this.pageClick(1, e)}>
                                1
                            </button>
                        </li>
                        <li className={"page-item " + (this.props.currentPage === 2 ? 'active': '')}>
                            <button className="page-link" onClick={(e) => this.pageClick(2, e)}>2</button>
                        </li>
                        {this.props.totalPage >= 3 && (
                            <li className={"page-item " + (this.props.currentPage === 3 ? 'active': '')}>
                                <button className="page-link" onClick={(e) => this.pageClick(3, e)}>3</button>
                            </li>
                        )}
                        {this.props.totalPage >= 4 && (
                            <li className={"page-item " + (this.props.currentPage === 4 ? 'active': '')}>
                                <button className="page-link" onClick={(e) => this.pageClick(4, e)}>4</button>
                            </li>
                        )}
                        {this.props.totalPage === 5 && (
                            <li className={"page-item " + (this.props.currentPage === 5 ? 'active': '')}>
                                <button className="page-link" onClick={(e) => this.pageClick(5, e)}>5</button>
                            </li>
                        )}
                        {this.props.totalPage >= 6 && (
                            <>
                                <li className="page-item">
                                    <span className="page-link">...</span>
                                </li>
                                <button className="page-link" onClick={(e) => this.pageClick(this.props.totalPage, e)}>
                                    {this.props.totalPage}
                                </button>
                            </>
                        )}
                        {this.props.totalPage !== this.props.currentPage && (
                            <li className="page-item">
                                <button className="page-link" aria-label="Next"
                                        onClick={(e) => this.pageClick((this.props.currentPage + 1), e)}>
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            )
        } else if(this.props.currentPage < (this.props.totalPage - 2)) {
            return ( 
                <nav className="float-right">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous" 
                                    onClick={(e) => this.pageClick((this.props.currentPage - 1), e)}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={(e) => this.pageClick(1, e)}>1</button>
                        </li>
                        <li className="page-item">
                            <span className="page-link">...</span>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={(e) => this.pageClick((this.props.currentPage - 1), e)}>
                                {this.props.currentPage - 1}
                            </button>
                        </li>
                        <li className="page-item active">
                            <span className="page-link">
                                {this.props.currentPage}
                            </span>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={(e) => this.pageClick((this.props.currentPage + 1), e)}>
                                {this.props.currentPage + 1}
                            </button>
                        </li>
                        <li className="page-item">
                            <span className="page-link">...</span>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={(e) => this.pageClick(this.props.totalPage, e)}>
                                {this.props.totalPage}
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" aria-label="Next"
                                    onClick={(e) => this.pageClick((this.props.currentPage + 1), e)}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav className="float-right">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous" 
                                    onClick={(e) => this.pageClick((this.props.currentPage - 1), e)}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={(e) => this.pageClick(1, e)}>1</button>
                        </li>
                        {this.props.totalPage > 5 && (
                            <li className="page-item">
                                <span className="page-link">...</span>
                            </li>
                        )}
                        {this.props.totalPage >= 5 && (
                            <li className={"page-item " + ((this.props.totalPage - 3) === this.props.currentPage ? 'active' : '')}>
                                <button className="page-link" onClick={(e) => this.pageClick((this.props.totalPage - 3), e)}>
                                    {this.props.totalPage - 3}
                                </button>
                            </li>
                        )}
                        <li className={"page-item " + ((this.props.totalPage - 2) === this.props.currentPage ? 'active' : '')}>
                            <button className="page-link" onClick={(e) => this.pageClick((this.props.totalPage - 2), e)}>
                                {this.props.totalPage - 2}
                            </button>
                        </li>
                        <li className={"page-item " + ((this.props.totalPage - 1) === this.props.currentPage ? 'active' : '')}>
                            <button className="page-link" onClick={(e) => this.pageClick((this.props.totalPage - 1), e)}>
                                {this.props.totalPage - 1}
                            </button>
                        </li>
                        <li className={"page-item " + (this.props.totalPage === this.props.currentPage ? 'active' : '')}>
                            <button className="page-link" onClick={(e) => this.pageClick(this.props.totalPage, e)}>
                                {this.props.totalPage}
                            </button>
                        </li>
                        {this.props.totalPage !== this.props.currentPage && (
                            <li className="page-item">
                                <button className="page-link" aria-label="Next"
                                        onClick={(e) => this.pageClick((this.props.currentPage + 1), e)}>
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            )
        }
    }
}

export default Pagination
