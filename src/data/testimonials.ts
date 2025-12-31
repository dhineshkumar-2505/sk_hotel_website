export interface Testimonial {
    id: string
    name: string
    location: string
    photo: string
    quote: string
    rating: number
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Rajesh Kumar',
        location: 'Ambattur',
        photo: '/images/sasikala_kitchen.jpeg',
        quote: 'Best idly and dosa in Ambattur! The taste reminds me of my grandmother\'s cooking. Truly authentic Tamil flavors.',
        rating: 5
    },
    {
        id: '2',
        name: 'Priya Shankar',
        location: 'Avadi',
        photo: '/images/sasikala_kitchen.jpeg',
        quote: 'I\'ve been coming here for 5 years. The pongal is absolutely divine, and the service is always warm and welcoming.',
        rating: 5
    },
    {
        id: '3',
        name: 'Venkatesh Iyer',
        location: 'Ambattur',
        photo: '/images/sasikala_kitchen.jpeg',
        quote: 'Fresh, hot, and delicious every single time. The vada is crispy on the outside and soft inside. Perfect!',
        rating: 5
    },
    {
        id: '4',
        name: 'Lakshmi Narayanan',
        location: 'Padi',
        photo: '/images/sasikala_kitchen.jpeg',
        quote: 'A hidden gem! The appam with coconut milk is heavenly. Great quality at reasonable prices.',
        rating: 5
    }
]
