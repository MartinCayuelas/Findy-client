import { BREAKPOINTS } from 'styles/media'
import { getFontSize, getLineHeight, FyTypoSize } from 'styles/typography'

describe('Typography', () => {
  test('getFontSize', () => {
    expect(getFontSize(FyTypoSize.xxxs, BREAKPOINTS.medium)).toEqual(
      '0.45389421013370823em',
    )
    expect(getFontSize(FyTypoSize.xxs, BREAKPOINTS.medium)).toEqual(
      '0.5355951679577757em',
    )
    expect(getFontSize(FyTypoSize.xs, BREAKPOINTS.medium)).toEqual(
      '0.6320022981901753em',
    )
    expect(getFontSize(FyTypoSize.s, BREAKPOINTS.medium)).toEqual(
      '0.7457627118644068em',
    )
    expect(getFontSize(FyTypoSize.m, BREAKPOINTS.medium)).toEqual('0.88em')
    expect(getFontSize()).toEqual('0.792em')
    expect(getFontSize(FyTypoSize.l, BREAKPOINTS.medium)).toEqual('1.1264em')
    expect(getFontSize(FyTypoSize.xl, BREAKPOINTS.medium)).toEqual(
      '1.4417920000000002em',
    )
    expect(getFontSize(FyTypoSize.xxl, BREAKPOINTS.medium)).toEqual(
      '1.8454937600000003em',
    )
    expect(getFontSize(FyTypoSize.xxxl, BREAKPOINTS.medium)).toEqual(
      '2.3622320128000003em',
    )
    expect(getFontSize(FyTypoSize.xxxxl, BREAKPOINTS.medium)).toEqual(
      '3.0236569763840007em',
    )
  })

  test('getLineHeight', () => {
    expect(getLineHeight(FyTypoSize.xxxs)).toEqual('20px')
    expect(getLineHeight(FyTypoSize.xxs)).toEqual('20px')
    expect(getLineHeight(FyTypoSize.xs)).toEqual('20px')
    expect(getLineHeight(FyTypoSize.s)).toEqual('20px')
    expect(getLineHeight(FyTypoSize.m)).toEqual('20px')
    expect(getLineHeight()).toEqual('20px')
    expect(getLineHeight(FyTypoSize.l)).toEqual('22px')
    expect(getLineHeight(FyTypoSize.xl)).toEqual('28px')
    expect(getLineHeight(FyTypoSize.xxl)).toEqual('32px')
    expect(getLineHeight(FyTypoSize.xxxl)).toEqual('44px')
    expect(getLineHeight(FyTypoSize.xxxxl)).toEqual('56px')
  })
})
