import { useForm } from 'react-hook-form';
import './style.css';

const Productform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // its a demo id
    const id = 'adfk90k';

    const onSubmit = (data) => {
        data.productId = id;
        console.log(data);
        fetch('https://ssl-payment.onrender.com/ssl-request', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                window.location.replace(result.url);
            });
    };

    return (
        <div className="grid grid-cols-2 gap-8 max-w-screen-md mx-auto">

            <div className="lg:w-2/3">
                <label className="block mb-2">Product Image</label>
                <img src="https://puresourceindia.in/wp-content/uploads/2021/02/81KKrzZHG6L._SL1500_.jpg" alt="" />
                <p className='text-2xl font-bold text-yellow-50'>Price 100tk</p>
            </div>
{/* form starts here */}
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 text-white">

                <div className="col-span-2">
                    <label className="block mb-2 ">Product Name</label>
                    <input defaultValue="test" {...register('productName')} className="p-3 w-full border rounded text-black" />
                </div>

                <div>
                    <label className="block">Country</label>
                    <input {...register('bdt', { required: true })} className="p-3 w-full border rounded" />
                    {errors.bdt && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label className="block">Phone</label>
                    <input {...register('phone', { required: true })} className="p-3 w-full border rounded" />
                    {errors.phone && <span className="text-red-500">This field is required</span>}
                </div>

                <button type="submit" className='bg-slate-300 rounded p-3' style={{ border: 'none' }}>
                    Pay now
                </button>
            </form>
            {/* form ends here */}
        </div>
    );
};

export default Productform;
