import React from "react";
import logo from "./logo.svg";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import {
  useContactQuery,
  useContactsQuery,
  useUpdateContactMutation,
} from "./services/api";

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();
  const [onUpdate, loading] = useUpdateContactMutation();
  React.useEffect(() => {
    document.title = "This is a title";
  }, []);
  return (
    <>
      <div className="App">
        <h1>React Redux RTK Query Test</h1>
        <hr />
        <button
          onClick={() => {
            onUpdate(1);
          }}
        >
          statrt
        </button>
        <hr />
        {isLoading && <h2>...loading</h2>}
        {isFetching && <h2>...isFetching</h2>}
        {error && <h2>something went Wrong</h2>}
        {isSuccess && (
          <div style={{ textAlign: "left" }}>
            <ul>
              {data?.map((contact) => {
                return (
                  <li className="data" key={contact.id}>
                    <span>{contact.title}</span>
                    <span>
                      <ContactDetail id={contact.id} />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export const ContactDetail = ({ id }: { id: number }) => {
  const { data } = useContactQuery(id);

  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default App;
