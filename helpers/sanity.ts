import { createClient } from 'next-sanity';

export default createClient({
  projectId: 'wagzlb1d',
  dataset: 'production',
  apiVersion: '2023-01-07',
  useCdn: false,
});
