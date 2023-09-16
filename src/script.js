const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const CARS = [
  {
      id: 1,
      brand: "Audi",
      models: [
          {
              id: 1,
              name: "A1",
              collection: [
                  {
                      id: 1,
                      version: "Sportback",
                      year: 2019,
                      horsepower: 95,
                      engine: 999
                  },
                  {
                      id: 2,
                      version: "Citycarver",
                      year: 2019,
                      horsepower: 95,
                      engine: 999
                  }
              ]
          },
          {
              id: 2,
              name: "Q5",
              collection: [
                  {
                      id: 1,
                      version: "FY 2021",
                      year: 2021,
                      horsepower: 299,
                      engine: 1984
                  },
                  {
                      id: 2,
                      version: "Sportback",
                      year: 2021,
                      horsepower: 299,
                      engine: 1984
                  }
              ]
          },
          {
              id: 3,
              name: "TT",
              collection: [
                  {
                      id: 1,
                      version: "Coupe",
                      year: 2021,
                      horsepower: 197,
                      engine: 1984
                  },
                  {
                      id: 2,
                      version: "Roadster",
                      year: 2021,
                      horsepower: 197,
                      engine: 1984
                  }
              ]
          }
      ]
  },
  {
      id: 2,
      brand: "BMW",
      models: [
          {
              id: 1,
              name: "8 series",
              collection: [
                  {
                      id: 1,
                      version: "G1X LCI",
                      year: 2022,
                      horsepower: 333,
                      engine: 2998
                  },
                  {
                      id: 2,
                      version: "G1X",
                      year: 2019,
                      horsepower: 340,
                      engine: 2998
                  }
              ]
          },
          {
              id: 2,
              name: "X6",
              collection: [
                  {
                      id: 1,
                      version: "G06 LCI",
                      year: 2023,
                      horsepower: 530,
                      engine: 4395
                  },
                  {
                      id: 2,
                      version: "G06",
                      year: 2020,
                      horsepower: 286,
                      engine: 2993
                  }
              ]
          }
      ]
  },
];

class CarsTable extends React.Component {

  render() {
    return <table className="table__cars">
        <tbody>
            {CARS.map((brand) => (
              <React.Fragment>
                <tr key={brand.id}>
                    <td>{brand.brand}</td>
                </tr>
                {brand.models.map((model) => (
                    <React.Fragment>
                      <tr key={brand.id + "_" + model.id}>
                      <td>
                        {model.name}
                      </td>
                      <td>
                        {model.collection.map((inst) => (
                          <React.Fragment>
                            <tr key={inst.id}>
                              <td>
                              Version: {inst.version}<br/>
                              Year: {inst.horsepower}<br/>
                              Horsepower: {inst.horsepower}<br/>
                              Engine: {inst.engine}
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </td>
                      </tr>
                    </React.Fragment>
                ))}
              </React.Fragment>
            ))}
        </tbody>
    </table>
  }

}

root.render(
<React.Fragment>
  <h1>Car Specs</h1>
  <CarsTable/>
</React.Fragment>);