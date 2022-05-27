import { createGlobalStyle, DefaultTheme } from 'styled-components'

/* eslint-disable sort-keys-fix/sort-keys-fix */
const BASELINE = 1

const SPACING = {
  // 4px
  xxs: `${BASELINE * 0.25}em`,

  // 8px
  xs: `${BASELINE * 0.5}em`,

  // 12px
  s: `${BASELINE * 0.75}em`,

  // 16px
  m: `${BASELINE}em`,

  // 24px
  xm: `${BASELINE * 1.5}em`,

  // 32px
  l: `${BASELINE * 2}em`,

  // 44px
  xl: `${BASELINE * 2.75}em`,

  // 64px
  xxl: `${BASELINE * 4}em`,

  // 128px
  xxxl: `${BASELINE * 8}em`,

  // 256px
  xxxxl: `${BASELINE * 16}em`,
}

const GlobalSpacingStyle = createGlobalStyle<{ theme: DefaultTheme }>`

  /* Margin */
  .fy-m-m {
    margin: ${SPACING.m};
  }

  .fy-m-l {
    margin: ${SPACING.l};
  }

  .fy-m-xs {
    margin: ${SPACING.xs};
  }

  .fy-m-xxs {
    margin: ${SPACING.xxs};
  }

  /* Margin RIGHT */
  .fy-mr-xxs {
    margin-right: ${SPACING.xxs};
  }
  .fy-mr-xs {
    margin-right: ${SPACING.xs};
  }
  .fy-mr-s {
    margin-right: ${SPACING.s};
  }
  .fy-mr-m {
    margin-right: ${SPACING.m};
  }
  .fy-mr-xm {
    margin-right: ${SPACING.xm};
  }
  .fy-mr-l {
    margin-right: ${SPACING.l};
  }
  .fy-mr-xl {
    margin-right: ${SPACING.xl};
  }
  .fy-mr-xxl {
    margin-right: ${SPACING.xxl};
  }
  .fy-mr-xxxl {
    margin-right: ${SPACING.xxxl};
  }
  .fy-mr-xxxxl {
    margin-right: ${SPACING.xxxxl};
  }

  /* Margin LEFT */
  .fy-ml-xxs {
    margin-left: ${SPACING.xxs};
  }
  .fy-ml-xs {
    margin-left: ${SPACING.xs};
  }
  .fy-ml-s {
    margin-left: ${SPACING.s};
  }
  .fy-ml-m {
    margin-left: ${SPACING.m};
  }
  .fy-ml-xm {
    margin-left: ${SPACING.xm};
  }
  .fy-ml-l {
    margin-left: ${SPACING.l};
  }
  .fy-ml-xl {
    margin-left: ${SPACING.xl};
  }
  .fy-ml-xxl {
    margin-left: ${SPACING.xxl};
  }
  .fy-ml-xxxl {
    margin-left: ${SPACING.xxxl};
  }

  /* Margin HORIZON */
  .fy-mh-xxs {
    margin-left: ${SPACING.xxs};
    margin-right: ${SPACING.xxs};
  }
  .fy-mh-xs {
    margin-left: ${SPACING.xs};
    margin-right: ${SPACING.xs};
  }
  .fy-mh-s {
    margin-left: ${SPACING.s};
    margin-right: ${SPACING.s};
  }
  .fy-mh-m {
    margin-right: ${SPACING.m};
    margin-left: ${SPACING.m};
  }
  .fy-mh-xm {
    margin-right: ${SPACING.xm};
    margin-left: ${SPACING.xm};
  }
  .fy-mh-l {
    margin-right: ${SPACING.l};
    margin-left: ${SPACING.l};
  }
  .fy-mh-xl {
    margin-right: ${SPACING.xl};
    margin-left: ${SPACING.xl};
  }
  .fy-mh-xxl {
    margin-right: ${SPACING.xxl};
    margin-left: ${SPACING.xxl};
  }
  .fy-mh-xxxl {
    margin-right: ${SPACING.xxxl};
    margin-left: ${SPACING.xxxl};
  }

  /* Margin VERTICAL */
  .fy-mv-xxs {
    margin-top: ${SPACING.xxs};
    margin-bottom: ${SPACING.xxs};
  }
  .fy-mv-xs {
    margin-top: ${SPACING.xs};
    margin-bottom: ${SPACING.xs};
  }
  .fy-mv-s {
    margin-top: ${SPACING.s};
    margin-bottom: ${SPACING.s};
  }
  .fy-mv-m {
    margin-top: ${SPACING.m};
    margin-bottom: ${SPACING.m};
  }
  .fy-mv-xm {
    margin-top: ${SPACING.xm};
    margin-bottom: ${SPACING.xm};
  }
  .fy-mv-l {
    margin-top: ${SPACING.l};
    margin-bottom: ${SPACING.l};
  }
  .fy-mv-xl {
    margin-top: ${SPACING.xl};
    margin-bottom: ${SPACING.xl};
  }
  .fy-mv-xxl {
    margin-top: ${SPACING.xxl};
    margin-bottom: ${SPACING.xxl};
  }

  /* Margin BOTTOM */
  .fy-mb-xxs {
    margin-bottom: ${SPACING.xxs};
  }
  .fy-mb-xs {
    margin-bottom: ${SPACING.xs};
  }
  .fy-mb-s {
    margin-bottom: ${SPACING.s};
  }
  .fy-mb-xm {
    margin-bottom: ${SPACING.xm};
  }
  .fy-mb-m {
    margin-bottom: ${SPACING.m};
  }
  .fy-mb-l {
    margin-bottom: ${SPACING.l};
  }
  .fy-mb-xl {
    margin-bottom: ${SPACING.xl};
  }
  .fy-mb-xxl {
    margin-bottom: ${SPACING.xxl};
  }

  /* Margin TOP */
  .fy-mt-xxs {
    margin-top: ${SPACING.xxs};
  }
  .fy-mt-xs {
    margin-top: ${SPACING.xs};
  }
  .fy-mt-s {
    margin-top: ${SPACING.s};
  }
  .fy-mt-m {
    margin-top: ${SPACING.m};
  }
  .fy-mt-xm {
    margin-top: ${SPACING.xm};
  }
  .fy-mt-l {
    margin-top: ${SPACING.l};
  }
  .fy-mt-xl {
    margin-top: ${SPACING.xl};
  }
  .fy-mt-xxl {
    margin-top: ${SPACING.xxl};
  }
  .fy-mt-xxxl {
    margin-top: ${SPACING.xxxl};
  }

  /* Padding */
  .fy-p-xxs {
    padding: ${SPACING.xxs};
  }
  .fy-p-xs {
    padding: ${SPACING.xs};
  }
  .fy-p-s {
    padding: ${SPACING.s};
  }
  .fy-p-m {
    padding: ${SPACING.m};
  }
  .fy-p-xm {
    padding: ${SPACING.xm};
  }
  .fy-p-xl {
    padding: ${SPACING.xl};
  }
  .fy-p-l {
    padding: ${SPACING.l};
  }

  /* Padding HORIZON */
  .fy-ph-xxs {
    padding-left: ${SPACING.xxs};
    padding-right: ${SPACING.xxs};
  }
  .fy-ph-xs {
    padding-left: ${SPACING.xs};
    padding-right: ${SPACING.xs};
  }
  .fy-ph-s {
    padding-left: ${SPACING.s};
    padding-right: ${SPACING.s};
  }
  .fy-ph-m {
    padding-left: ${SPACING.m};
    padding-right: ${SPACING.m};
  }
  .fy-ph-xm {
    padding-left: ${SPACING.xm};
    padding-right: ${SPACING.xm};
  }
  .fy-ph-l {
    padding-left: ${SPACING.l};
    padding-right: ${SPACING.l};
  }
  .fy-ph-xxl {
    padding-left: ${SPACING.xxl};
    padding-right: ${SPACING.xxl};
  }
  .fy-ph-xxxl {
    padding-left: ${SPACING.xxxl};
    padding-right: ${SPACING.xxxl};
  }
  .fy-ph-xxxxl {
    padding-left: ${SPACING.xxxxl};
    padding-right: ${SPACING.xxxxl};
  }

  /* Padding VERTICAL */
  .fy-pv-xxs {
    padding-top: ${SPACING.xxs};
    padding-bottom: ${SPACING.xxs};
  }
  .fy-pv-s {
    padding-top: ${SPACING.s};
    padding-bottom: ${SPACING.s};
  }
  .fy-pv-xs {
    padding-top: ${SPACING.xs};
    padding-bottom: ${SPACING.xs};
  }
  .fy-pv-m {
    padding-top: ${SPACING.m};
    padding-bottom: ${SPACING.m};
  }
  .fy-pv-xm {
    padding-top: ${SPACING.xm};
    padding-bottom: ${SPACING.xm};
  }
  .fy-pv-l {
    padding-top: ${SPACING.l};
    padding-bottom: ${SPACING.l};
  }
  .fy-pv-xl {
    padding-top: ${SPACING.xl};
    padding-bottom: ${SPACING.xl};
  }

  .fy-pv-xxl {
    padding-top: ${SPACING.xxl};
    padding-bottom: ${SPACING.xxl};
  }

  /* Padding BOTTOM */
  .fy-pb-xs {
    padding-bottom: ${SPACING.xs};
  }
  .fy-pb-s {
    padding-bottom: ${SPACING.s};
  }
  .fy-pb-m {
    padding-bottom: ${SPACING.m};
  }
  .fy-pb-xm {
    padding-bottom: ${SPACING.xm};
  }
  .fy-pb-l {
    padding-bottom: ${SPACING.l};
  }
  .fy-pb-xxl {
    padding-bottom: ${SPACING.xxl};
  }
  .fy-pb-xxxl {
    padding-bottom: ${SPACING.xxxl};
  }

  /* Padding HORIZON */
  .fy-ph-xl {
    padding-left: ${SPACING.xl};
    padding-right: ${SPACING.xl};
  }

  /* Padding LEFT */
  .fy-pl-s {
    padding-left: ${SPACING.s};
  }
  .fy-pl-m {
    padding-left: ${SPACING.m};
  }
  .fy-pl-xm {
    padding-left: ${SPACING.xm};
  }
  .fy-pl-l {
    padding-left: ${SPACING.l};
  }
  .fy-pl-xl {
    padding-left: ${SPACING.xl};
  }
  .fy-pl-xxl {
    padding-left: ${SPACING.xxl};
  }

  /* padding RIGHT */
  .fy-pr-xs {
    padding-right: ${SPACING.xs};
  }
  .fy-pr-s {
    padding-right: ${SPACING.s};
  }
  .fy-pr-m {
    padding-right: ${SPACING.m};
  }
  .fy-pr-xm {
    padding-right: ${SPACING.xm};
  }
  .fy-pr-l {
    padding-right: ${SPACING.l};
  }
  .fy-pr-xl {
    padding-right: ${SPACING.xl};
  }
  .fy-pr-xxl {
    padding-right: ${SPACING.xxl};
  }
  .fy-pr-xxxl {
    padding-right: ${SPACING.xxxl};
  }
  /* Padding TOP */
  .fy-pt-xxs {
    padding-top: ${SPACING.xxs};
  }
  .fy-pt-xs {
    padding-top: ${SPACING.xs};
  }
  .fy-pt-s {
    padding-top: ${SPACING.s};
  }
  .fy-pt-m {
    padding-top: ${SPACING.m};
  }
  .fy-pt-xm {
    padding-top: ${SPACING.xm};
  }
  .fy-pt-l {
    padding-top: ${SPACING.l};
  }
  .fy-pt-xl {
    padding-top: ${SPACING.xl};
  }
  .fy-pt-xxl {
    padding-top: ${SPACING.xxl};
  }
  .fy-pt-xxxl {
    padding-top: ${SPACING.xxxl};
  }
`

export { SPACING, GlobalSpacingStyle }
