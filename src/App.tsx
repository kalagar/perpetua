import { Layout } from "antd";
import React from "react";
import Router from "./router";

const { Content } = Layout;

function App() {
  return (
    <div>
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <Router />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
