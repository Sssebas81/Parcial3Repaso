import Grid from '@/common/components/Grid';
import ProductCard from '@/common/components/ProductCard';

export default function Home({ products }) {
  return (
    <Grid cols={4} gap={6}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}