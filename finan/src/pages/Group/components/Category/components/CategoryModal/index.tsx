import * as C from './styles'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect} from 'react';


interface CategoryModal{
  handleClose: () => void,
  addCategory: (categoryName:string, subcategories: string[], categoryType: 'income' | 'expenses' | 'investment'| '') => void
}
export const CategoryModal = ({handleClose, addCategory}:CategoryModal) => {
  
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [subcategoriesArray, setSubcategoriesArray] = useState<string[]>([])
  const [inputCategory, setInputCategory] = useState('')
  const [inputSubCategories, setInputSubCategories] = useState('')
  const [inputTypeCategory, setInputTypeCategory] = useState<'income' | 'expenses' | 'investment' | ''>('')
  const [defaultValueText, setDefaultValueText] = useState('')

  const handleInputCategory = (event:any) => { setInputCategory(event.target.value)}

  const handleInputSubCategory = (event:any) => { setInputSubCategories(event.target.value) } 

  const handleChangeTypeCategory = (event:any) => { setInputTypeCategory(event.target.value) }

  const addSubCategory = () => { 
    setDefaultValueText(defaultValueText.concat(`${inputSubCategories};`))
    let clone:string[] = [...subcategoriesArray]
    clone.push(inputSubCategories)
    setSubcategoriesArray(clone)
  }

  useEffect(() => {
      if(inputCategory != '' && defaultValueText != '') {
        setButtonDisabled(false)
      }else{
        setButtonDisabled(true)
      }
  },[inputCategory,defaultValueText])

  return(
    <C.CategoryModal>
      <C.CategoryModalTitle>
            Criar uma nova categoria
      </C.CategoryModalTitle>
      <C.CategoryModalInputs>
        <TextField onChange={handleInputCategory} sx={{ margin:.4, width:200 }} id="standard-basic" label="Categoria" variant="standard" />
        <TextField onChange={handleInputSubCategory} sx={{ margin:.4, width:200 }} id="standard-basic" label="SubCategoria" variant="standard" />
        <TextField
              sx={{ margin:'0 4px', width:150, height: '100%', '.MuiSelect-select':{  padding: '8px 12px',lineHeight:2, }, '.MuiFormLabel-root': { height:'100%'} }}
              select
              id="select-1"
              label="Tipo"
              margin="dense"
              onChange={handleChangeTypeCategory}
            >
              <MenuItem value={'Income'}>Receita</MenuItem>
              <MenuItem value={'Investment'}>Investimento</MenuItem>
              <MenuItem value={'Expense'}>Despesas</MenuItem>
        </TextField>
        <Button onClick={inputSubCategories != '' ? addSubCategory: undefined} sx={{ padding: 2, height:40}} variant="outlined">Add</Button>
      </C.CategoryModalInputs>
      <C.CategoryModalTextArea>
          <TextareaAutosize
          maxRows={4}
          aria-label="maximum height"
          placeholder= "Área que aparecerá as subcategorias"
          defaultValue={defaultValueText}
          disabled={true}
          style={{ width:'250px', minWidth: '100%', minHeight:50, maxHeight:250, maxWidth: '100%' }}
          />
      </C.CategoryModalTextArea>
      <C.CategoryModalButtons>
          <Button onClick={handleClose} sx={{ margin:1}} variant="contained">Sair</Button>
          <Button onClick={()=> addCategory(inputCategory, subcategoriesArray, inputTypeCategory)} disabled={buttonDisabled} sx={{ margin:1}} variant="contained">Adicionar</Button>
      </C.CategoryModalButtons>
    </C.CategoryModal>
  )
}