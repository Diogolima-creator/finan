import * as D from './styles'


interface CardCategory{
    title: string,
    value: number,
    budget: number,
    percent: number,
}

export const CardCategory = ({title,value,budget,percent}:CardCategory) => {

  return(
    <D.DashBoardCard>
                    <D.DashBoardCardInfo>
                      <D.DashBoardCardTitleValue>
                        <D.DashBoardCardTitle color='black' fs='14'>{title}</D.DashBoardCardTitle>
                        <D.DashBoardCardValue>R$ {value}</D.DashBoardCardValue>
                      </D.DashBoardCardTitleValue>
                      <D.DashBoardCardTitleBudget>
                        <D.DashBoardCardTitle color='grey' fs='12'>Orçado</D.DashBoardCardTitle>
                        <D.DashBoardCardTitle color='grey' fs='12'>R$ {budget}</D.DashBoardCardTitle>
                      </D.DashBoardCardTitleBudget>
                    </D.DashBoardCardInfo>
                    <D.DashBoardCardPercent>
                      {(!Number.isNaN(percent) && Number.isFinite(percent)) ? Math.round(percent * 1): 0}%
                    </D.DashBoardCardPercent>
    </D.DashBoardCard>
  )
}