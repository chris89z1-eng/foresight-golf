import { useRef, useEffect } from 'react'

interface AnalysisOverlay {
  type: 'line' | 'angle' | 'circle'
  x1?: number
  y1?: number
  x2?: number
  y2?: number
  cx?: number
  cy?: number
  r?: number
  label?: string
  color: string
}

interface VideoAnalysisProps {
  videoUrl: string
  overlays: AnalysisOverlay[]
}

export const VideoAnalysis = ({ videoUrl, overlays }: VideoAnalysisProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const drawOverlays = () => {
      if (!video.paused && !video.ended) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        overlays.forEach(overlay => {
          ctx.strokeStyle = overlay.color
          ctx.lineWidth = 3
          ctx.font = '14px -apple-system, sans-serif'
          ctx.fillStyle = overlay.color

          if (overlay.type === 'line' && overlay.x1 && overlay.y1 && overlay.x2 && overlay.y2) {
            ctx.beginPath()
            ctx.moveTo(overlay.x1, overlay.y1)
            ctx.lineTo(overlay.x2, overlay.y2)
            ctx.stroke()
            
            if (overlay.label) {
              ctx.fillText(overlay.label, overlay.x1, overlay.y1 - 10)
            }
          } else if (overlay.type === 'circle' && overlay.cx && overlay.cy && overlay.r) {
            ctx.beginPath()
            ctx.arc(overlay.cx, overlay.cy, overlay.r, 0, 2 * Math.PI)
            ctx.stroke()
          }
        })
        
        requestAnimationFrame(drawOverlays)
      }
    }

    video.addEventListener('play', () => {
      drawOverlays()
    })
  }, [overlays])

  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        style={{ width: '100%', display: 'block' }}
      />
      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}
