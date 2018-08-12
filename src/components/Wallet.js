import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import EthBalanceDisplay from './EthBalanceDisplay'

class Wallet extends Component {

  constructor(props) {
    super(props);
      this.state = {
        web3: props.web3,
        web3WH: props.web3WH
      };
    }


    render() {
      return (
        <div>
          <Container className="Wallet">
            <Row>
              <Col className="Wallet-body" sm="12" md={{ size: 8, offset: 2 }}>
                0x0abc1234537347... (<EthBalanceDisplay web3={this.state.web3} web3WH={this.state.web3WH} />)
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
}

export default Wallet;
