import React from 'react';

import {
  Box,
  Container,
  Grid,
  Pagination
} from '@mui/material';

import Head from 'next/head';

import { products } from '../__mocks__/products';
import { DashboardLayout } from '../components/dashboard-layout';
import { ProductCard } from '../components/product/product-card';
import { ProductListToolbar } from '../components/product/product-list-toolbar';

const Page = () => (
  <>
    <Head>
      <title>Products | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3,
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
