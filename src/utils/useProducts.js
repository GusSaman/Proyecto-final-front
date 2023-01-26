import React, { useState } from "react";
import { useEffect } from "react";
import products from "../assets/data/ProductsData";

function useProducts() {
    
    const productos = products;
    const [Filter,SetFilter] = useState(productos)
    const handleFilter = (e) => {
    const filterValue = e.target.value;

    

    if (filterValue === 'Nike'){
      const filteredProducts = productos.filter(
        (item)=> item.marca === 'Nike');

      SetFilter(filteredProducts)
    } 
    else if(filterValue === 'Adidas'){
        const filteredProducts = productos.filter(
          (item)=> item.marca === 'Adidas');

      SetFilter(filteredProducts)
    }
    else if (filterValue === 'Fila'){
        const filteredProducts = productos.filter(
          (item)=> item.marca === 'Fila');

      SetFilter(filteredProducts)
    } 
    else if (filterValue === 'Reebok'){
      const filteredProducts = productos.filter(
        (item)=> item.marca === 'Reebok');

    SetFilter(filteredProducts)
  } 
    else if (filterValue === 'Todas las marcas'){  
    SetFilter(productos)
  } 
  else if (filterValue === 'Running'){
    const filteredProducts = productos.filter(
      (item)=> item.categoria === 'Running');

  SetFilter(filteredProducts)
} 
else if (filterValue === 'Footbal'){
    const filteredProducts = productos.filter(
      (item)=> item.categoria === 'Footbal');

  SetFilter(filteredProducts)
} 
else if (filterValue === 'Trainning'){
    const filteredProducts = productos.filter(
      (item)=> item.categoria === 'Trainning');

  SetFilter(filteredProducts)
}
else if (filterValue === 'Outdoor'){
  const filteredProducts = productos.filter(
    (item)=> item.categoria === 'Trainning');

SetFilter(filteredProducts)
}  
else if (filterValue === 'Clasicas'){
  const filteredProducts = productos.filter(
    (item)=> item.categoria === 'Clasicas');

SetFilter(filteredProducts)
}  
else if (filterValue === 'Ojotas'){
  const filteredProducts = productos.filter(
    (item)=> item.categoria === 'Ojotas');

SetFilter(filteredProducts)
} 
else if (filterValue === 'Todas las marcas'){

SetFilter(productos)
} 
    else (
      SetFilter(productos)
    )
  };
  return {
    handleFilter,
    productos,
    Filter,

    }
}
export default useProducts;