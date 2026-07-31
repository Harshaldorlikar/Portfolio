import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default async function Icon() {
  const interBold = readFileSync(join(process.cwd(), 'src/app/fonts/inter-700.woff'))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          color: '#FFFFFF',
          fontSize: '36px',
          fontFamily: '"Inter"',
          border: '2px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '16px',
        }}
      >
        HD
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
