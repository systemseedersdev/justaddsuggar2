export default async function (ctx, inject) {
  const moduleOptions = {"accessibleIcons":true,"iconProperty":"$icon","icons":{"64":"\u002F_nuxt\u002Ficons\u002Ficon_64.dBCcPcPCmrc.png","120":"\u002F_nuxt\u002Ficons\u002Ficon_120.dBCcPcPCmrc.png","144":"\u002F_nuxt\u002Ficons\u002Ficon_144.dBCcPcPCmrc.png","152":"\u002F_nuxt\u002Ficons\u002Ficon_152.dBCcPcPCmrc.png","192":"\u002F_nuxt\u002Ficons\u002Ficon_192.dBCcPcPCmrc.png","384":"\u002F_nuxt\u002Ficons\u002Ficon_384.dBCcPcPCmrc.png","512":"\u002F_nuxt\u002Ficons\u002Ficon_512.dBCcPcPCmrc.png"}}
  inject(moduleOptions.iconProperty.replace('$', ''), retrieveIcons(moduleOptions.icons))
}

const retrieveIcons = icons => size => icons[size] || ''
