import React, { useState } from 'react';
import axios from 'axios';

const AddService = () => {

    const [service, setService] = useState({
        title: '',
        description: '',
        serviceCost: 0,
        imgUrl: ''
    })

    const [uploadFile, setUploadFile] = useState('');
    const [status, setStatus] = useState('');

    const handleImgUpload = event => {
        setUploadFile(event.target.files[0].name);
        const ImgData = new FormData();
        ImgData.set('key', '28b4e2b5c4640e2f955812ecdc64c65a');
        ImgData.append('image', event.target.files[0]);
        setStatus('Uploading...')
        axios.post('https://api.imgbb.com/1/upload', ImgData)
            .then(function (res) {
                const newService = { ...service };
                newService.imgUrl = res.data.data.display_url
                setService(newService)
                setStatus('Uploaded')

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleOnChange = e => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    const handleOnSubmit = e => {
        console.log(service)
        if (service.title && service.description && service.serviceCost && service.imgUrl) {
            fetch('https://cleanlux.herokuapp.com/add-service', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.isAdded) {
                        setService({
                            title: '',
                            description: '',
                            serviceCost: '',
                            imgUrl: ''
                        })
                        setStatus('');
                        setUploadFile('')
                        e.target.reset();
                        alert('Successfully Added!')
                    }
                    else {
                        alert('Something went wrong!')
                    }
                })
        }
        else {
            alert('All fields are required!')
        }

        e.preventDefault();
    }

    return (
        <div className="dashboard-body">
            <div className="dashboard-title">
                <h4 className="text-primary p-3 m-0">Add Service</h4>
            </div>

            <div className="dashboard-content border-radius">
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <input onChange={handleOnChange} type="text" name="title" className="form-control" placeholder="Service Title" />
                    </div>

                    <div className="form-group">
                        <textarea onChange={handleOnChange} name="description" className="form-control" rows="4" placeholder="Service Description"></textarea>
                    </div>

                    <div className="form-group">
                        <input onChange={handleOnChange} type="number" name="serviceCost" className="form-control" placeholder="Service Cost" />
                    </div>

                    <div className="form-group">
                        <div className="custom-file">
                            <input onChange={handleImgUpload} type="file" className="custom-file-input" id="customFile" style={{cursor: 'pointer'}}/>
                            <label className="custom-file-label" htmlFor="customFile" style={{cursor: 'pointer'}}>{uploadFile ? uploadFile : 'Choose file'} {status && status}</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;