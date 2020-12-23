import { Tabs, Tab } from "react-bootstrap";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";
import Encode from "./Encode/Encode";
import Decode from "./Decode/Decode";
import "./TabsB.css";

function TabsB() {
  return (
    <GlobalProvider>
      <div className="tab-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <Tabs defaultActiveKey="encode">
                <Tab eventKey="encode" title="Encode">
                  <div className="tab-item-wrapper">
                    <Encode />
                  </div>
                </Tab>
                <Tab eventKey="decode" title="Decode">
                  <Decode />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default TabsB;
