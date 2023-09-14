function copyAddress(params) {
    navigator.clipboard.writeText("test address");
}

function onLinkClick(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
    // will scroll to 4th h3 element
  }