import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import AnotherNavBar from '../../AnotherNavBar/AnotherNavBar';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [photoURL, setPhotoURL] = useState(null);


    const onSubmit = data => {
        console.log(data);
        const reviewData = {
            name: data.name,
            description: data.description,
            photoURL: photoURL
        };
        const url = `https://infinite-waters-92433.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                if (res) {
                    alert("A review has been successfully added.")
                }
            });
    };


    const handlePictureUpload = photo => {
        const pictureData = new FormData();
        pictureData.set('key', '7ecebd31fe0780e2c3ecdfe9ad94a3fb');
        pictureData.append('image', photo.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            pictureData)
            .then(function (response) {
                setPhotoURL(response.data.data.display_url);
            })
            .catch(function (error) {
            });
    }

    return (
        <div>
            <AnotherNavBar></AnotherNavBar>
            <div className='dashboard-container d-flex'>
                <div >
                    <Sidebar></Sidebar>
                </div>
                <div className='review-form-container w-100 p-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-50 bg-white p-4 review-form-wrapper">
                            <label className="h5" htmlFor="name">Add Your Name</label>
                            <br />
                            <input className="w-100 mb-2 form-control" placeholder="Your Name" {...register("name")} required />
                            <br />
                            <label className="h5" htmlFor="description">Add Description</label>
                            <br />
                            <textarea className="form-control" cols="30" rows="3" placeholder="Description" {...register("description")} required></textarea>
                            <br />
                            <label className="h5">Add Your Picture</label>
                            <br />
                            <input type="file" onChange={handlePictureUpload} required />
                            <br />
                            <input className="submit-button mt-4" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;