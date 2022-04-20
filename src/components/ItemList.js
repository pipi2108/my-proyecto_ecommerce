import Item from "./Item";
import { Box } from '@mui/material';

const ItemList = ({items}) => {
    return (
        <Box className="productos">
            {items.map((product)=>{
                return <Item key={product.id} producto={product}/>
            })}
        </Box>
    
    )   
}

export default ItemList