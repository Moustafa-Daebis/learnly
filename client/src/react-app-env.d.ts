/// <reference types="react-scripts" />

interface User {
	id: number | string;
	name: string;
	email: string;
	bio?: string;
	photo?: string;
}

interface Review {
	id: number | string;
	rating: number;
	review: string;
	createdAt: string | Date;
	user: {
		id: number | string;
		name: string;
		photo: string;
	};
}

interface Course {
	id: number | string;
	name: string;
	image: string;
	summary: string;
	description: string;
	instructors: {
		id: number | string;
		name: string;
		photo?: string;
		ratingsAverage: number;
		ratingsQuantity: number;
		students: number;
		bio?: string;
		courses: (number | string)[];
	}[];
	paid: boolean;
	price: number;
	ratingsAverage: number;
	ratingsQuantity: number;
	reviews?: Review[];
	categories: string[];
	duration: number;
	difficulty: "Beginner" | "Intermediate" | "Advanced";
	prerequisites: string[];
	skills: string[];
}

interface Section {
	id: number | string;
	title: string;
	description: string;
	modules: Module[];
	duration: number;
}

interface Module {
	title: string;
	duration?: number;
}

interface Testimonial {
	quote: string;
	photo: string;
	author: string;
}
