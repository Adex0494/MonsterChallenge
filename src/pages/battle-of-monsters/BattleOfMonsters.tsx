import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { fetchMonstersData } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectSelectedMonster, selectSelectedCpuMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton, WinnerContainer, WinnerText } from "./BattleOfMonsters.styled"
import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const BattleOfMonsters = () => {
    const [winnerText, setWinnerText]=useState<string>('')
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const selectedCpuMonster = useSelector(selectSelectedCpuMonster)

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);

    const handleStartBattleClick = async (): Promise<void> => {
        // Fight!
        await fetch(`${API_URL}/battle`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({monster1Id: selectedMonster?.id, monster2Id: selectedCpuMonster?.id})
          }).then((response) => response.json()).then(data => setWinnerText(`${data.winner.name} wins!`))
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} selectedCpuMonster={selectedCpuMonster} cleanWinnerText={()=> setWinnerText('')}/>

            {winnerText && <WinnerContainer data-testid="winner-section"> <WinnerText> {winnerText} </WinnerText> </WinnerContainer>}

            <BattleSection>
                <MonsterBattleCard monster={selectedMonster} title={"Player"}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button"  disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard monster={selectedCpuMonster} title="Computer"></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }