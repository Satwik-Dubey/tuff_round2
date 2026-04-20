import React from 'react';
import { BentoGrid } from './components/BentoGrid';
import { BentoItem } from './components/BentoItem';

function App() {
  return (
    <div style={{ padding: '4rem 0', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 1rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.03em', background: 'linear-gradient(to right, #fff, #9ca3af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Modular Bento Grid
        </h1>
        <p style={{ color: '#a1a1aa', marginTop: '1rem', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
          A customizable, responsive bento grid perfectly suited for modern aesthetics. 
          Upload your image so we can map out your exact shapes!
        </p>
      </header>
      
      {/* 
        This is an example structure. 
        Once you provide the image, we can adjust the colSpan and rowSpan 
        to perfectly match the specific grid layout you need.
      */}
      <BentoGrid columns={4}>
        {/* Large feature item */}
        <BentoItem colSpan={2} rowSpan={2} className="feature-bg-1">
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', display: 'inline-block', marginBottom: '1rem', width: 'fit-content' }}>
            ✨ Featured
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Main Feature Block</h2>
          <p style={{ marginTop: 'auto', fontSize: '1.1rem', opacity: 0.9 }}>
            This card spans 2 columns and 2 rows, giving it the most prominence in the grid.
          </p>
        </BentoItem>

        <BentoItem colSpan={1} rowSpan={1} bgUrl="/heroo.png">
          <h3>Hero Visual</h3>
          <p style={{ marginTop: 'auto', fontWeight: 500, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>heroo.png applied</p>
        </BentoItem>
        
        <BentoItem colSpan={1} rowSpan={1} bgUrl="/demo.jpg">
          <h3>Demo Presentation</h3>
          <p style={{ marginTop: 'auto', fontWeight: 500, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>demo.jpg applied</p>
        </BentoItem>

        <BentoItem colSpan={2} rowSpan={1}>
          <h3 style={{ fontSize: '1.5rem' }}>Wide Feature Strip</h3>
          <p style={{ marginTop: '1rem' }}>Spans 2 columns, perfect for timelines, graphs, or extended text content.</p>
        </BentoItem>

        <BentoItem colSpan={1} rowSpan={2}>
          <h3>Tall Feature</h3>
          <div style={{ flex: 1, border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '12px', margin: '1rem 0' }}></div>
          <p style={{ marginTop: 'auto' }}>Spans 2 rows</p>
        </BentoItem>

        <BentoItem colSpan={1} rowSpan={1} bgUrl="/heroo.png">
          <h3>Small Grid 3</h3>
          <p style={{ marginTop: 'auto', fontWeight: 500, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>heroo.png again</p>
        </BentoItem>

        <BentoItem colSpan={2} rowSpan={1}>
          <h3>Another Wide Box</h3>
          <p style={{ marginTop: 'auto' }}>Spans 2 columns</p>
        </BentoItem>
      </BentoGrid>
    </div>
  );
}

export default App;
