import React from "react";
import { Link, browserHistory } from "react-router";
import { bindActionCreators } from "redux";
import { async } from "redux-api";
import { connect } from "react-redux";
import { Row, Col, Card, Button } from "antd";
import rest from "../../../common/rest";
import Wrapper from "../../../components/decorator/Wrapper";

const { actions } = rest;


@connect((state) => ({}))
class LogoutContainer extends React.Component {
  logout = () => {
    const { dispatch } = this.props;
    const redirect = this.props.location.query.redirect || '/';

    localStorage.removeItem('token');
    async(dispatch,
      (cb) => actions.user(cb)).then((data) => {
        browserHistory.push(redirect);
      }
    );
  };

  render () {
    return (
      <Wrapper>
        <Row type="flex" justify="space-around" align="middle" className="m-30">
          <Col>
            <h2>你确定要退出吗 ?</h2>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <Button type="ghost" className="m-10" onClick={this.logout}>退出</Button>
            <Button type="primary" className="m-10">
              <Link to="/">取消</Link>
            </Button>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default LogoutContainer;
