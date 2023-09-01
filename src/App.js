import './App.css';
import React, { useEffect, useState } from 'react';
import Table from '../src/Components/Table';
import Pagination from './Components/Pagination';

function App() {
  const [itensPerPage, setItensPerPage] = useState([10])
  const [currentPage, setCurrentPage] = useState(0);
  const [itens, setItens] = useState([]);

  const pages = Math.ceil(itens.length / itensPerPage)
  const startPage = currentPage * itensPerPage;
  const endPage = startPage + itensPerPage;
  const currentItens = itens.slice(startPage, endPage);

  useEffect(() => {
    fetch('alunos.json')
      .then(response => response.json())
      .then(data => {
        console.log('foi');
        setItens(data)
      })
  })
  const head = {
    id: 'ID',
    name: 'Nome',
    idade: 'Idade',
    cpf: 'CPF',
  }
  return (
    <>
      {itens && ( 
        <Table data={itens} head={head} ></Table>
      )}

      <Pagination pages={pages}
      setCurrentPage={setCurrentPage}/>
      
    </>
  );
}

export default App; 
