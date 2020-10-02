import React from 'react';
import { addListProducts } from '../actions';
import { connect } from 'react-redux';

class ManageProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }

        this.onChangeTextarea = this.onChangeTextarea.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        fetch("http://localhost:5000/products")
            .then(
                res => res.json())
            .then(
                (data) => this.setState({ data }),
                (error) => console.log('error: ' + error)
            );
    }

    onChangeTextarea(e) {
        this.setState({
            data: JSON.parse(e.target.value)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.dispatch( addListProducts(this.state.data) );

        fetch("http://localhost:5000/modify-products", {
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify({data: this.state.data})
            }).then(
                res => res.json()
            ).then(
                (result) => console.log(result),
                (error) => console.log('error: ' + error)
            );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 blog-sidebar">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <textarea className="form-control" onChange={this.onChangeTextarea}
                                        value={JSON.stringify(this.state.data, undefined, 4)} rows="20"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dataProducts: state.products
})
export default connect(mapStateToProps)(ManageProducts)