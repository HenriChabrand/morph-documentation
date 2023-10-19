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

