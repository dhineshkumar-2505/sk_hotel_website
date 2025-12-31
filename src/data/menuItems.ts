export interface MenuItem {
    id: string
    tamilName: string
    englishName: string
    image: string
    animationType: 'steam' | 'drip' | 'puff' | 'sizzle' | 'pour' | 'none'
    description?: string
    availableIn: 'morning' | 'evening' | 'both'
}

// Morning Menu Items (6 AM - 11 AM)
export const morningMenuItems: MenuItem[] = [
    {
        id: 'idly',
        tamilName: 'இட்லி',
        englishName: 'Idly',
        image: '/images/idli.jpg',
        animationType: 'steam',
        description: 'Soft and fluffy steamed rice cakes',
        availableIn: 'both'
    },
    {
        id: 'dosa',
        tamilName: 'தோசை',
        englishName: 'Dosa',
        image: '/images/dosa.jpg',
        animationType: 'drip',
        description: 'Crispy golden crepe with ghee',
        availableIn: 'both'
    },
    {
        id: 'poori',
        tamilName: 'பூரி',
        englishName: 'Poori',
        image: '/images/poori.avif',
        animationType: 'puff',
        description: 'Deep-fried puffed bread',
        availableIn: 'morning'
    },
    {
        id: 'pongal',
        tamilName: 'பொங்கல்',
        englishName: 'Pongal',
        image: '/images/PONGAL.webp',
        animationType: 'steam',
        description: 'Savory rice and lentil comfort food',
        availableIn: 'morning'
    },
    {
        id: 'vada',
        tamilName: 'வடை',
        englishName: 'Vada',
        image: '/images/vada.webp',
        animationType: 'sizzle',
        description: 'Crispy lentil fritters',
        availableIn: 'morning'
    },
    {
        id: 'appam',
        tamilName: 'ஆப்பம் & தேங்காய் பால்',
        englishName: 'Appam & Coconut Milk',
        image: '/images/idiyapam with coconut milk.jpeg',
        animationType: 'pour',
        description: 'Soft rice pancakes with coconut milk',
        availableIn: 'morning'
    }
]

// Evening Menu Items (5 PM - 11:30 PM)
export const eveningMenuItems: MenuItem[] = [
    {
        id: 'idly-evening',
        tamilName: 'இட்லி',
        englishName: 'Idly',
        image: '/images/idli.jpg',
        animationType: 'steam',
        description: 'Soft and fluffy steamed rice cakes',
        availableIn: 'both'
    },
    {
        id: 'dosa-evening',
        tamilName: 'தோசை',
        englishName: 'Dosa',
        image: '/images/dosa.jpg',
        animationType: 'drip',
        description: 'Crispy golden crepe with ghee',
        availableIn: 'both'
    },
    {
        id: 'idiyappam',
        tamilName: 'இடியாப்பம் & குருமா',
        englishName: 'Idiyappam with Kuruma',
        image: '/images/idiyapam with coconut milk.jpeg',
        animationType: 'steam',
        description: 'String hoppers with vegetable kuruma',
        availableIn: 'evening'
    },
    {
        id: 'chapathi',
        tamilName: 'சப்பாத்தி & குருமா',
        englishName: 'Chapathi with Kuruma',
        image: '/images/chapathi.jpeg',
        animationType: 'none',
        description: 'Soft wheat flatbread with kuruma',
        availableIn: 'evening'
    },
    {
        id: 'vadacurry',
        tamilName: 'வடகறி',
        englishName: 'Vada Curry',
        image: '/images/Vada-Curry.webp',
        animationType: 'sizzle',
        description: 'Lentil fritters in spicy curry',
        availableIn: 'evening'
    },
    {
        id: 'batter',
        tamilName: 'இட்லி & தோசை மாவு (அரை கிலோ முதல்)',
        englishName: 'Idli & Dosa Batter (from ½ kg)',
        image: '/images/idli batter.jpg',
        animationType: 'none',
        description: 'Fresh ground idli and dosa batter, available from half kg',
        availableIn: 'evening'
    }
]

// Legacy export for backward compatibility
export const menuItems = morningMenuItems
