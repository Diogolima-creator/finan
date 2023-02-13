import * as C from './styles'
import Button from '@mui/material/Button'
import { useAppDispatch } from '../../../../../../hooks/redux'
import { useAppSelector } from '../../../../../../hooks/redux/index';
import { setCategoryData, setSubCategories } from '../../../../../../store/category';
import { useEffect, useState, useRef } from 'react';

interface categoryData {
  category:{
    title: string,
    subcategories: number,
    category: 'income' | 'expenses' | 'investment'
  },
  subcategories: string[][],
  addSubCategory: (pos:number, inputValues:string, setInputsValues:React.Dispatch<React.SetStateAction<string>>) => void,
  removeSubCategory: (pos:number, posCategory:number) => void,
  inputValue: string,
  handleInputValue: (event:any) => void
}



export const CategoryTable = ({category, subcategories, addSubCategory, removeSubCategory, inputValue, handleInputValue}:categoryData) => {

  const [inputsValues, setInputsValues] = useState('')
  
  const handleInputsValues = (event:any) => {
    setInputsValues(event.target.value)
    handleInputValue(event)
  }
  
  return(
    <C.CategoryTable>
      <C.CategoryTableHeader>
              <C.CategoryTableTitle color='white' weight='bold'>{category.title}</C.CategoryTableTitle>
              <C.CategoryTableInputButton>  
                <input onChange={handleInputsValues} value={inputsValues} id={`input-${category.title}`} maxLength={32} placeholder='Subcategoria'/>
                <Button onClick={()=> {addSubCategory(category.subcategories, inputsValues, setInputsValues)}}  sx={{ padding: '10px 5px', border: '1px solid rgb(255,255,255,.5)', marginRight:10, height:15, margin: 0, minWidth:15 }} size='small' variant="contained">add</Button>
              </C.CategoryTableInputButton>
      </C.CategoryTableHeader>
      <C.CategoryTableItems>
        {subcategories[category.subcategories].map((subcategories,key) => (
        <C.CategoryTableItem>
          <C.CategoryTableTitle color='black'>{subcategories}</C.CategoryTableTitle>
          <Button onClick={()=>removeSubCategory(key, category.subcategories)} sx={{ padding: .6, marginRight:10, height:15, margin: 0, minWidth:15 }} size='small' variant="contained">X</Button>
        </C.CategoryTableItem>
        ))}
      </C.CategoryTableItems>
    </C.CategoryTable>
   
  )
}