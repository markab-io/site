/*!

=========================================================
* Material Kit PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// core components
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import InfoArea from "Components/InfoArea/InfoArea.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui icons
import CardMembership from "@material-ui/icons/CardMembership";
import CardGiftCard from "@material-ui/icons/CardGiftcard";
import AttachMoney from "@material-ui/icons/AttachMoney";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";

import featuresStyle from "Assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle.jsx";

function SectionFeatures(props) {
  const { classes } = props;
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter}>
        <h3 className={classes.title}>Frequently Asked Questions</h3>
      </div>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title="Can I cancel my subscription?"
            description="Yes, you can cancel and perform other actions on your subscriptions via the My Account page."
            icon={CardMembership}
            iconColor="info"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title="Is there any discount for an annual subscription?"
            description="Yes, we offer a 40% discount if you choose annual subscription for any plan."
            icon={CardGiftCard}
            iconColor="success"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title="Which payment methods do you take?"
            description="WooCommerce comes bundled with PayPal (for accepting credit card and PayPal account payments), BACS, and cash on delivery for accepting payments."
            icon={AttachMoney}
            iconColor="success"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title="Any other questions we can answer?"
            description="We are happy to help you. Contact us."
            icon={QuestionAnswer}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionFeatures.propTypes = {
  classes: PropTypes.object
};

export default withStyles(featuresStyle)(SectionFeatures);
