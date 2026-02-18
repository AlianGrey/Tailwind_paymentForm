import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PaymentForm } from './Bank.tsx'
import '@fortawesome/fontawesome-free/css/all.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PaymentForm />
  </StrictMode>,
)
