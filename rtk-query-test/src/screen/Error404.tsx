import React from "react";
import { useNavigate } from "react-router-dom";

interface MyUser {
  name: string;
  age: number;
  isVerified: boolean;
  company: string;
}
interface Mydata {
  data: MyUser[];
}
const user: MyUser = {
  name: "shan",
  age: 21,
  isVerified: false,
  company: "bitspro",
};
const MyChild: React.FC<Mydata> = ({ data }: Mydata) => {
  console.log("user", data);

  return (
    <>
      <div style={{ border: "1px solid red", padding: "10px" }}>
        <h3>this is Child</h3>
      </div>
    </>
  );
};
const Error404 = () => {
  React.useEffect(() => {
    var a = 0;
    setInterval(() => {
      a += 1;
      document.title = `shan ${a}%`;
    }, 1000);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Error 404 <br /> page not found
        </h1>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          go back
        </button>
        <MyChild
          data={[
            { name: "shan1", age: 21, isVerified: false, company: "bitspro" },
            { name: "shan2", age: 22, isVerified: true, company: "bitspro" },
            { name: "shan3", age: 23, isVerified: false, company: "bitspro" },
          ]}
        />
      </div>
    </>
  );
};

export default Error404;
