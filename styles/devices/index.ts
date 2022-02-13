export const deviceSize = {
  mobileFold: "320px",
  mobileXs: "375px",
  mobileSm: "575px",
  mobileLg: "767px",
  tablet: "991px",
  tabletLg: "1024px",
  desktop: "1199px",
  desktopLg: "1366px",
};

export const device = {
  mobileFold: `(max-width: ${deviceSize.mobileFold})`,
  mobileXs: `(max-width: ${deviceSize.mobileXs})`,
  mobileSm: `(max-width: ${deviceSize.mobileSm})`,
  mobileLg: `(max-width: ${deviceSize.mobileLg})`,
  tablet: `(max-width: ${deviceSize.tablet})`,
  tabletLg: `(max-width: ${deviceSize.tabletLg})`,
  desktop: `(max-width: ${deviceSize.desktop})`,
  desktopLg: `(max-width: ${deviceSize.desktopLg})`,
};

export const media = {
  portrait: "screen and (orientation: portrait)",
  landscape: "screen and (orientation: landscape)",
  strict: {
    phone: `
      screen and (min-device-width: 320px)
      and (max-device-width: 926px)
      and (min-device-height: 320px)
      and (max-device-height: 926px)
      and (-webkit-min-device-pixel-ratio: 2)
    `,
    tablet: `
      screen and (min-device-width: 768px)
      and (max-device-width: 1366px)
      and (min-device-height: 768px)
      and (max-device-height: 1366px)
      and (-webkit-min-device-pixel-ratio: 2)
    `,
  },
};
