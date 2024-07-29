import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

function CreateProfile() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const [previewUrl, setPreviewUrl] = useState(null);
    const { userEmail } = useParams();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setValue('picture', e.target.files);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };

            reader.readAsDataURL(file);
        } else {
            setPreviewUrl('');
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        setPreviewUrl(null);
        setValue('picture', null);
    }

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('email', userEmail);
        formData.append('displayName', data.displayName);
        formData.append('status', data.status);
        formData.append('about', data.about);
        if (data.picture) {
            if (data.picture.length > 0) {
                formData.append('picture', data.picture[0]);
            }
        }


        axios.post('https://localhost:44315/api/Account/updateProfile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    // remove first time user data
                    localStorage.removeItem(`${userEmail}`);
                    navigate('/');
                }
            })
            .catch(err => {
                setErrorMessage('Some error occurred, try again');
            });
    }

    return (
        <div className="bg-[url('../images/login-bg.jpg')] h-screen bg-cover">
            <div className="bg-black/70 h-full grid place-items-center">
                <div className="bg-white p-6 rounded-md w-96">
                    <h1 className="text-2xl text-center">CHAT <span className="text-[#34b17d]">ROOM</span></h1>
                    <form className="pt-6" onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-sm mb-2">Profile picture</p>
                        <div className="flex items-center mb-3">
                            <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-24 h-24 flex items-center justify-center bg-[#eaf1f7] rounded-full">
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center gap-4">
                                <label htmlFor="picture" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer text-sm">
                                    Edit
                                    <input id="picture" type="file" onChange={handleFileChange} className="hidden" ref={register('picture', { required: 'profile picture is required' })} />
                                </label>
                                <button
                                    className="text-red-500 bg-slate-100 py-2 px-4 rounded text-sm"
                                    onClick={handleDelete}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        <p className="text-[10px] leading-none text-red-500 h-4">{errors.picture && `${errors.picture.message}`}</p>
                        <div className="flex flex-col gap-1 mb-3">
                            <label htmlFor="displayName" className="text-sm">Display Name</label>
                            <input
                                type="text"
                                id="displayName"
                                className="border-[1px] border-gray-300 rounded-sm focus:border-gray-400 h-10 px-3 transition-all duration-300 ease-out text-[15px]"
                                autoComplete="off"
                                {...register('displayName', { required: 'display name is required' })}
                            />
                            <p className="text-[10px] leading-none text-red-500 h-2">{errors.displayName && `${errors.displayName.message}`}</p>
                        </div>
                        <div className="flex flex-col gap-1 mb-3">
                            <label htmlFor="status" className="text-sm">Status</label>
                            <div className="relative">
                                <input
                                    type='text'
                                    id="status"
                                    className="border-[1px] border-gray-300 rounded-sm focus:border-gray-400 h-10 px-3 transition-all duration-300 ease-out w-full text-[15px]"
                                    autoComplete="off"
                                    {...register('status')}
                                />
                            </div>
                            <p className="text-[10px] leading-none text-red-500 h-2">{errors.status && `${errors.status.message}`}</p>
                        </div>
                        <div className="flex flex-col gap-1 mb-3">
                            <label htmlFor="about" className="text-sm">About</label>
                            <div className="relative">
                                <textarea
                                    type='text'
                                    id="about"
                                    className="border-[1px] border-gray-300 rounded-sm px-3 py-2  w-full text-[13px] transition-colors duration-300 ease-in-out  focus:border-gray-400 focus:outline-none"
                                    autoComplete="off"
                                    {...register('about', { required: 'about is required' })}
                                />
                            </div>
                            <p className="text-[10px] leading-none text-red-500 h-1">{errors.about && `${errors.about.message}`}</p>
                        </div>
                        <p className="h-2 text-xs text-center text-red-600">{errorMessage && `${errorMessage}`}</p>
                        <button type="submit" className="w-full bg-[#263238] text-white rounded-sm py-2 mt-3">Save Profile</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default CreateProfile