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
/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
// sections for this page
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionPreFooter from "./Sections/SectionPreFooter.jsx";
import SectionFooter from "./Sections/SectionFooter.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionCards from "./Sections/SectionCards.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";

import componentsStyle from "../../assets/jss/material-kit-pro-react/views/componentsStyle.jsx";

class Components extends React.Component {
  componentDidMount() {
    var to = window.location.to.substring(
      window.location.to.lastIndexOf("#") + 1
    );
    if (window.location.to.lastIndexOf("#") > 0)
      document.getElementById(to).scrollIntoView();
    window.addEventListener("scroll", this.updateView);
    this.updateView();
  }
  componentDidUpdate() {
    var to = window.location.to.substring(
      window.location.to.lastIndexOf("#") + 1
    );
    document.getElementById(to).scrollIntoView();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateView);
  }
  easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  updateView() {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  }
  smoothScroll(target) {
    var targetScroll = document.getElementById(target);
    this.scrollTo(document.documentElement, targetScroll.offsetTop, 900);
  }
  scrollTo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start + document.getElementById("main-panel").offsetTop,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }.bind(this);
    animateScroll();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "info"
          }}
        />
        <Parallax
          image={require("../../assets/img/bg4.jpg")}
          className={classes.parallax}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <Typography variant="h1" component="h1">
                    Material Kit React{" "}
                    <span className={classes.proBadge}>PRO</span>
                  </Typography>
                  <h3 className={classes.title}>All Components</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div
          className={classNames(classes.main, classes.mainRaised)}
          id="main-panel"
        >
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <div
            className={classNames(
              classes.section,
              classes.sectionGray,
              "cd-section"
            )}
            id="footers"
          >
            <SectionPreFooter />
            <SectionFooter />
          </div>
          <SectionTypography />
          <SectionCards />
          <SectionJavascript />
          <SectionCarousel />
        </div>
        <nav id="cd-vertical-nav">
          <ul>
            <li>
              <Link
                to="#buttons"
                data-number="1"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("buttons");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Basic Elements</span>
              </Link>
            </li>
            <li>
              <Link
                to="#navigation"
                data-number="2"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("navigation");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Navigation</span>
              </Link>
            </li>
            <li>
              <Link
                to="#notifications"
                data-number="3"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("notifications");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Notifications</span>
              </Link>
            </li>
            <li>
              <Link
                to="#footers"
                data-number="4"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("footers");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Footers</span>
              </Link>
            </li>
            <li>
              <Link
                to="#typography"
                data-number="5"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("typography");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Typography</span>
              </Link>
            </li>
            <li>
              <Link
                to="#contentAreas"
                data-number="6"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("contentAreas");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Content Areas</span>
              </Link>
            </li>
            <li>
              <Link
                to="#cards"
                data-number="7"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("cards");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Cards</span>
              </Link>
            </li>
            <li>
              <Link
                to="#morphingCards"
                data-number="8"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("morphingCards");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Morphing Cards</span>
              </Link>
            </li>
            <li>
              <Link
                to="#pablo"
                data-number="9"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("javascriptComponents");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Javascript</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/?ref=mkpr-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/presentation?ref=mkpr-components"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/license?ref=mkpr-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </Link>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <Link
                  to="https://www.creative-tim.com?ref=mkpr-components"
                  target="_blank"
                >
                  Creative Tim
                </Link>{" "}
                for a better web.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

Components.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(Components);
