import React from 'react';
import styles from './Main.module.css';
import { Link } from 'react-router-dom';

function Main({ setCurrentStep }) {
	const options = [
		{
			id: 1,
			name: 'Anti Wrinkle Treatment',
			img_url:
				'https://images.unsplash.com/photo-1556228453-46a07da3df9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1956&q=80',
		},
		{
			id: 2,
			name: 'Dermal Fillers',
			img_url:
				'https://images.unsplash.com/photo-1598300188904-6287d52746ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
		},
		{
			id: 3,
			name: 'Secret RF',
			img_url:
				'https://images.unsplash.com/photo-1603792907191-89e55f70099a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		},
		{
			id: 4,
			name: 'HArmonyCA',
			img_url:
				'https://images.unsplash.com/photo-1601021579184-5b2879507021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		},
		{
			id: 5,
			name: 'Profhilo',
			img_url:
				'https://images.unsplash.com/photo-1556228852-6d35a585d566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
		},
		{
			id: 6,
			name: 'Facials',
			img_url:
				'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		},
		{
			id: 7,
			name: 'Sclerotherapy',
			img_url:
				'https://my.clevelandclinic.org/-/scassets/images/org/health/articles/6763-sclerotherapy',
		},
		{
			id: 8,
			name: 'LED',
			img_url: 'https://lumega.eu/wp-content/uploads/2022/02/hospitalsbelysning-led-5.jpg',
		},
		{
			id: 9,
			name: 'Fat dissolve',
			img_url:
				'https://images.unsplash.com/photo-1523901839036-a3030662f220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		},
		{
			id: 10,
			name: 'Growth Factors',
			img_url:
				'https://images.unsplash.com/photo-1524247108137-732e0f642303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
		},
		{
			id: 11,
			name: 'Special Package for time clinic',
			img_url:
				'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
		},
		{
			id: 12,
			name: 'Consultation',
			img_url:
				'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
		},
	];
	const handleGoBack = () => {
		setCurrentStep('2/2');
	};
	return (
		<div>
			<ul className={styles['main-list']}>
				{options.map((option) => {
					return (
						<li key={option.id}>
							<div className={styles['main-section']}>
								<div className={styles['main-paragraph']}>
									<img className={styles.img} src={option.img_url} alt={option.name} />
									<Link
										className="links"
										to={{ pathname: `/step2/${option.id}` }}
										state={option.name}
										onClick={() => {
											handleGoBack();
										}}
									>
										{option.name}
									</Link>
								</div>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="1em"
									viewBox="0 0 320 512"
									className={styles.icon}
								>
									<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
								</svg>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Main;
