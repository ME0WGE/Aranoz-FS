import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import Banner from '@/Components/Home/Banner';
import FeaturedCategory from '@/Components/Home/FeaturedCategory';
import AwesomeProducts from '@/Components/Home/AwesomeProducts';
import WeeklySale from '@/Components/Home/WeeklySale';
import BestSellers from '@/Components/Home/BestSellers';
import Newsletter from '@/Components/Home/Newsletter';

export default function Home({ featuredProducts, bestSellers, products, categories, blogs, saleProduct, saleEndDate }) {
    return (
        <AppLayout>
            <Head title="Home" />
            <div className="min-h-screen">
                <Banner featuredProducts={featuredProducts} />
                <FeaturedCategory categories={categories} />
                <AwesomeProducts products={products} />
                <WeeklySale saleProduct={saleProduct} saleEndDate={saleEndDate} />
                <BestSellers products={bestSellers} />
                <Newsletter blogs={blogs} />
            </div>
        </AppLayout>
    );
}
