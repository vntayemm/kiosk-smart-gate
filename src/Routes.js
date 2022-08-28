import React from "react";
import Truyvniuchnhxemoc from "pages/Truyvniuchnhxemoc";
import Mnhnhthaotcxevo from "pages/Mnhnhthaotcxevo";
import ChititContainer from "pages/ChititContainer";
import InEIOthcng from "pages/InEIOthcng";
import XcnhnEIO from "pages/XcnhnEIO";
import Cuhnhlnthitbngoivi from "pages/Cuhnhlnthitbngoivi";
import InphiuvtrChachnEIO from "pages/InphiuvtrChachnEIO";
import Truyvnlnhgiaonhn from "pages/Truyvnlnhgiaonhn";
import ADMINngnhp from "pages/ADMINngnhp";
import Mnhnhch from "pages/Mnhnhch";
import InphiuEIR from "pages/InphiuEIR";
import Truyvnthngtincontainer from "pages/Truyvnthngtincontainer";
import Truyvnthngtincontainermdropdown from "pages/Truyvnthngtincontainermdropdown";
import InphiuvtrchnEIO from "pages/InphiuvtrchnEIO";
import Mnhnhthaotcxera from "pages/Mnhnhthaotcxera";
import EIOinthcngcli from "pages/EIOinthcngcli";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/eiointhcngcli" element={<EIOinthcngcli />} />
        <Route path="/mnhnhthaotcxera" element={<Mnhnhthaotcxera />} />
        <Route path="/inphiuvtrchneio" element={<InphiuvtrchnEIO />} />
        <Route
          path="/truyvnthngtincontainermdropdown"
          element={<Truyvnthngtincontainermdropdown />}
        />
        <Route
          path="/truyvnthngtincontainer"
          element={<Truyvnthngtincontainer />}
        />
        <Route path="/inphiueir" element={<InphiuEIR />} />
        <Route path="/mnhnhch" element={<Mnhnhch />} />
        <Route path="/adminngnhp" element={<ADMINngnhp />} />
        <Route path="/truyvnlnhgiaonhn" element={<Truyvnlnhgiaonhn />} />
        <Route path="/inphiuvtrchachneio" element={<InphiuvtrChachnEIO />} />
        <Route path="/cuhnhlnthitbngoivi" element={<Cuhnhlnthitbngoivi />} />
        <Route path="/xcnhneio" element={<XcnhnEIO />} />
        <Route path="/ineiothcng" element={<InEIOthcng />} />
        <Route path="/chititcontainer" element={<ChititContainer />} />
        <Route path="/mnhnhthaotcxevo" element={<Mnhnhthaotcxevo />} />
        <Route path="/truyvniuchnhxemoc" element={<Truyvniuchnhxemoc />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
