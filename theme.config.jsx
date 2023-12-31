export default {
  logo: (
    <>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0563 12.0222C17.3648 12.1333 16.2412 12.6149 15.6484 13.0471C14.8952 13.6151 14.6112 13.9114 14.1173 14.7141C12.8083 16.7762 13.0059 19.4311 14.5865 21.3945C15.3397 22.3206 15.9324 22.7034 18.0563 23.6542C20.9705 24.9755 21.0817 25.2842 19.8962 28.8652C19.427 30.2852 19.39 30.4705 19.4394 31.446C19.5134 32.7425 19.8468 33.6563 20.6248 34.6936C21.341 35.632 22.4647 36.4223 23.6378 36.7681C26.7742 37.7312 30.2194 35.4468 30.8121 32.0263C31.0838 30.4211 30.491 28.5812 29.2809 27.3093C28.4783 26.4696 27.8238 26.0374 26.2679 25.383C23.2303 24.0864 23.0697 23.716 24.0576 20.5178C24.675 18.5173 24.7491 17.974 24.6009 16.9368C24.1317 13.788 21.1311 11.5282 18.0563 12.0222Z" fill="black"/>
      <path d="M33.8557 12.0967C31.0773 12.7511 29.0522 15.6283 29.4227 18.419C29.6326 19.9502 30.6822 21.6542 31.9664 22.5063C32.3615 22.7779 33.3741 23.2842 34.2138 23.6547C35.2263 24.0992 35.9055 24.482 36.2389 24.8031L36.7328 25.2723L36.6587 26.2848C36.6093 27.001 36.4365 27.779 36.0907 28.8286C35.498 30.6191 35.4363 31.5576 35.8314 32.8294C36.7575 35.8177 39.7705 37.5712 42.6847 36.8056C43.6355 36.5709 44.3641 36.1388 45.2284 35.3114C47.6981 32.9529 47.5746 29.0879 44.9444 26.8405C44.4011 26.3713 42.2155 25.1488 41.9314 25.1488C41.7709 25.1488 40.9312 24.7166 40.4497 24.3956C39.4865 23.7411 39.4371 22.8644 40.215 20.4565C40.8572 18.4807 40.9436 17.8263 40.6966 16.6655C40.462 15.5172 39.9681 14.5293 39.2519 13.8008C38.6345 13.1586 37.6343 12.4918 36.9057 12.2325C36.1772 11.9732 34.6707 11.9115 33.8557 12.0967Z" fill="black"/>
      <path d="M8.17368 25.4821C5.42002 25.9389 3.24672 28.4456 3.23438 31.1746C3.23438 32.7305 3.83944 34.1505 5.03722 35.336C6.38318 36.6943 8.34656 37.287 10.1371 36.8672C12.9525 36.225 15.0517 33.2368 14.6318 30.4708C14.1502 27.359 11.1002 24.9881 8.17368 25.4821Z" fill="black"/>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Morph
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/HenriChabrand/unified-extension-demo'
  },
  primarySaturation:0,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Morph'
    }
  },
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/assets/morph-logo-50.svg"/>
      <link rel="alternate icon" href="/assets/morph-logo-50.png"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:description" content="The unified CRM extension." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://runmorph.dev/" />
      <meta property="og:site_name" content="Morph" />
      <meta property="og:locale" content="en_US" />
    </>
  ),
  footer: {
    text: (
      <span>
        Morph {new Date().getFullYear()} ©{' – build and owned by '}
        <a href="https://www.linkedin.com/in/henri-chabrand--product-manager/" target="_blank">
          Henri Chabrand
        </a>
        .
      </span>
    )
  }  
  // ... other theme options
}

