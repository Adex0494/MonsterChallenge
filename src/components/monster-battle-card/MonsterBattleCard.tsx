import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterTitle, Image, BattleMonsterTitleSmall, SkillTitle, ProgressBar } from "./MonsterBattleCard.styled"
type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
    return (
        <BattleMonsterCard centralized={!monster}>
            {!monster && <BattleMonsterTitle>{title}</BattleMonsterTitle>}
            {monster &&
                <div>
                    <Image data-testid={monster.name} src={monster.imageUrl}/>
                    <BattleMonsterTitleSmall data-testid={title}> {monster.name} </BattleMonsterTitleSmall>
                    <SkillTitle>{'HP'}</SkillTitle>
                    <ProgressBar variant='determinate' value = {monster.hp}/>
                    <SkillTitle>{'Attack'}</SkillTitle>
                    <ProgressBar variant='determinate' value = {monster.attack}/>
                    <SkillTitle>{'Defense'}</SkillTitle>
                    <ProgressBar variant='determinate' value = {monster.defense}/>
                    <SkillTitle>{'Speed'}</SkillTitle>
                    <ProgressBar variant='determinate' value = {monster.speed}/>
                </div>
            }

        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }