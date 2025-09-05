import { useState, useEffect } from 'react';
import './App.css';

export const App = () => {
  // Variables
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
    }
    fetchData()
  }, []);

  if (loading) {
    return (
      <div className="flex items-center flex-col shadow text-xs bg-white rounded-md">
        <div className="px-6 py-8 items-center">
          Laden....
        </div>
      </div>
    )
  } else {
    return (
      <div className="App font-mono h-screen">
        <div className='App-body flex justify-center items-center h-screen'>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="p-6 px-8 text-3xl flex justify-center items-center">
                      Ik ben Julius;
                  </div>
                  misschien komt hier ooit wel iets te staan...
                  voor nu even niet.
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
