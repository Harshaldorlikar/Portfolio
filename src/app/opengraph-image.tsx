import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Harshal Dorlikar | Founder & Builder'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const interRegular = readFileSync(join(process.cwd(), 'src/app/fonts/inter-400.woff'))
  const interBold = readFileSync(join(process.cwd(), 'src/app/fonts/inter-700.woff'))
  const playfairMedium = readFileSync(join(process.cwd(), 'src/app/fonts/playfair-500.woff'))

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Inter"',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, rgba(10,10,10,1) 70%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '16px',
            padding: '60px',
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontFamily: '"Playfair Display"',
              fontSize: '80px',
              fontWeight: 500,
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Harshal Dorlikar
          </h1>
          <h2
            style={{
              fontFamily: '"Inter"',
              fontSize: '48px',
              fontWeight: 700,
              margin: 0,
              color: '#D4AF37',
              letterSpacing: '-0.01em',
            }}
          >
            Founder, Kosmo
          </h2>
          <p
            style={{
              fontFamily: '"Inter"',
              fontSize: '32px',
              color: '#a1a1aa',
              margin: 0,
              marginTop: '40px',
              fontWeight: 400,
              letterSpacing: '0.05em',
            }}
          >
            Turning Ideas into flawless Prompts.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: interBold,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Playfair Display',
          data: playfairMedium,
          weight: 500,
          style: 'normal',
        },
      ],
    }
  )
}
