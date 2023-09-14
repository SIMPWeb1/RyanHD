function copyAddress(params) {
    navigator.clipboard.writeText("0x0d1Ce10163579680876C6Fb93586c10a3e44F3ed");
}

function onLinkClick(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
    // will scroll to 4th h3 element
  }