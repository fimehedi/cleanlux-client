import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Review = () => {

    const [review, setReview] = useState({
        name: '',
        comment: ''
    })

    const handleOnChange = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleOnSubmit = e => {
        if (review.name && review.comment) {
            fetch('https://cleanlux.herokuapp.com/add-review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isAdded) {
                        alert('Review Successfully Added!');
                        setReview({ name: '', comment: '' })
                        e.target.reset();
                    }
                    else {
                        alert('Something went wrong!');
                    }
                })
        }
        else {
            alert('All Fields are required!')
        }
        e.preventDefault();
    }

    return (
        <div className="dashboard-body">
            <div className="dashboard-title">
                <h4 className="text-primary p-3 m-0">Review</h4>
            </div>

            <div className="dashboard-content border-radius">
                <form onSubmit={handleOnSubmit}>
                    <div class="form-group">
                        <input onChange={handleOnChange} type="text" name="name" class="form-control" placeholder="Full Name" />
                    </div>

                    <div class="form-group">
                        <textarea onChange={handleOnChange} class="form-control" name="comment" rows="4" placeholder="Write a comment"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary"><FontAwesomeIcon icon={faEnvelope} /> <span className="pl-2">Review</span></button>
                </form>
            </div>
        </div>
    );
};

export default Review;