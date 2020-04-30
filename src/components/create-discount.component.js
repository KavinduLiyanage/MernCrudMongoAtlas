import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateDiscountComponent extends Component {

    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: '',
            description: '',
            duration: 0,
            date: new Date(),
            products: []
        }
    }

    componentDidMount() {
        this.setState({
            products: ['test user'],
            productName: 'test user'
        })
    }

    onChangeProductName(e) {
        this.setState({
            productName: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const discount = {
            productName: this.state.productName,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(discount);



        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Discount Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Product Name: </label>
                        <select ref="userInput"
                                required
                                className="form-control"
                                value={this.state.productName}
                                onChange={this.onChangeProductName}>
                            {
                                this.state.products.map(function(product) {
                                    return <option
                                        key={product}
                                        value={product}>{product}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Discount Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}


