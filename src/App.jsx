import React from 'react';
import './App.css'; // Import your CSS file
import SearchBar from './components/SearchBar';
import CategoryTag from './components/CategoryTag';
import FilterSidebar from './components/FilterSidebar';
import DataList from './components/DataList';

function App() {

  return (
    <div className="App">
      <SearchBar /> 

      <CategoryTag  />

      <div className="content-wrapper"> 
        <div className="filter-sidebar">
          <FilterSidebar />
        </div>

        <div className="data-list">
          <DataList />
        </div>
      </div>
    </div>
  );
}

export default App;
