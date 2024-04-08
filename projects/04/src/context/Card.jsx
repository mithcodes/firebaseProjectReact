import React, { useState, useEffect } from "react";
import { useFirebase } from "./firebase";

const BookCard = (props) => {
    const firebase = useFirebase();
    const [url, setUrl] = useState(null);

    useEffect(() => {
        firebase.getImageUrl(props.imageUrl).then((url) => setUrl(url));
    }, [firebase, props.imageUrl]);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={url} className="card-img-top" alt="Book Cover" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">This book has a title {props.name} and is sold by {props.displayName} and this book costs ₹{props.price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default BookCard;
