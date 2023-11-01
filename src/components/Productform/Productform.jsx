
import { useForm } from 'react-hook-form';
import './style.css'
const Productform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const id = 'adfk90k';

    const onSubmit = (data) => {
        data.productId = id;
        console.log(data);
        fetch('https://ssl-payment.onrender.com/ssl-request',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data),
        })
        .then(res =>res.json())
        .then((result)=>{
            console.log(result);
            window.location.replace(result.url)
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row p-8 gap-8 max-w-screen-md mx-auto">
            {/* Column for Product Image */}
            <div className="lg:w-1/2">
                <label className="block mb-2">Product Image</label>
                <img src="https://puresourceindia.in/wp-content/uploads/2021/02/81KKrzZHG6L._SL1500_.jpg" alt="" />
            </div>

            {/* Column for Product Details */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {/* Product Name */}
                <div className="col-span-2">
                    <label className="block mb-2">Product Name</label>
                    <input defaultValue="test" {...register('productName')} className="p-3 w-full border rounded" />
                </div>

                {/* BDT */}
                <div>
                    <label className="block mb-2">BDT</label>
                    <input {...register('bdt', { required: true })} className="p-3 w-full border rounded" />
                    {errors.bdt && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Phone */}
                <div>
                    <label className="block mb-2">Phone</label>
                    <input {...register('phone', { required: true })} className="p-3 w-full border rounded" />
                    {errors.phone && <span className="text-red-500">This field is required</span>}
                </div>
                <button type="submit" className='bg-slate-300 rounded'>
                    Submit
                </button>
            </div>

            {/* Submit Button */}

        </form>
    );
};

export default Productform;
