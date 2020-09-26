import React from 'react';

class FilterProduct extends React.Component {

    toggleCategory = (category) => {
        this.props.toggleCategory(category)
    }

    render() {
        return (
            <aside className="col-md-3 blog-sidebar">
                
                <div className="pb-4">
                    <div className="list-group">
                        <button className={"list-group-item list-group-item-action " + (this.props.category === 'hai-san' ? 'active' : '')}
                                onClick={this.toggleCategory.bind(this, 'hai-san')}>
                            Hải sản
                        </button>
                        <button className={"list-group-item list-group-item-action " + (this.props.category === 'nem' ? 'active' : '')}
                                onClick={this.toggleCategory.bind(this, 'nem')}>
                            Nem
                        </button>
                        <button className={"list-group-item list-group-item-action " + (this.props.category === 'cha' ? 'active' : '')}
                                onClick={this.toggleCategory.bind(this, 'cha')}>
                            Chả
                        </button>
                        <button className={"list-group-item list-group-item-action " + (this.props.category === 'banh-trang' ? 'active' : '')}
                            onClick={this.toggleCategory.bind(this, 'banh-trang')}>
                            Bánh tráng
                        </button>
                        <button className={"list-group-item list-group-item-action " + (this.props.category === 'nuoc-mam' ? 'active' : '')}
                            onClick={this.toggleCategory.bind(this, 'nuoc-mam')}>
                            Nước mắm
                        </button>
                        <button className={"list-group-item list-group-item-action " + (this.props.category === 'ruou' ? 'active' : '')}
                            onClick={this.toggleCategory.bind(this, 'ruou')}>
                            Rượu
                        </button>
                        <button className={"list-group-item list-group-item-action " + (this.props.category === 'do-an-kho' ? 'active' : '')}
                            onClick={this.toggleCategory.bind(this, 'do-an-kho')}>
                            Đồ ăn khô
                        </button>
                    </div>
                </div>
            </aside>
        )
    }
}

export default FilterProduct