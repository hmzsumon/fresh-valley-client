import React from 'react';
import FooterAdmin from './FooterAdmin';
import NavbarAdmin from './NavbarAdmin';
import Sidebar from './Sidebar';

const EditProduct = () => {
	const icon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5 text-blueGray-400 mr-2 text-sm'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
		</svg>
	);
	return (
		<div className='md:flex  h-screen w-screen'>
			<div className=' md:w-64 bg-red-500'>
				<Sidebar />
			</div>
			<div className=' md:flex-1'>
				<NavbarAdmin title={'Edit Product'} icon={icon} />
				<div className='min-h-auto mt-10 px-1'>Create Product</div>
				<FooterAdmin />
			</div>
		</div>
	);
};

export default EditProduct;
