import * as B from './styles'
import { useEffect } from 'react'

interface BudgetCard {
  title: string 
  value: number
}

export const BudgetCard = ({title, value}:BudgetCard) => {

  return(
    <B.BudgetCard color={title === 'Receita' ? 'rgb(50,205,50)' : title === 'Despesas' ? '#fa8072' : title === 'Investimentos' ? 'rgb(204,204,0)' : 'grey' }>
        <B.BudgetCardHeader>
          <B.BudgetCardTitle>{title}</B.BudgetCardTitle>
        </B.BudgetCardHeader>
        <B.BudgetCardBody>
          <B.BudgetCardValue>R$ {value}</B.BudgetCardValue>
        </B.BudgetCardBody>
    </B.BudgetCard>
  )
}