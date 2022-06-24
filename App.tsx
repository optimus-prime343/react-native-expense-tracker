import { StatusBar } from 'react-native'
import { ToastProvider } from 'react-native-toast-notifications'

import Navigation from './components/navigation'

export default function App() {
  return (
    <ToastProvider>
      <StatusBar />
      <Navigation />
    </ToastProvider>
  )
}
