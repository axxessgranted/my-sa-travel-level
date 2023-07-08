import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'My SA Travel Level' },
    { name: 'description', content: 'Calculate your SA Travel Level!' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>South Africa Travel Level</h1>
    </div>
  );
}
