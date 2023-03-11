import styled from "@emotion/styled"
import { Card, LinearProgress, linearProgressClasses, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const BattleMonsterCard = styled(Card, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    padding: '13px 11px',
    width: '285px',
    height: '389px',
    background: colors.white,
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    display: centralized ? 'flex' : 'auto',
    alignItems: centralized ? 'center' : 'auto',
    justifyContent: centralized ? 'center' : 'auto',
}))

export const Image = styled.img( () => ({
    width: '283px',
    height: '178px',
    filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
    borderRadius: '7px',
    marginBottom: '14px'
}))

export const BattleMonsterTitle = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '42px',
    color: colors.black,
}))

export const BattleMonsterTitleSmall = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '22px',
    lineHeight: '26px',
    color: colors.black,
    marginBottom: '16px',
}))

export const SkillTitle = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.black,
    marginBottom: '5px',
}))


export const ProgressBar = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.progressBarBackground,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor: colors.progressColor,
    },
    marginBottom: '11px',
}));