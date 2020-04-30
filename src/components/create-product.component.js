import React, {Component} from 'react';

class CreateProductComponent extends Component {

    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: ''
        }
    }

    onChangeProductName(e) {
        this.setState({
            productName: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const product = {
            productName: this.state.productName
        }

        console.log(product);


        this.setState({
            productName: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Add new Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Product Name: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.productName}
                                onChange={this.onChangeProductName}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProductComponent;
