import React from 'react';

const ProductCard = ({ product }) => {
	return (
		<div className='bg-white rounded-lg shadow-lg flex justify-center items-center flex-col'>
			<img
				src={product.images[0].url}
				alt='Marks Milk'
				className='rounded max-w-full h-60 '
			/>
			<div className='p-6'>
				<h2 className='font-bold mb-2 text-1xl text-purple-800'>
					{product.name}
				</h2>
			</div>
			<div className='flex justify-around items-center w-full mb-4'>
				<p className='text-green-500 font-bold text-3xl'>${product.price}</p>
				<button className='py-2 px-5 bg-green-500 rounded text-white font-bold'>
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
