import Crema from '../assests/coffee-crema.webp';
import Einspanner from '../assests/einspanner2.jpg';
import Img1 from '../assests/Img1.png';
import Img2 from '../assests/Img2.png';

export interface NavItem {
    id: number;
    title: string;
    link: string;
}

export const NavBarData: NavItem[] = [
    {
        id:1,
        title: 'Home',
        link: '/'
    },
    {
        id:2,
        title: 'Menu',
        link: '#menu'
    },
    {
        id:3,
        title: 'Shop',
        link: '#about'
    }
]

export const CoffeeData = [
    {
        id: 1,
        image: Img1,
        title: 'coffee crema',
        subtitle: 'first cuppa of the day',
        strength: 'moderate-high',
        bgColor: '#271300'
    },
    {
        id: 2,
        image: Img2,
        title: 'einspanner',
        subtitle: 'An Einspänner is a Viennese coffee drink consisting of espresso topped with whipped cream. It is traditionally served in a glass rather than a mug or a coffee cup',
        strength: 'moderate-high',
        bgColor: '#ece0d1'
    }
]