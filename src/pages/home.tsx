// import Head from 'next/head';
// import { Box, Container, Grid, Typography } from '@mui/material';
// import {
//     CarouselAnimation,
// } from '~/sections/_examples/extra/carousel';
// import useResponsive from '~/hooks/useResponsive';

// import LineCategoies from '~/components/__new/line-categoies';
// import ProductList from '~/components/__new/product-list-previewer';
// import { CategoryCard } from '~/sections/@dashboard/e-commerce/shop';
// import MainLayout from '../layouts/main';
// import AdsBoard from '~/components/__new/ad-board';

// HomePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

// export default function HomePage() {
//     const isDesktop = useResponsive('up', 'md');
//     return (
//         <>
//             <Head>
//                 <title> The starting point for your next project | Minimal UI</title>
//             </Head>

//             {isDesktop && <LineCategoies />}

//             <Box sx={{
//                 mx: isDesktop ? 5 : 1,
//                 mb: 4,
//                 mt: 1
//             }}>
//                 <CarouselAnimation data={carouselMockData} />
//             </Box>

//             <Container>

//                 <Typography variant="h5" noWrap gutterBottom>
//                     Most Popular Categories
//                 </Typography>

//                 <Grid container sx={{ mb: 5 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//                     {categoryData.map((_, index) => (
//                         <Grid item xs={2} sm={4} md={2} key={index}>
//                             <CategoryCard {..._} />
//                         </Grid>
//                     ))}
//                 </Grid>

//                 <ProductList name="Shoes" paragraph="This is dummy paragraph" />

//             </Container>

//             <AdsBoard />

//             <Container>

//                 <ProductList name="Shirts" paragraph="This is dummy paragraph" />

//             </Container>

//         </>
//     );
// }

// const carouselMockData = [{
//     id: '1',
//     title: 'Great Deal On Beauty Products',
//     image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
//     description: 'If you override a material-ui component you dont have to override all textfields, you can do it for a single one using the classes property. ',
// },
// {
//     id: '12',
//     title: 'Great Deal On Shoes',
//     image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//     description: 'If you override a material-ui component you dont have to override all textfields, you can do it for a single one using the classes property. ',
// }
// ]

// const categoryData = [
//     { name: "shirt", cover: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', href: '/' },
//     { name: "pents", cover: 'https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', href: '/' },
//     { name: "shoes", cover: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80', href: '/' },
//     { name: "slippers", cover: 'https://images.unsplash.com/photo-1567347167012-29482aa7a9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', href: '/' },
//     { name: "t-shirt", cover: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', href: '/' },
//     { name: "mobiles", cover: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80', href: '/' },

// ]

import React from 'react';

export default function home() {
  return <div>home</div>;
}
