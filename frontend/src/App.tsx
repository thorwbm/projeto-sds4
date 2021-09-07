import BarChart from "componets/BarChart";
import DataTable from "componets/DataTable";
import DonutChart from "componets/DonutChart";
import Footer from "componets/Footer";
import NavBar from "componets/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="text-primary py-3">Dashboar de vendas</h1>

        <div className="row px-3">
        <div className= "col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart/>
          </div>

          <div className= "col-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <DonutChart/>
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
        </div>
        <DataTable />
      </div>

      <Footer/>
    </>
        );
}

        export default App;
