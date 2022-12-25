// Import your Client Component
import HomePage from './home';

export default async function Page() {
  // Fetch data directly in a Server Component
  const data = await import('_data/home.json');
  const settings = await import('_data/settings.json');

  const props = {
    data: JSON.stringify(data),
    settings: JSON.stringify(settings),
  };

  return <HomePage {...props} />;
}
