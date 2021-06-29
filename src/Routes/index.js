import React from "react";
import MasterRoutes from "./MasterRoutes";
import { Route } from "react-router-dom";
import checkIfAppReady from '../helpers/checkIfAppReady'
import LanguageProvider from "./language/languageProvider";
import { messages } from "../site-settings/site-translation/messages";
import Layout from '../layouts/index'
import { GlobalStyle } from "../assets/styles/global.style";
import { useMedia } from "../utils/use-media";
import UtilComponent from "./UtilComponent";
import ThemeContainer from "./themeContainer";

const HomeRoutes = () => {
  const ready = checkIfAppReady();
  const mobile = useMedia("(max-width: 580px)");
  const tablet = useMedia("(max-width: 991px)");
  const desktop = useMedia("(min-width: 992px)");
  const deviceType = { mobile, tablet, desktop }
  return ready ? <React.Fragment>
    <LanguageProvider messages={messages} >
      <ThemeContainer>
        <React.Fragment>
          <GlobalStyle />
          <Layout deviceType={deviceType}>
            <Route path="/" component={MasterRoutes} />
          </Layout>
        </React.Fragment>
      </ThemeContainer>
    </LanguageProvider>
  </React.Fragment> : <div></div>
};
export default HomeRoutes;
