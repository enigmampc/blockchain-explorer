const theme = {
  fonts: {
    fontFamily: `'Open Sans', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    fontFamilyCode: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
  },
  colors: {
    failed: '#d07676',
    primary: '#1ca8f8',
    secondary: '#e72e9d',
    submitted: '#1ca8f8',
    success: '#79d076',
    textCommon: '#333',
    textLight: '#999',
  },
  cards: {
    backgroundColor: '#fff',
    border: 'solid 1px #efefef',
    borderRadius: '5px',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.04)',
    paddingHorizontal: '18px',
    paddingVertical: '15px',
    textColor: '#000',
    textColorSecondary: '#333',
    titleColor: '#000',
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.08)',
    color: '#000',
    height: '60px',
  },
  footer: {
    color: '#303b3e',
  },
  themeBreakPoints: {
    lg: '992px',
    md: '768px',
    sm: '480px',
    xl: '1024px',
    xs: '320px',
    xxl: '1280px',
    xxxl: '1366px',
  },
  borders: {
    borderColor: '#d5d5d5',
    commonBorderRadius: '5px',
  },
  separation: {
    blockBottomMargin: '25px',
    blockVerticalSeparation: '16px',
  },
  paddings: {
    mainPadding: '15px',
  },
  textfield: {
    borderColor: '#d9d9d9',
    color: '#333',
    fontSize: '15px',
    fontWeight: '500',
    placeholderColor: '#666',
  },
  status: {
    error: '#954949',
    submitted: '#1576ad',
    success: '#4c904a',
  },
  taskStatus: {
    failed: '#d07676',
    submitted: '#1ca8f8',
    success: '#79d076',
  },
  modalStyle: {
    content: {
      backgroundColor: '#fff',
      borderColor: 'transparent',
      borderRadius: '5px',
      bottom: 'auto',
      boxShadow: '0 0 18px 0 rgba(0, 0, 0, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '0',
      height: 'fit-content',
      left: 'auto',
      overflow: 'hidden',
      padding: '0',
      position: 'relative',
      right: 'auto',
      top: 'auto',
      width: '550px',
    },
    overlay: {
      alignItems: 'unset',
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'auto',
      padding: '10px',
      zIndex: '12345',
    },
  },
}

export default theme
