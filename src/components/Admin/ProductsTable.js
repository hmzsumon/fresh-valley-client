import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts } from '../../actions/productAction';
import Loader from '../layout/Loader/Loader';

const ProductsTable = () => {
	const dispatch = useDispatch();
	const { error, loading, adminProducts } = useSelector(
		(state) => state.adminProducts
	);
	// const { error: deleteError, isDeleted } = useSelector(
	// 	(state) => state.product
	// );
	const deleteProductHandler = (id) => {
		// dispatch(deleteProduct(id));
		console.log(id);
	};
	useEffect(() => {
		dispatch(getAdminProducts());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<div>
					<Loader />
				</div>
			) : (
				<>
					<table className='block min-w-full border-collapse md:table'>
						<thead className='block md:table-header-group'>
							<tr className='absolute block border border-grey-500 md:border-none md:table-row -top-full md:top-auto -left-full md:left-auto md:relative '>
								<th className='block p-2 font-bold text-left text-white bg-gray-600 md:border md:border-grey-500 md:table-cell'>
									Id
								</th>
								<th className='block p-2 font-bold text-left text-white bg-gray-600 md:border md:border-grey-500 md:table-cell'>
									Name
								</th>
								<th className='block p-2 font-bold text-left text-white bg-gray-600 md:border md:border-grey-500 md:table-cell'>
									Price
								</th>
								<th className='block p-2 font-bold text-left text-white bg-gray-600 md:border md:border-grey-500 md:table-cell'>
									Stock
								</th>
								<th className='block p-2 font-bold text-left text-white bg-gray-600 md:text-center md:border md:border-grey-500 md:table-cell'>
									Actions
								</th>
							</tr>
						</thead>
						<tbody className='block md:table-row-group'>
							{adminProducts &&
								adminProducts.map((product) => (
									<tr
										key={product._id}
										className='block bg-gray-300 border border-grey-500 md:border-none md:table-row'
									>
										<td className='block px-1 py-2 text-left md:border md:border-grey-500 md:table-cell'>
											<span className='inline-block w-1/3 font-bold md:hidden'>
												Id
											</span>
											{product._id}
										</td>
										<td className='block px-1 py-2 text-left md:border md:border-grey-500 md:table-cell'>
											<span className='inline-block w-1/3 font-bold md:hidden'>
												Name
											</span>
											{product.name}
										</td>
										<td className='block p-2 text-left md:border md:border-grey-500 md:table-cell'>
											<span className='inline-block w-1/3 font-bold md:hidden'>
												Price
											</span>
											${product.price}
										</td>
										<td className='block p-2 text-left md:border md:border-grey-500 md:table-cell'>
											<span className='inline-block w-1/3 font-bold md:hidden'>
												Stock
											</span>
											{product.Stock}
										</td>
										<td className='block text-left md:text-center md:border md:border-grey-500 md:table-cell'>
											<span className='inline-block w-1/3 font-bold md:hidden'>
												Actions
											</span>
											<button className='px-2 py-1 mr-1 font-bold text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-700'>
												Edit
											</button>
											<button
												className='px-2 py-1 font-bold text-white bg-red-500 border border-red-500 rounded hover:bg-red-700'
												onClick={deleteProductHandler(product._id)}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</>
			)}
		</>
	);
};

export default ProductsTable;
