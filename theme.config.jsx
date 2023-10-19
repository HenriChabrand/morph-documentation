export default {
  logo: 'Morph',
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

