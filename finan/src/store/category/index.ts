import { createSlice } from '@reduxjs/toolkit'


interface CategoryDataType{
  title: string,
  subcategories: number,
  category: 'income' | 'expenses' | 'investment'
}

// Define a type for the slice state
interface CategoryState {
    categoryData:CategoryDataType[],
    subCategories: string[][]
}


  // Define the initial state using that type
const initialState: CategoryState = {
    categoryData:[
      {title:'Receitas', subcategories:0, category:'income'},
      {title:'Investimentos', subcategories:1, category:'investment'},
      {title:'Moradia', subcategories:2, category:'expenses'},
      {title:'Alimentação', subcategories:3, category:'expenses'},
      {title:'Transporte', subcategories:4, category:'expenses'},
      {title:'Educação', subcategories:5, category:'expenses'},
      {title:'Lazer', subcategories:6, category:'expenses'},
      {title:'Saúde & Beleza', subcategories:7, category:'expenses'},
      {title:'Serviços Financeiros', subcategories:8, category:'expenses'},
      {title:'Vestuário', subcategories:9, category:'expenses'}
    ],
    subCategories: [['Salário', '13 Salário', 'Dividendos', 'Férias', 'Horas extras', 'IR', 'Outras Receitas',
    'Pensão', 'Resgate Investimentos'],['Fundo de Emergência', 'Fundo de Investimentos', 'LCI & LCA', 'Poupança', 'Previdência Privada',
    'Renda Fixa','Renda Variável', 'Tesouro Direto', 'Outras Poupanças & Investimento'],['Celular', 'Condomínio', 'Consumo de água', 'Decoração de Casa', 'Energia Elétrica', 'Gás', 'Internet/TV a cabo',
    'IPTU', 'Manutenção/Reforma da Casa', 'Prestação/ Aluguel de imóvel', 'Serviço de Limpeza', 'Telefone fixo', 'Outras moradias'],
    ['Feira/ Sacolão', 'Padaria', 'Restaurante', 'Supermercado', 'Outros(Agua,café,sorvetes)'],['Combustível', 'Estacionamento', 'Financiamento de Veículo', 'IPVA', 'Lavagem', 'Licencamento',
    'Manutenção', 'Ônibus / Metro', 'Pedágio', 'Seguro Auto', 'Taxi/Uber', 'Outros Transportes'],['Material Escolar', 'Matricula Escolar / Mensalidade', 'Outros Cursos', 'Transporte Escolar', 'Outros Educação']
    ,['Bares', 'Cinema / Teatro / Show', 'Clube / Parques / Casa Noturna', 'Festas', 'Livros / Revistas / Cds', 'Restaurantes',
    'Streaming(netflix/amazom/disney)', 'Viagens / Férias', 'Outros lazer'],['Academia', 'Cabeleireiro', 'Higiene Pessoal', 'Manicure', 'Plano de Saúde', 'Outros Saúde & Beleza'],
    ['Empréstimos', 'Imposto de Renda a Pagar', 'Juros Cheque Especial', 'Pagamentos de dividas',
      'Previdência Privada', 'Seguros', 'Tarifas Bancárias', 'Outros serviços financeiros'],['Acessórios', 'Calçados', 'Roupas', 'Outras Vestuário']
  ]
}

export const categorySlice = createSlice({
  name: 'category',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = action.payload
    },
    setSubCategories: (state, action) => {
      state.subCategories = action.payload
    }
  },
})

export const { setCategoryData, setSubCategories  } = categorySlice.actions

export default categorySlice.reducer