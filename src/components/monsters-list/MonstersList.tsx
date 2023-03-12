import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { Monster } from "../../models/interfaces/monster.interface"
import { setSelectedMonster, setSelectedCpuMonster } from "../../reducers/monsters/monsters.actions"
import { Image, ListTitle, MonsterCard, MonsterName, MonstersSection } from "./MonstersList.styled"

type MonstersListProps = {
    monsters: Monster[],
    selectedCpuMonster?: Monster | null,
    cleanWinnerText?: Function
}

const MonstersList: React.FC<MonstersListProps> = ({ monsters, selectedCpuMonster, cleanWinnerText }) => {
    const dispatch = useAppDispatch();

    const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);

    const handleMonsterClick = (monster: Monster) => {
        if (cleanWinnerText) cleanWinnerText()
        const value = selectedMonsterId === monster.id ? null : monster.id
        setSelectedMonsterId(value)
        dispatch(setSelectedMonster(!value ? null : monster));
        if (!value && selectedCpuMonster) dispatch(setSelectedCpuMonster(null))
        else{
            const random = Math.round(Math.random()*(monsters.length-2))
            dispatch(setSelectedCpuMonster(monsters.filter(monsterItem => monsterItem.id !== monster?.id)[random]))
        }
    }

    return (
        <div>
            <ListTitle>{monsters.length > 0 ? 'Select your monster': 'No monsters available'}</ListTitle>

            <MonstersSection data-testid="monsters-list-section">
                {monsters.map(monster => (
                    <MonsterCard key={monster.id} onClick={() => handleMonsterClick(monster)} selected={monster.id === selectedMonsterId} data-testid={monster.id}>
                        <Image src={monster.imageUrl} />
                        <MonsterName>
                            {monster.name}
                        </MonsterName>
                    </MonsterCard>
                ))}
            </MonstersSection>
        </div>
    )
}

export { MonstersList }