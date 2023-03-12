import styled from "@emotion/styled"
import { Button, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const PageContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '35px',
  maxWidth: '820px',
  margin: '0 auto'
}))

export const BattleSection = styled.section(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '25px'
}))

 export const WinnerContainer = styled.div(() => ({
  width: '814px',
  height: '61px',
  background: '#E1F8FF',
  border: '1px solid #000000',
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center'
 }))

 export const WinnerText = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  lineHeight: '26px',
  color: colors.black,
  marginLeft: '28px'
}))

export const StartBattleButton = styled(Button)(({ disabled }) => ({
  background: disabled ? colors.lightGreen : colors.darkGreen,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '21px',
  color: `${colors.white} !important`,
  padding: '12px 30px',
  textTransform: 'capitalize',
  '&:hover': {
    background: colors.darkGreenHover
  }
}))
