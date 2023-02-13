import * as C from './styles'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { CategoryTable } from './components/CategoryTable'
import { useAppSelector } from '../../../../hooks/redux'
import { setCategoryData, setSubCategories } from '../../../../store/category'
import { useAppDispatch } from '../../../../hooks/redux/index';
import {  useState} from 'react'
import { CategoryModal } from './components/CategoryModal'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Category = () => {
  
  function createData(
    title: string,
    subcategories: number,
    category: 'income' | 'expenses' | 'investment'
  ) {
    return { title, subcategories, category };
  }

  const [categoryData, setCategoryDataState] = useState(useAppSelector((state) => state.category.categoryData))
  const [subCategories ,setSubCategoriesState] = useState(useAppSelector((state) => state.category.subCategories))
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const dispatch = useAppDispatch()

  const resetCategoryData = () => {setCategoryDataState([
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
  ]), dispatch( setCategoryData([
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
  ])) }

  const resetSubCategories = () => { setSubCategoriesState([['Salário', '13 Salário', 'Dividendos', 'Férias', 'Horas extras', 'IR', 'Outras Receitas',
  'Pensão', 'Resgate Investimentos'],['Fundo de Emergência', 'Fundo de Investimentos', 'LCI & LCA', 'Poupança', 'Previdência Privada',
  'Renda Fixa','Renda Variável', 'Tesouro Direto', 'Outras Poupanças & Investimento'],['Celular', 'Condomínio', 'Consumo de água', 'Decoração de Casa', 'Energia Elétrica', 'Gás', 'Internet/TV a cabo',
  'IPTU', 'Manutenção/Reforma da Casa', 'Prestação/ Aluguel de imóvel', 'Serviço de Limpeza', 'Telefone fixo', 'Outras moradias'],
  ['Feira/ Sacolão', 'Padaria', 'Restaurante', 'Supermercado', 'Outros(Agua,café,sorvetes)'],['Combustível', 'Estacionamento', 'Financiamento de Veículo', 'IPVA', 'Lavagem', 'Licencamento',
  'Manutenção', 'Ônibus / Metro', 'Pedágio', 'Seguro Auto', 'Taxi/Uber', 'Outros Transportes'],['Material Escolar', 'Matricula Escolar / Mensalidade', 'Outros Cursos', 'Transporte Escolar', 'Outros Educação']
  ,['Bares', 'Cinema / Teatro / Show', 'Clube / Parques / Casa Noturna', 'Festas', 'Livros / Revistas / Cds', 'Restaurantes',
  'Streaming(netflix/amazom/disney)', 'Viagens / Férias', 'Outros lazer'],['Academia', 'Cabeleireiro', 'Higiene Pessoal', 'Manicure', 'Plano de Saúde', 'Outros Saúde & Beleza'],
  ['Empréstimos', 'Imposto de Renda a Pagar', 'Juros Cheque Especial', 'Pagamentos de dividas',
    'Previdência Privada', 'Seguros', 'Tarifas Bancárias', 'Outros serviços financeiros'],['Acessórios', 'Calçados', 'Roupas', 'Outras Vestuário']
]), dispatch( setSubCategories([['Salário', '13 Salário', 'Dividendos', 'Férias', 'Horas extras', 'IR', 'Outras Receitas',
'Pensão', 'Resgate Investimentos'],['Fundo de Emergência', 'Fundo de Investimentos', 'LCI & LCA', 'Poupança', 'Previdência Privada',
'Renda Fixa','Renda Variável', 'Tesouro Direto', 'Outras Poupanças & Investimento'],['Celular', 'Condomínio', 'Consumo de água', 'Decoração de Casa', 'Energia Elétrica', 'Gás', 'Internet/TV a cabo',
'IPTU', 'Manutenção/Reforma da Casa', 'Prestação/ Aluguel de imóvel', 'Serviço de Limpeza', 'Telefone fixo', 'Outras moradias'],
['Feira/ Sacolão', 'Padaria', 'Restaurante', 'Supermercado', 'Outros(Agua,café,sorvetes)'],['Combustível', 'Estacionamento', 'Financiamento de Veículo', 'IPVA', 'Lavagem', 'Licencamento',
'Manutenção', 'Ônibus / Metro', 'Pedágio', 'Seguro Auto', 'Taxi/Uber', 'Outros Transportes'],['Material Escolar', 'Matricula Escolar / Mensalidade', 'Outros Cursos', 'Transporte Escolar', 'Outros Educação']
,['Bares', 'Cinema / Teatro / Show', 'Clube / Parques / Casa Noturna', 'Festas', 'Livros / Revistas / Cds', 'Restaurantes',
'Streaming(netflix/amazom/disney)', 'Viagens / Férias', 'Outros lazer'],['Academia', 'Cabeleireiro', 'Higiene Pessoal', 'Manicure', 'Plano de Saúde', 'Outros Saúde & Beleza'],
['Empréstimos', 'Imposto de Renda a Pagar', 'Juros Cheque Especial', 'Pagamentos de dividas',
  'Previdência Privada', 'Seguros', 'Tarifas Bancárias', 'Outros serviços financeiros'],['Acessórios', 'Calçados', 'Roupas', 'Outras Vestuário']
])) }

 const addCategory = (categoryName: string, subcategories: string[], categoryType: 'income' | 'expenses' | 'investment' | '') => {
    let clone = [...categoryData]
    clone.push(createData(categoryName, categoryData.length, categoryType))
    setCategoryDataState(clone)
    let clone2 = [...subCategories]
    clone2.push(subcategories)
    setSubCategoriesState(clone2)
    dispatch( setCategoryData(clone) )
    dispatch( setSubCategories(clone2))
    handleClose()
 }

  const addSubCategory = (pos:number, inputValues:string, setInputsValues:React.Dispatch<React.SetStateAction<string>>) => {
    if(inputValues != ''){
      let clone:string[] = [...subCategories[pos]]
      clone.push(inputValues)
      let clone2:string[][] = [...subCategories];
      clone2[pos] = clone;
      setSubCategoriesState(clone2)
      dispatch(
        setSubCategories(clone2)
      )
      setInputValue('')
      setInputsValues('')
    }
  }

  const removeSubCategory = (pos:number, posCategory:number) => {
    let clone:string[] = [...subCategories[posCategory]]
    clone.splice(pos,1)
    let clone2:string[][] = [...subCategories];
    clone2[posCategory] = clone;
    setSubCategoriesState(clone2)
    dispatch(
      setSubCategories(clone2)
    )
  }

  const handleInputValue = (event:any) => {
    setInputValue(event.target.value)
  }

  return(
    <C.Category qty={categoryData.length}>
      <C.CategoryHeader>
          <C.CategoryTitle>Categorias (Receitas & Despesas)</C.CategoryTitle>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleOpen} sx={{ fontSize: 13}}>Adicionar uma nova categoria</Button>
            <Button onClick={resetCategoryData} sx={{ fontSize: 13}}>Reiniciar categorias</Button>
            <Button onClick={()=>resetSubCategories()} sx={{ fontSize: 13}}>Reiniciar Subcategorias</Button>
        </ButtonGroup>
      </C.CategoryHeader>
      <C.CategoryTables>
          {categoryData.map((category) => (
            <CategoryTable category={category} subcategories={subCategories} 
            addSubCategory={addSubCategory} removeSubCategory={removeSubCategory}
            inputValue={inputValue} handleInputValue={handleInputValue}/>
          ))}
      </C.CategoryTables>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CategoryModal handleClose={handleClose} addCategory={addCategory} />
        </Box>
      </Modal>
    </C.Category>
  )
}