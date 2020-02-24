import React from "react";

const Review = () => {
    const User = [
        {
            "name": "abbi",
            "age": 10
        },
        {
            "name": "adi",
            "age": 11
        },
        {
            "name": "ali",
            "age":1
        }
    ];
    const ListReview = User.map((itemReview) =>
        <div>
            <p>{itemReview.name}</p>
            <p>{itemReview.age}</p>
        </div>
    );
    return (
        <div>
            {ListReview}
        </div>
    );
}

const Container = () => {
    return (
        <div>
            <p>coba</p>
            <Product nilai="cobain" name="haha"></Product>
            <Review></Review>
        </div>
    );
}

const Product = (props) => {
    const { nilai, name } = props;
    return (
        <div>
            <button onClick={Aksi}>{nilai}</button>
            <p>{name}</p>
        </div>
    );
}

const Aksi = () => {
    return (
        // console.log("hai")
        alert("hai")
    );
}



export default Container;