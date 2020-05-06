import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Discount = props => (
    <tr>
        <td>{props.discount.productName}</td>
        <td>{props.discount.description}</td>
        <td>{props.discount.duration}</td>
        <td>{props.discount.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.discount._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDiscount(props.discount._id) }}>delete</a>
        </td>
    </tr>
)

class DiscountsListComponent extends Component {

    constructor(props) {
        super(props);

        this.deleteDiscount = this.deleteDiscount.bind(this)

        this.state = {discounts: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/discounts/')
            .then(response => {
                this.setState({ discounts: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteDiscount(id) {
        axios.delete('http://localhost:4000/discounts/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            discounts: this.state.discounts.filter(el => el._id !== id)
        })
    }

    discountList() {
        return this.state.discounts.map(currentdiscount => {
            return <Discount discount={currentdiscount} deleteDiscount={this.deleteDiscount} key={currentdiscount._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Discounts</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.discountList() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DiscountsListComponent;
