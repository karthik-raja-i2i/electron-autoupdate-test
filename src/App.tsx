import { useEffect, useState } from 'react'
import UpdateElectron from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [checking, setChecking] = useState(false)
  // const checkingForUpdate = () => {
  //   console.log('checking for update')
  // }
  // const onUpdateCanAvailable = ({ version, newVersion, update }) => {
  //   console.log('update available', { available: update, version, newVersion })
  // }
  // const onUpdateError = () => console.log('update error')
  // const onDownloadProgress = () => console.log('dowload in progress')
  // const onUpdateDownloaded = () => console.log('update downloaded')

  // const checkUpdate = async () => {
  //   setChecking(true)
  //   const result = await window.ipcRenderer.invoke('check-update')
  //   console.log(result, 'rs')
  //   setChecking(false)
  // }

  // useEffect(() => {
  //   // Get version information and whether to update
  //   window.ipcRenderer.on('checking-for-update', checkingForUpdate)
  //   window.ipcRenderer.on('update-can-available', onUpdateCanAvailable)
  //   window.ipcRenderer.on('download-progress', onDownloadProgress)
  //   window.ipcRenderer.on('update-downloaded', onUpdateDownloaded)
  //   window.ipcRenderer.on('update-error', onUpdateError)

  //   return () => {
  //     window.ipcRenderer.off('checking-for-update', checkingForUpdate)
  //     window.ipcRenderer.off('update-can-available', onUpdateCanAvailable)
  //     window.ipcRenderer.off('download-progress', onDownloadProgress)
  //     window.ipcRenderer.off('update-downloaded', onUpdateDownloaded)
  //     window.ipcRenderer.off('update-error', onUpdateError)
  //   }
  // }, [])
  return (
    <div className='App'>
      <div className='logo-box'>
        <a href='https://github.com/electron-vite/electron-vite-react' target='_blank'>
          <img src={logoVite} className='logo vite' alt='Electron + Vite logo' />
          <img src={logoElectron} className='logo electron' alt='Electron + Vite logo' />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Electron + Vite logo to learn more
      </p>
      <div className='flex-center'>
        Place static files into the<code>/public</code> folder <img style={{ width: '5em' }} src='./node.svg' alt='Node logo' />
      </div>

      <UpdateElectron />
      <button onClick={() => window.electronAPI.setTitle('dummy')}>Change title</button>
      {/* {checking && <div>Checking for update...</div>} */}
    </div>
  )
}

export default App